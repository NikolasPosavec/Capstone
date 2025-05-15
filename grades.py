import tkinter as tk
from tkinter import ttk, messagebox
import json
import os

class GradeBookApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Grade Book Manager")
        self.root.geometry("900x600")
        
        # Data structure
        self.classes = {
            "Section 1": {},
            "Section 2": {},
            "Section 3": {}
        }
        self.current_section = None
        self.current_student = None
        
        # Load existing data if available
        self.load_data()
        
        # Create GUI
        self.create_widgets()
        
    def create_widgets(self):
        # Menu bar
        menubar = tk.Menu(self.root)
        filemenu = tk.Menu(menubar, tearoff=0)
        filemenu.add_command(label="Save Data", command=self.save_data)
        filemenu.add_command(label="Exit", command=self.root.quit)
        menubar.add_cascade(label="File", menu=filemenu)
        self.root.config(menu=menubar)
        
        # Left frame - Class and student selection
        left_frame = ttk.Frame(self.root, padding="10")
        left_frame.pack(side=tk.LEFT, fill=tk.Y)
        
        # Class selection
        ttk.Label(left_frame, text="Select Section:").pack()
        self.section_var = tk.StringVar()
        self.section_combobox = ttk.Combobox(left_frame, textvariable=self.section_var, 
                                           values=list(self.classes.keys()), state="readonly")
        self.section_combobox.pack(fill=tk.X, pady=5)
        self.section_combobox.bind("<<ComboboxSelected>>", self.on_section_select)
        
        # Student list
        ttk.Label(left_frame, text="Students:").pack()
        self.student_listbox = tk.Listbox(left_frame, height=20, width=25)
        self.student_listbox.pack(fill=tk.BOTH, expand=True, pady=5)
        self.student_listbox.bind("<<ListboxSelect>>", self.on_student_select)
        
        # Add student button
        self.add_student_btn = ttk.Button(left_frame, text="Add Student", command=self.add_student)
        self.add_student_btn.pack(fill=tk.X, pady=5)
        
        # Right frame - Grade management
        right_frame = ttk.Frame(self.root, padding="10")
        right_frame.pack(side=tk.RIGHT, fill=tk.BOTH, expand=True)
        
        # Student info
        self.student_info_frame = ttk.LabelFrame(right_frame, text="Student Information", padding="10")
        self.student_info_frame.pack(fill=tk.X, pady=5)
        
        ttk.Label(self.student_info_frame, text="Name:").grid(row=0, column=0, sticky=tk.W)
        self.name_var = tk.StringVar()
        self.name_entry = ttk.Entry(self.student_info_frame, textvariable=self.name_var, width=30)
        self.name_entry.grid(row=0, column=1, sticky=tk.W, padx=5)
        
        ttk.Label(self.student_info_frame, text="ID:").grid(row=1, column=0, sticky=tk.W)
        self.id_var = tk.StringVar()
        self.id_entry = ttk.Entry(self.student_info_frame, textvariable=self.id_var, width=30)
        self.id_entry.grid(row=1, column=1, sticky=tk.W, padx=5)
        
        # Grades frame
        self.grades_frame = ttk.LabelFrame(right_frame, text="Grades", padding="10")
        self.grades_frame.pack(fill=tk.BOTH, expand=True, pady=5)
        
        # Assignment controls
        ttk.Label(self.grades_frame, text="Assignment:").grid(row=0, column=0, sticky=tk.W)
        self.assignment_var = tk.StringVar()
        self.assignment_entry = ttk.Entry(self.grades_frame, textvariable=self.assignment_var, width=20)
        self.assignment_entry.grid(row=0, column=1, sticky=tk.W, padx=5)
        
        ttk.Label(self.grades_frame, text="Grade:").grid(row=0, column=2, sticky=tk.W)
        self.grade_var = tk.StringVar()
        self.grade_entry = ttk.Entry(self.grades_frame, textvariable=self.grade_var, width=10)
        self.grade_entry.grid(row=0, column=3, sticky=tk.W, padx=5)
        
        self.add_grade_btn = ttk.Button(self.grades_frame, text="Add/Update Grade", command=self.add_grade)
        self.add_grade_btn.grid(row=0, column=4, padx=5)
        
        # Grades table
        self.grades_tree = ttk.Treeview(self.grades_frame, columns=("assignment", "grade"), show="headings")
        self.grades_tree.heading("assignment", text="Assignment")
        self.grades_tree.heading("grade", text="Grade")
        self.grades_tree.column("assignment", width=200)
        self.grades_tree.column("grade", width=100)
        self.grades_tree.grid(row=1, column=0, columnspan=5, sticky=tk.NSEW, pady=5)
        
        # Delete grade button
        self.delete_grade_btn = ttk.Button(self.grades_frame, text="Delete Selected Grade", command=self.delete_grade)
        self.delete_grade_btn.grid(row=2, column=0, columnspan=5, pady=5)
        
        # Configure grid weights
        self.grades_frame.grid_rowconfigure(1, weight=1)
        self.grades_frame.grid_columnconfigure(0, weight=1)
        
        # Stats frame
        self.stats_frame = ttk.LabelFrame(right_frame, text="Statistics", padding="10")
        self.stats_frame.pack(fill=tk.X, pady=5)
        
        ttk.Label(self.stats_frame, text="Average:").grid(row=0, column=0, sticky=tk.W)
        self.average_var = tk.StringVar()
        ttk.Label(self.stats_frame, textvariable=self.average_var).grid(row=0, column=1, sticky=tk.W)
        
        ttk.Label(self.stats_frame, text="Highest:").grid(row=1, column=0, sticky=tk.W)
        self.highest_var = tk.StringVar()
        ttk.Label(self.stats_frame, textvariable=self.highest_var).grid(row=1, column=1, sticky=tk.W)
        
        ttk.Label(self.stats_frame, text="Lowest:").grid(row=2, column=0, sticky=tk.W)
        self.lowest_var = tk.StringVar()
        ttk.Label(self.stats_frame, textvariable=self.lowest_var).grid(row=2, column=1, sticky=tk.W)
        
        # Initialize UI
        self.update_student_list()
        self.clear_student_info()
        
    def on_section_select(self, event):
        self.current_section = self.section_var.get()
        self.update_student_list()
        self.clear_student_info()
        
    def update_student_list(self):
        self.student_listbox.delete(0, tk.END)
        if self.current_section:
            students = sorted(self.classes[self.current_section].keys())
            for student in students:
                self.student_listbox.insert(tk.END, student)
                
    def on_student_select(self, event):
        if not self.student_listbox.curselection():
            return
            
        student_name = self.student_listbox.get(self.student_listbox.curselection())
        self.current_student = student_name
        student_data = self.classes[self.current_section][student_name]
        
        self.name_var.set(student_name)
        self.id_var.set(student_data.get("id", ""))
        
        # Update grades tree
        self.grades_tree.delete(*self.grades_tree.get_children())
        for assignment, grade in student_data.get("grades", {}).items():
            self.grades_tree.insert("", tk.END, values=(assignment, grade))
            
        self.update_stats()
        
    def clear_student_info(self):
        self.current_student = None
        self.name_var.set("")
        self.id_var.set("")
        self.grades_tree.delete(*self.grades_tree.get_children())
        self.clear_stats()
        
    def clear_stats(self):
        self.average_var.set("")
        self.highest_var.set("")
        self.lowest_var.set("")
        
    def update_stats(self):
        if not self.current_student or not self.current_section:
            self.clear_stats()
            return
            
        grades = self.classes[self.current_section][self.current_student].get("grades", {})
        if not grades:
            self.clear_stats()
            return
            
        grade_values = [float(grade) for grade in grades.values() if self.is_valid_grade(grade)]
        if not grade_values:
            self.clear_stats()
            return
            
        average = sum(grade_values) / len(grade_values)
        highest = max(grade_values)
        lowest = min(grade_values)
        
        self.average_var.set(f"{average:.2f}")
        self.highest_var.set(f"{highest:.2f}")
        self.lowest_var.set(f"{lowest:.2f}")
        
    def is_valid_grade(self, grade_str):
        try:
            grade = float(grade_str)
            return 0 <= grade <= 100
        except ValueError:
            return False
            
    def add_student(self):
        if not self.current_section:
            messagebox.showerror("Error", "Please select a section first")
            return
            
        # Simple dialog to add student
        dialog = tk.Toplevel(self.root)
        dialog.title("Add Student")
        dialog.geometry("300x150")
        dialog.transient(self.root)  # Set to be on top of the main window
        dialog.grab_set()  # Modal dialog
        
        ttk.Label(dialog, text="Student Name:").pack(pady=5)
        name_entry = ttk.Entry(dialog)
        name_entry.pack(pady=5)
        
        ttk.Label(dialog, text="Student ID:").pack(pady=5)
        id_entry = ttk.Entry(dialog)
        id_entry.pack(pady=5)
        
        def save_student():
            name = name_entry.get().strip()
            student_id = id_entry.get().strip()
            
            if not name:
                messagebox.showerror("Error", "Student name cannot be empty", parent=dialog)
                return
                
            if name in self.classes[self.current_section]:
                messagebox.showerror("Error", "Student already exists", parent=dialog)
                return
                
            self.classes[self.current_section][name] = {
                "id": student_id,
                "grades": {}
            }
            
            self.update_student_list()
            # Select the newly added student
            index = self.student_listbox.get(0, tk.END).index(name)
            self.student_listbox.selection_set(index)
            self.student_listbox.see(index)
            self.on_student_select(None)
            
            dialog.destroy()
            
        ttk.Button(dialog, text="Add", command=save_student).pack(pady=10)
        # Set focus to name entry and bind Enter key to save
        name_entry.focus()
        dialog.bind('<Return>', lambda e: save_student())
        
    def add_grade(self):
        if not self.current_student or not self.current_section:
            messagebox.showerror("Error", "Please select a student first")
            return
            
        assignment = self.assignment_var.get().strip()
        grade = self.grade_var.get().strip()
        
        if not assignment:
            messagebox.showerror("Error", "Assignment name cannot be empty")
            return
            
        if not self.is_valid_grade(grade):
            messagebox.showerror("Error", "Grade must be a number between 0 and 100")
            return
            
        # Add/update grade
        self.classes[self.current_section][self.current_student]["grades"][assignment] = grade
        
        # Update UI
        self.on_student_select(None)  # Refresh the view
        self.assignment_var.set("")
        self.grade_var.set("")
        self.assignment_entry.focus()
        
    def delete_grade(self):
        if not self.current_student or not self.current_section:
            messagebox.showerror("Error", "Please select a student first")
            return
            
        selected_item = self.grades_tree.selection()
        if not selected_item:
            messagebox.showerror("Error", "Please select a grade to delete")
            return
            
        assignment = self.grades_tree.item(selected_item)["values"][0]
        del self.classes[self.current_section][self.current_student]["grades"][assignment]
        
        # Update UI
        self.on_student_select(None)
        
    def save_data(self):
        try:
            with open("gradebook_data.json", "w") as f:
                json.dump(self.classes, f)
            messagebox.showinfo("Success", "Data saved successfully")
        except Exception as e:
            messagebox.showerror("Error", f"Failed to save data: {str(e)}")
            
    def load_data(self):
        if os.path.exists("gradebook_data.json"):
            try:
                with open("gradebook_data.json", "r") as f:
                    loaded_data = json.load(f)
                    
                # Merge loaded data with existing structure
                for section in self.classes:
                    if section in loaded_data:
                        self.classes[section] = loaded_data[section]
            except Exception as e:
                messagebox.showerror("Error", f"Failed to load data: {str(e)}")

def main():
    root = tk.Tk()
    app = GradeBookApp(root)
    root.mainloop()

if __name__ == "__main__":
    main()
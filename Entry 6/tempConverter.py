def celsius_to_fahrenheit(celsius):
    return (celsius * 9/5) + 32

def fahrenheit_to_celsius(fahrenheit):
    return (fahrenheit - 32) * 5/9

temp = float(input("Enter temperature: "))
unit = input("Enter unit (C/F): ").strip().upper()

if unit == "C":
    print(f"{temp}C is {celsius_to_fahrenheit(temp):.2f}F")
elif unit == "F":
    print(f"{temp}F is {fahrenheit_to_celsius(temp):.2f}C")
else:
    print("Invalid unit. Please enter C or F.")
       IDENTIFICATION DIVISION.
       PROGRAM-ID. PAYROLL.

       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 EMPLOYEE-NAME       PIC A(30).
       01 HOURLY-RATE         PIC 9(3)V99.
       01 HOURS-WORKED        PIC 9(3).
       01 GROSS-PAY           PIC Z(5).99.

       PROCEDURE DIVISION.
       BEGIN.
           DISPLAY 'Enter employee name: '
           ACCEPT EMPLOYEE-NAME
           DISPLAY 'Enter hourly rate: '
           ACCEPT HOURLY-RATE
           DISPLAY 'Enter hours worked: '
           ACCEPT HOURS-WORKED

           COMPUTE GROSS-PAY = HOURLY-RATE * HOURS-WORKED
           DISPLAY 'Employee: ' EMPLOYEE-NAME
           DISPLAY 'Gross pay: ' GROSS-PAY

           STOP RUN.

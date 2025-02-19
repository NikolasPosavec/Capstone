PROGRAM Factorial
  IMPLICIT NONE
  INTEGER :: n, i
  INTEGER :: fact  !renamed factorial to fact

  !initialize variables
  PRINT *, 'Enter a positive integer:'
  READ *, n

  IF (n < 0) THEN
    PRINT *, 'Factorial is not defined for negative numbers.'
  ELSE
    fact = 1  !initialize fact to 1

    DO i = 1, n
      fact = fact * i  !solvefactorial
    END DO

    !custom format for better alignment (get rid of weird spacing stuff)
    WRITE(*, '(A, I0, A, I0)') 'The factorial of ', n, ' is ', fact
  END IF

END PROGRAM Factorial

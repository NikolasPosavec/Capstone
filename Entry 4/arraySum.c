#include <stdio.h>

int main()
{
    double sum = 0.0;
    int amountOfNums = 0;

    printf("How many numbers would you like to add together? ");
    scanf("%d", &amountOfNums);

    double numbers[amountOfNums];

    for (int i = 0; i < amountOfNums; i++)
    {
        double currentNum = 0.0;

        printf("What is your %d number? ", i + 1);
        scanf("%lf", &currentNum);

        numbers[i] = currentNum;
    }

    for (int i = 0; i < amountOfNums; i++)
    {
        sum += numbers[i];
    }

    printf("The sum of your numbers is %.2f\n", sum);
    return 0;
}

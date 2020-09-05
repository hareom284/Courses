#include<stdio.h>

#include<cs50.h>

int main(void)

{

    int number;

    do

    {

        number = get_int("Height :");

    }
    while (number < 1 || number > 8);//check the negative number and accept between 1 to 8

    for (int i = 0; i < number; i++)

    {
        for (int a = number - 1; a > i; a--)

        {
            printf(" ");
        }
        //print space 

        for (int j = 0; j <= i; j++)

        {
            printf("#");
        }

        printf("  ");

        for (int j = 0; j <= i; j++)

        {
            printf("#");
        }

        printf("\n");

    }


}
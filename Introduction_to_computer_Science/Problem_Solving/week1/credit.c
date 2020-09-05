#include<stdio.h>
#include<math.h>
#include<cs50.h>

int main(void)
{
    long  number = get_long("Number: ");

    long length = number;
    long number1 = number;
    int count_length = 0;
    //measure the the of length
    while (length > 0)
    {
        length = length / 10;
        count_length++;

    }
    //calculate
    int second_to_last[100], i = 0, sum = 0;

    while (number > 0)
    {
        int temp = 0;
        second_to_last[i] = (number % 100) % 10;
        temp = (number % 100) / 10;
        number = number / 100;
        // temp = second_to_last[i];
        temp *= 2;
        if (temp > 10)
        {
            sum += temp % 10;
            sum += temp / 10;
        }
        else
        {
            sum += temp;
        }

        i++;
    }
    // printf("sum = %d",sum);

    for (int j = 0; j < (count_length / 2); j++)
    {
        sum += second_to_last[j];
    }
    // printf("lenght = %d",count_length);
    //checking card initial point
    long check, value1 = 10, value2 = count_length - 2;


    long power = pow(value1, value2);

    check = number1 % power;
    check = (number1 - check) / power;
    // printf("lenght = %ld",check);
    //print card name
    if (check % 100 >= 40 && check % 100 < 50)
    {
        if (count_length == 13 || count_length == 16)
        {
            printf("VISA\n");
        }
        else
        {
            printf("INVALID\n");
        }
    }

    else if (count_length == 15 && check == 37 || check == 34)
    {
        printf("AMEX\n");
    }
    else if (check >= 51 && check <= 55 && count_length == 16)
    {
        printf("MASTERCARD\n");
    }
    else
    {
        printf("INVALID\n");
    }


}
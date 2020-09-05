#include<stdio.h>
#include<cs50.h>
int main(void)
{
    int number;
     do
     {
        number = get_int("Height :");
     }while (number<1 || number >8);
     
    for (int i = 0; i < number; i++)
    {
        for (int a = number; a > i; a--)
        {
            printf(" ");
        }
        
        for (int j = 0; j <= i; j++)
        {
            printf("#");
        }
        printf(" ");
        for (int j = 0; j <= i; j++)
        {
            printf("#");
        }
        printf("\n");
        
    }
    
    

}
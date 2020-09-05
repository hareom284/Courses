// Buggy example for printf and debug50

#include <stdio.h>

int main(void)
{
    for (int i = 0; i <= 10; i++)
    {  for(int j=0;j<=i;j++)
     {
        printf("#");
       
     }
     printf("\n");
    }
}

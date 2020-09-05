#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>
#include <alloca.h>
int checkNum(string text);
void converttext(string plain_text, int number);
int main(int argc, char *argv[])
{
    string text = malloc(8);
    text = argv[1];
    while (argv[1] == NULL || argv[2] != NULL)
    {
        free(text);
        printf("Usage: ./caesar key \n");
        return 0;
    }
    int number = checkNum(text);
    if (number != 0)
    {
        string plain_text = get_string("plaintext: ");
        converttext( plain_text,number);
    
    }
}
int checkNum(string text)
{
    int number;
    for (int i = 0; i < strlen(text); i++)
    {
        if (!isdigit(text[i]))
        {
            printf("Usage: ./caesar key \n");

            return 0;
        }
    }
    number = atoi(text);
    return number;
}

 void converttext(string plain_text, int number)
{
      for (int i = 0; i <strlen(plain_text); i++)
    {
         char p = plain_text[i];
         
        if ( p >= 'a' && p <= 'z')
        {
           p = p - 97;
           p = (p + number) % 26;
           p = p + 97;
           plain_text[i]= p;
        }
        else if (p >= 'A'&& p<='Z')
        {
           p = p - 65;
           p = (p + number) % 26;
           p = p + 65;
           plain_text[i]= p;
        }
         
    }
      printf("ciphertext: %s\n",plain_text);
}
    

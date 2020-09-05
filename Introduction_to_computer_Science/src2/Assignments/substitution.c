#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>
#include <alloca.h>
int checkNum(string text);
void converttext(string plain_text, string text);
int main(int argc, char *argv[])
{
    string text= (char*)malloc(26);
    text = argv[1];
    while (text == NULL || argv[2] != NULL)
    {
        free(text);
        printf("Usage: ./substitution key");
        return 1;
    }
    checkNum(text);
    if (strlen(text) == 26)
    {
        string plain_text = get_string("plaintext: ");
        converttext( plain_text,text);

    }
}
int checkNum(string text)
{
    for (int i = 0; i < strlen(text); i++)
    {
        if (isdigit(text[i]))
        {
            printf("Usage: ./substitution key");

             return 1;
        }
        
     
    }
    if (strlen(text)>26 || strlen(text)<26)
    {
       printf("Key must contain 26 characters.");
       return 1;
    }

    return 1;
}

void converttext(string plain_text,string text)
{

  for(int i=0 ;i<strlen(plain_text);i++)
  { char p = plain_text[i];

    if(islower(p))
    { text[i]= tolower(text[i]);

      p=p-97;
      p=text[(int)p];
      plain_text[i]=tolower(p);
    }
    else if(isupper(p))
    {
        p = p - 65;
        p = text[(int)p];
        plain_text[i]=toupper(p);
    }
  }
printf("ciphertext: %s\n",plain_text);

}


#include<stdio.h>
#include<cs50.h>
#include<string.h>
#include<math.h>
void Count(string text);
void print(double index);
double Letter   = 0.0;
double Sentence = 0.0;
double words =1.0;
int main(void)
{
    string text = get_string("Text");



    Count(text);
    //  fivesix words in 214 letters
    // 100 words in ?
    Letter = ((100*Letter)/words);
    //  fivesix words in 4 sentences
    // 100 words in ?
    // printf("%d Letter \n", Letter);
    Sentence = ((100*Sentence)/words);
    // printf("%d Sentence", Sentence);

      double index = 0.0588 * Letter - 0.296 * Sentence - 15.8;
    
    print(index);

    return 0;
}

void Count(string text)
{
    for (int i=0;i<strlen(text);i++)
    {
        if ((text[i]>='A' && text[i]<='Z')  || (text[i]>='a' && text[i]<='z'))
        {
            Letter++;
        }
        else if (text[i]==' ')
        {
            words++;
        }
        else if (text[i]=='.' || text[i]=='!' || text[i]=='?')
        {
            Sentence++;
        }
    }



}

void print(double index)
{
    if(index <1)
    {
        printf("Before Grade 1");
    }
    else if (index>16)
    {
        printf("Grade 16+");
    }
    else
    {
        printf("Grade %0.0f",index);
    }
}
# cs50-course
# If you get segnment fault errors, you need free memory!
*You can use by using example code 

[Reference](https://www.geeksforgeeks.org/core-dump-segmentation-fault-c-cpp/)
https://www.asciichart.com/[asciichart.com

 ``
 
      // C program to illustrate 
      // Core Dump/Segmentfaultation
      #include <stdio.h> 
      #include<alloc.h> 
      int main(void) 
     { 
	   // allocating memory to p 
      int* p = malloc(8); 
     *p = 100; 
	
	// deallocated the space allocated to p 
	free(p); 
	
	// core dump/segmentation fault 
	// as now this statement is illegal 
	*p = 110; 
	
	return 0; 
      } 
``
## Example 2
[Click here](https://github.com/hareom284/cs50-course/blob/master/src2/Assignments/caesar.c)
# The usage of * and & in c
* & is represents which address store in your computer!
* *is represents got to that address!
```
    char *zaw ="Hare Om"
    printf("%s\n", zaw);//zaw
    printf("%c\n", zaw[1]);/zaw == printf("%c\n", *(s+1);
```
## we see that the same string values are causing our program to print “Different”:
[Reference](https://cs50.harvard.edu/summer/2020/notes/4/)
```
#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // Get two strings
    string s = get_string("s: ");
    string t = get_string("t: ");

    // Compare strings' addresses
    if (s == t)
    {
        printf("Same\n");
    }
    else
    {
        printf("Different\n");
    }
}

```
* Given what we now know about strings, this makes sense because each “string” variable is pointing to a different location in memory, where the first character     of each string is stored. So even if the values of the strings are the same, this will always print “Different”.

* For example, our first string might be at address 0x123, our second might be at 0x456, and s will be 0x123 and t will be 0x456, so those values will be           different.
* string is same as char *s 
# If you copy two string
```
#include <cs50.h>
#include <ctype.h>
#include <stdio.h>

int main(void)
{
    string s = get_string("s: ");

    string t = s;

    t[0] = toupper(t[0]);

    // Print string twice
    printf("s: %s\n", s);
    printf("t: %s\n", t);
}
```
* ### It will print both string two uppercase because string s = char *s and string *t = char * t so * t is copy the memory's location of s
      both of address are same so.
  
## For example,if you input s to "zaw" it will print Zaw two times! 
## If you want to allocate other location in memory you can malloc() function
## Here example as below!
```
#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    char *s = get_string("s: ");//zaw

    char *t = malloc(strlen(s) + 1);

    for (int i = 0, n = strlen(s); i < n + 1; i++)
    {
        t[i] = s[i];
    }

    t[0] = toupper(t[0]);

    printf("s: %s\n", s);//zaw
    printf("t: %s\n", t);//Zaw
}
``` 
### We can actually also use the strcpy library function with strcpy(t, s) instead of our loop, to copy the string s into t. To be clear, the concept of a “string” is from the C language and well-supported.
## You can <span style="color:orange;"> [Valgrid: for testing](https://www.valgrind.org/docs/manual/quick-start.html#quick-start.prepare) </span>


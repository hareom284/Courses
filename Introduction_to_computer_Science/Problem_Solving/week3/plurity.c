#include <cs50.h>
#include <stdio.h>
#include <string.h>

// Max number of candidates
#define MAX 9

// Candidates have name and vote count
typedef struct
{
    string name;
    int votes;
} candidate;

// Array of candidates
candidate candidates[MAX];

// Number of candidates
int candidate_count;

// Function prototypes
bool vote(string name);
void print_winner(void);

int main(int argc, string argv[])
{
    // Check for invalid usage
    if (argc < 2)
    {
        printf("Usage: plurality [candidate ...]\n");
        return 1;
    }

    // Populate array of candidates
    candidate_count = argc - 1;
    if (candidate_count > MAX)
    {
        printf("Maximum number of candidates is %i\n", MAX);
        return 2;
    }
    for (int i = 0; i < candidate_count; i++)
    {
        candidates[i].name = argv[i + 1];
        candidates[i].votes = 0;
    }

    int voter_count = get_int("Number of voters: ");

    // Loop over all voters
    for (int i = 0; i < voter_count; i++)
    {
        string name = get_string("Vote: ");

        vote(name);
        if (!vote(name))
        {
            printf("Invalid vote.\n");

            i--;
        }
    }

    // Display winner of election
    print_winner();
}

// Update vote totals given a new vote
bool vote(string name)
{
    bool check = false;
    for (int i = 0; i < candidate_count; i++)
    {
        if (strcmp(name, candidates[i].name) == 0)
        {
            candidates[i].votes++;
            check = true;
            break;
        }
    }
    return check;
}

// Print the winner (or winners) of the election
void print_winner(void)
{
    int max = candidates[0].votes;
    int index = 0, index2 = 0, count = 1;
    //checking maximum voter
    for (int i = 1; i < candidate_count; i++)
    {

        if (candidates[i].votes > max)
        {
            max = candidates[i].votes;
            index = i;
        }
    }
    //checking same voter
    for (int i = 0; i < candidate_count; i++)
    {
        if (candidates[i].votes == max && index != i)
        {
            index2 = i;
            count++;
        }
    }
    if (count == 1)
    {
        printf("%s\n", candidates[index].name);
    }
    else if (count == 2)
    {
        printf("%s\n", candidates[index2].name);

        printf("%s\n", candidates[index].name);
    }
    // printf("%s\n",candidates[index].name);
}
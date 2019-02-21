#include <iostream>
#include <vector>
using namespace std;

bool incorrectPasscodeAttempts(string passcode, vector<string> attempts)
{
  int count{0};
  for (int i = 0; i < attempts.size(); i++)
  {
    if (attempts[i] == passcode)
    {
      count = 0;
    }
    else
    {
      count += 1;
    }
    if (count > 9)
    {
      return true;
    }
  };
  return false;
}

int main()
{
  string passcode{"1111"};
  vector<string> attempts = {"1111", "4444",
                             "9999", "3333",
                             "8888", "2222",
                             "7777", "0000",
                             "6666", "7285",
                             "5555", "1111"};
  cout << boolalpha;
  cout << incorrectPasscodeAttempts(passcode, attempts);
}
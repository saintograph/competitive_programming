#include <iostream>
#include <string>

std::string reverse(std::string s)
{
  std::string foo;
  for (int i = s.size(); i != -1; i--)
  {
    foo.append(1, s[i]);
  };
  return foo;
};

bool checkPalindrome(std::string inputString)
{
  std::string reversed = reverse(inputString);
  for (int i = 1; i < inputString.size() + 1; i++)
  {
    if (inputString[i - 1] != reversed[i])
    {
      std::cout << "False";
      return false;
    }
  }
  std::cout << "True";
  return true;
};

int main()
{
  checkPalindrome("abba");
  return 0;
};

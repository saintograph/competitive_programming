#include <stdio.h>
#include <iostream>
using namespace std;

int main() 
{
  int n;
  cin >> n;
  int arr[n];
  for(int i = 1; i <= n; i++) {
    cin >> arr[i - 1];
  }
  for(int i = n - 1; i >= 0; i--) {
    cout << arr[i] << ' ';
  }
  return 0;
}

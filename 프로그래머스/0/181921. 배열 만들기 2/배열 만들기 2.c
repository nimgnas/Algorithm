#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int numCount(int num);
int binaryLength(int num);
char* toBinaryFive(int num);

int* solution(int l, int r) {
    int* answer = (int*)malloc(sizeof(int) * (r / l));
    
    int maxNum = pow(2, numCount(r));
    
    int index = 0;
    for(int i = 1; i <= maxNum; i++) {
        int result = strtol(toBinaryFive(i), NULL, 10);
        if(result >= l && result <= r)
            answer[index++] = result;
    }
    if(index == 0) answer[0] = -1;
    
    return answer;
}

int numCount(int num) {
    int count = 0;
    
    while(num != 0) {
        num /= 10;
        count++;
    }
    
    return count;
}

int binaryLength(int num) {
    int count = 0;
    
    while(num > 0) {
        num /= 2;
        count++;
    }
    return count;
}

char* toBinaryFive(int num) {
    int numToBinaryLength = binaryLength(num);
    char* binary = (char*)malloc(numToBinaryLength);
    
    binary[numToBinaryLength--] = '\0';
    while(num > 0) {
        binary[numToBinaryLength--] = num % 2 == 0 ? '0' : '5';
        num /= 2;
    }
    
    return binary;
}
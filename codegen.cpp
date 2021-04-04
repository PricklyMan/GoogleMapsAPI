#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <iostream>
#include <fstream> 
#include <string.h> 
using namespace std;
#define n 5 //последняя цифра студенческого билета (3) + 2
#define m 6




int main(int argc, char *argv[]) {
	setlocale(0,"rus");
ifstream file;
file.open("coords.txt");
string cord[120],s;
int i=0;
while(getline(file,s,' ')){
	cord[i]=s;
	i++;
	if(i%2==0) cout<<"  tower["<<i/2<<"] = new google.maps.Marker({position: { lat: "<<cord[i-2]<<", lng: "<<cord[i-1]<<"},map,icon: image,});  \n";
}









            return 0;
}


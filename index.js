const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get("/3", (_request, _response) => {
  return _response.type('text/plain').send(`
  #creating a file
read -p "Enter file name: " file_name
touch "$file_name"

#getting file contents
echo "Enter the file contents: "
cat >"$file_name"

#sorting files
echo "Sort files"
sort "$file_name"

#counting lines
lines=$(wc -l "$file_name")
echo "Line numbers: $lines"

#lowercase to upper case
cat "$file_name" | tr 'a-z' 'A-Z'

#searching for word
read -p "Enter word to search: " word_to_search
cat "$file_name" | grep "$word_to_search"

#renaming the file
read -p "Enter new file_name: " new_file_name
mv "$file_name" "$new_file_name"



#===============================================
#==============IF-ELSE-TUTORIAL=================
#===============================================

read -p "Enter number : " number

if [ $((number % 2)) -eq 0 ]; then
  echo "$number is a even number"
else
  echo "$number is a odd number"
fi
`);
});


app.get("/4", (_request, _response) => {
  return _response.type('text/plain').send(`
    read -p "Enter the radius of circle" radius
    pi=3.14
    two=2

    area=$(echo "$pi*$radius*$radius" | bc)
    perimeter=$(echo "$pi*$radius*$two" | bc)

    echo "$perimeter"
    echo "$area"
  `);
})

app.get("/5", (_request, _response) => {
  return _response.type('text/plain').send(`
    echo "enter the value of n "
    read n
    for ((i=1; i<=n; i++))
    do
      for ((j=1; j<=i; j++))
      do
        echo -n "*"
      done
      echo
    done

    for ((i=n-1; i>=1; i--))
    do
      for ((j=1; j<=i; j++))
      do
        echo -n "*"
      done
      echo
    done
    
  `);
});

app.get("/6", (_request, _response) => {
  return _response.type('text/plain').send(`
    size=8
    black="\e[40m \e[0m"
    white="\e[47m \e[0m"

    for ((i=1; i<=size; i++))
    do
      for ((j=1; j<=size; j++))
      do
        if (( (i + j) % 2 == 0 ))
        then
          echo -ne "$black"
        else
          echo -ne "$white"
        fi
      done
      echo
    done
    echo -e "\e[0m"
    
  `);
});


app.get("/7", (_request, _response) => {
  return _response.type('text/plain').send(`
    echo "Enter the year"
    read year
    echo "Checking if the year is leap year or not"

    if [ $(($year % 400)) -eq 0 ]; then
      echo "Year $year is a leap year"
    elif [ $(($year % 100)) -eq 0 ]; then
      echo "Not a leap year"
    elif [ $(($year % 4)) -eq 0 ]; then
      echo "Year $year is a leap year"
    else
      echo "Year $year not a leap year"
    fi
 
  `);
});

app.get("/8", (_request, _response) => {
  return _response.type('text/plain').send(`
    #!/bin/bash

# Read input number from the user
read -p "Enter a number: " num

# Check if the input is a valid integer
if [[ $num =~ ^-?[0-9]+$ ]]; then
  # Use case statement to check the number of digits
  case $num in
    -[0-9] | [0-9])
      echo "$num is a single-digit number."
      ;;
    -[1-9][0-9] | [1-9][0-9])
      echo "$num is a two-digit number."
      ;;
    -[1-9][0-9][0-9] | [1-9][0-9][0-9])
      echo "$num is a three-digit number."
      ;;
    *)
      # If number has more than three digits
      echo "$num is more than three digits."
      ;;
  esac
else
  echo "Please enter a valid number."
fi

==================================

#!/bin/bash

# Ask the user to enter the filename
read -p "Enter the filename: " filename

# Check if the file exists
if [[ -e $filename ]]; then
  # Use a case statement to check the file type
  case $(file --mime-type -b "$filename") in
    text/*)
      echo "$filename is a text file."
      ;;
    application/*)
      echo "$filename is an application file."
      ;;
    image/*)
      echo "$filename is an image file."
      ;;
    audio/*)
      echo "$filename is an audio file."
      ;;
    video/*)
      echo "$filename is a video file."
      ;;
    application/pdf)
      echo "$filename is a PDF file."
      ;;
    *)
      echo "$filename is of unknown type."
      ;;
  esac
else
  echo "The file does not exist."
fi

=======================================

#!/bin/sh

echo "Enter a vehicle name"
read vehicle

case $vehicle in
  "Car" | "Bike")
    echo "$vehicle -> Personal Vehicle"
    ;;
  "Truck")
    echo "$vehicle -> Heavy Vehicle"
    ;;
  "Bus")
    echo "$vehicle -> Public Transport"
    ;;
  *)
    echo "$vehicle -> Unknown Category"
    ;;
esac
  
  `);
});

app.get("/9", (_request, _response) => {
  return _response.type('text/plain').send(`
    #include<bits/stdc++.h>
using namespace std;

struct Process{
  int id, at, bt, ct, tat, wt;
};

bool compareArrival(Process a, Process b){
  return a.at < b.at;
}

int main(void){

  int n;
  cout << "Enter the number of processes: ";
  cin >> n;

  Process p[n];

  for(int i=0; i<n; i++){
    cout << "AT & BT: ";
    cin >> p[i].at >> p[i].bt;
    p[i].id = i+1;
  }

  sort(p, p+n, compareArrival);

  int currentTime = 0;

  for(int i=0; i<n; i++){

    if(currentTime < p[i].at){
      currentTime = p[i].at;
    }

    p[i].ct = currentTime + p[i].bt;
    p[i].tat = p[i].ct - p[i].at;
    p[i].wt = p[i].tat - p[i].bt;

    currentTime =  p[i].ct;
  }

  cout << "Output" << endl;

  cout << setw(5) << "P" 
       << setw(5) << "at"
       << setw(5) << "bt"
       << setw(5) << "ct"
       << setw(5) << "tat"
       << setw(5) << "wt" << endl;

  for(int i=0; i<n; i++){
    cout << setw(5) << p[i].id
       << setw(5) << p[i].at
       << setw(5) << p[i].bt
       << setw(5) << p[i].ct
       << setw(5) << p[i].tat
       << setw(5) << p[i].wt << endl;
  }

  return 0;
} 
  `);
});

app.get("/10", (_request, _response) => {
  return _response.type('text/plain').send(`
#include<bits/stdc++.h>
using namespace std;

struct Process {
  int id, at, bt, pr, ct, tat, wt;
};

bool compareArrival(Process a, Process b){
  return a.at < b.at;
}

int main(void){
  int n;
  cout << "Enter the number of processes: ";
  cin >> n;

  Process p[n];
  memset(p, 0, sizeof(p));

  for(int i=0; i<n; i++){
    cout << "AT & BT & Priority : ";
    cin >> p[i].at >> p[i].bt >> p[i].pr;
    p[i].id = i+1;
  }

  sort(p, p+n, compareArrival);

  int completed = 0, currentTime = 0;

  while(completed != n){
    int idx = -1;
    int hp = 0;

    for(int i=0; i<n; i++){
      if(p[i].at <= currentTime && p[i].ct == 0){
        if(p[i].pr >= hp){
          hp = p[i].pr;
          idx = i;
        }
      }
    }

    if(idx != -1){
      currentTime += p[idx].bt;
      p[idx].ct = currentTime;
      p[idx].tat = p[idx].ct - p[idx].at;
      p[idx].wt = p[idx].tat - p[idx].bt;
      completed++;
    } else {
      currentTime++;
    }
  }


  cout << "Output" << endl;

  cout << setw(5) << "P" 
       << setw(5) << "at"
       << setw(5) << "bt"
       << setw(5) << "ct"
       << setw(5) << "tat"
       << setw(5) << "wt" << endl;

  for(int i=0; i<n; i++){
    cout << setw(5) << p[i].id
       << setw(5) << p[i].at
       << setw(5) << p[i].bt
       << setw(5) << p[i].ct
       << setw(5) << p[i].tat
       << setw(5) << p[i].wt << endl;
  }


  return 0;
}    
//priority-non-reemptive
  `);
});


app.get("/11", (_request, _response) => {
  return _response.type('text/plain').send(`
    #include<bits/stdc++.h>
using namespace std;

struct Process {
  int id, at, bt, pr, ct, tat, wt, rt;
};

bool compareArrival(Process a, Process b){
  return a.at < b.at;
}

int main(void){

  int n; 
  cout << "Process :";
  cin >> n;

  Process p[n];

  for(int i=0; i<n; i++){
    cout << "AT & BT & Priority: ";
    cin >> p[i].at >> p[i].bt >> p[i].pr;
    p[i].id = i + 1;
    p[i].rt = p[i].bt;
    p[i].ct = 0;
    p[i].tat = 0;
    p[i].wt = 0;
  }

  sort(p, p+n, compareArrival);
  int completed = 0, currentTime = 0;

  while(completed != n){
    int idx = -1;
    int hp = -1;
    
    for(int i=0; i<n; i++){
      if(p[i].at <= currentTime && p[i].rt > 0){
        if(p[i].pr > hp) {
          hp = p[i].pr;
          idx = i;
        } else if(p[i].pr == hp) {
          if(p[i].at < p[idx].at){
            idx = i;
          }
        }
      }
    }

    if(idx != -1){
      p[idx].rt--;
      currentTime++;

      if(p[idx].rt == 0){
        p[idx].ct = currentTime;
        completed++;
      }
    } else {
      currentTime++;
    }
  }

  for(int i=0; i<n; i++){
    p[i].tat = p[i].ct - p[i].at;
    p[i].wt = p[i].tat - p[i].bt;
  }

  cout << "Output" << endl;

  cout << setw(5) << "P" 
       << setw(5) << "at"
       << setw(5) << "bt"
       << setw(5) << "pr"
       << setw(5) << "ct"
       << setw(5) << "tat"
       << setw(5) << "wt" << endl;

  for(int i=0; i<n; i++){
    cout << setw(5) << p[i].id
       << setw(5) << p[i].at
       << setw(5) << p[i].bt
       << setw(5) << p[i].pr
       << setw(5) << p[i].ct
       << setw(5) << p[i].tat
       << setw(5) << p[i].wt << endl;
  }
  
  return 0;

}

//priotiry-preemptive
  `);
});



app.get("/12", (_request, _response) => {
  return _response.type('text/plain').send(`
#include<bits/stdc++.h>
using namespace std;

int main(void){
  int capacity, n;

  cout << "Enter capacity: ";
  cin >> capacity;

  cout << "Enter number of references: ";
  cin >> n;

  vector<int> cache;
  vector<int> pages(n);

  cout << "Enter reference string: ";
  for(int i=0; i<n; i++){
    cin >> pages[i];
  }

  for(int i=0; i<n; i++){
    auto it = find(cache.begin(), cache.end(), pages[i]);

    if(it != cache.end()){
      cache.erase(it);
    }

    else if (cache.size() == capacity){
      cache.erase(cache.begin());
    }

    cache.push_back(pages[i]);

    cout << "Cache: ";
    for(int p: cache) cout << p << " ";
    cout << endl;
  }

  return 0;

} 
//lru
  `);
});


app.get("/13", (_request, _response) => {
  return _response.type('text/plain').send(`
    #include<bits/stdc++.h>
using namespace std;

int main(void){

  int n, m;
  cout << "Enter number of processes: ";
  cin >> n;

  cout << "Enter number of resources: ";
  cin >> m;

  int allocation[n][m], maximum[n][m], need[n][m], available[m];

  cout << "Enter allocation matrix: " << endl;
  for(int i=0; i<n; i++)
    for(int j=0; j<m; j++)
      cin >> allocation[i][j];

  cout << "Enter maximum matrix: " << endl;
  for(int i=0; i<n; i++)
    for(int j=0; j<m; j++)
      cin >> maximum[i][j];

  cout << "Enter available resources: " << endl;
  for(int j=0; j<m; j++)
    cin >> available[j];

  //calculating the need matrix
  for(int i=0; i<n; i++)
    for(int j=0; j<m; j++)
      need[i][j] = maximum[i][j] - allocation[i][j];


  vector<bool> finished(n, false);
  vector<int> safeSequence;

  int count =0;

  while(count < n){

    bool found = false;

    for(int i=0; i<n; i++){

      if(!finished[i]){
        bool canExecute = true;

        for(int j=0; j<m; j++){
          if(need[i][j] > available[j]){
            canExecute = false;
            break;
          }
        }

        if(canExecute){
          for(int j=0; j<m; j++){
            available[j] += allocation[i][j];
          }
          safeSequence.push_back(i);
          finished[i] = true;
          found = true;
          count++;
        }
      }
    }

    if (!found) {
      cout << "System is not in a safe state" << endl;
      return 0;
    }

  }

  cout << "System is in a safe state: " << endl;
  for(int i=0; i<safeSequence.size(); i++)
    cout << "P" << safeSequence[i] << " ";
  cout << endl;

  return 0;
}/bankers 
  `);
});


app.get("/lemaro", (_request, _response) => {
  return _response.type('text/plain').send(`
    
  `);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


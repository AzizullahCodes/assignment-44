// problem solving assignment 44
/*___________________________ Question no 1 ________________________
 Change Text Color on Hover
Goal: When the mouse hovers over a paragraph, change its text color to red. When the
 mouse leaves, change it back to black.

✅ Expected Output: Text turns red when you hover, and returns to black when mouse 
leaves.
_____________________ Answer ________________________________________ */
// function red(){let get = document.getElementById('para');
//     get.style.color = 'red'
// }

// function origional(){let get = document.getElementById('para');
//     get.style.color = 'black'
// }
/*___________________________ Question no 2 ________________________
Show Hidden Message on Hover
Goal: Create a div and a hidden paragraph. When you hover over the div, show the hidden paragraph. 
When you move the mouse out, hide the paragraph again.

✅ Expected Output: Message appears only when hovering.
_____________________ Answer ________________________________________ */
//  function showing(){let getdiv = document.getElementById('div');
//     let getpara = document.getElementById('message');
//     getpara.style.display = 'block';
//  }

//  function offing(){
//     let getpara = document.getElementById('message');
//     getpara.style.display = 'none';
//  }
/*___________________________ Question no 5 ________________________
give example of onFocus 
_____________________ Answer ________________________________________ */
// function resizing(){let get = document.getElementById('userinput');
//     get.style.backgroundColor = 'red';
//     get.style.height = '200px';
//     get.style.width = '200px'
// }

/*___________________________ Question no 6 ________________________
onFocus and onBlur
_____________________ Answer ________________________________________ */
// function coloring(){let get = document.getElementById('userinput');
//     get.style.backgroundColor = 'blue';
// }
// function styling(){let get = document.getElementById('userinput');
//     get.style.backgroundColor = 'red';
// }

/*___________________________ Question no 7 ________________________
classList applying
_____________________ Answer ________________________________________ */
// function coloring(){let get = document.getElementById('para');
//     get.className   += ' pp';
    
// }
// // classList 
// // adding 
// function adding(){let get = document.getElementById('heading');
//     get.classList.add('cl');
// }
// // removing 
// function removing(){let get = document.getElementById('heading');
//     get.classList.remove('cl');
// }
// // toggling
// function toggling(){let get = document.getElementById('heading');
//     get.classList.toggle('cl');
// }
// // replacing 
// function replacing(){let get = document.getElementById('heading');
//     get.classList.replace('cl','rl');
// }
/*___________________________ Question no 8 ________________________
 Change All Paragraph Text to Red
Instruction: Get all <p> tags and change their text color to red using a loop.

✅ Expected Output: Every paragraph on the page turns red.
_____________________ Answer ________________________________________ */
// let get = document.getElementsByTagName('p');
// console.log(get);
// for(let i = 0; i <get.length;i++){get[i].style.color = 'red';}

/*___________________________ Question no 9 ________________________
swapping img by two function and buttons
_____________________ Answer ________________________________________ */
// function showImgOne(){
//     let get = document.getElementById('mainImg');
//     get.src = "./assets/iqbal.webp";
   
// }

// function showImgTwo(){
//     let get = document.getElementById('mainImg');
//     get.src = "./assets/qaid.jpg";
// }


/*___________________________ Question no 10 ________________________
bulb on off function
_____________________ Answer ________________________________________ */
// function offing(){let getBulb = document.getElementById('mainImg');
//     getBulb.src = "./assets/bul-off.jpg";
// }
// function oning(){let getBulb = document.getElementById('mainImg');
//     getBulb.src = "./assets/bulb-on.jpg";
// }


/*___________________________ Question no 11 ________________________
const user = {
  name: 'Ali',
  address: {
    city: 'Lahore',
    geo: {
      lat: '31.5204',
      lng: '74.3587'
    }
  }
};
👉 Access user.address.geo.lat and user.address.geo.altitude using optional chaining.


_____________________ Answer ________________________________________ */
// const user = {name : 'Ali',
//     address : {city : 'Lahore',
//         geo : {lat : '31.528',
//             lng : '74.345'
//         }
//     }
// };
// console.log(user?.address?.geo?.lat);
// console.log(user?.address?.geo?.altitude)

/*___________________________ Question no 12 ________________________
const student = {
  name: 'Sara',
  getDetails() {
    return `${this.name} is a student`;
  }
};
👉 Use optional chaining to call student.getDetails() and
 student.profile.getName() safely.
_____________________ Answer ________________________________________ */
// const student = {
//   name: 'Sara',
//   getDetails() {
//     return `${this.name} is a student`;
//   }
// };
// console.log(student.getDetails());
// console.log(student?.profile?.getName());

/*___________________________ Question no 13 ________________________
const books = [
  { title: 'JavaScript Basics' },
  null,
  { title: 'CSS Mastery' }
];
👉 Loop through the array and print the title of each book using optional chaining.
_____________________ Answer ________________________________________ */
// const books = [{title : 'javaScript Basis'},
//     null,{title : 'css Matery'}
// ];
// for(let i = 0; i<books.length; i++){console.log(books[i]?.title)}
/*___________________________ Question no 14 ________________________
const employee = {
  name: 'Ahmed',
  job: {
    title: 'Developer'
  }
};
👉 Use optional chaining and nullish coalescing (??) to get employee.job.salary or 
"Not defined".
_____________________ Answer ________________________________________ */
// const employee = {name : 'Ahmed',job :{titile : 'developer'}}
// console.log(employee?.job?.salary)

/*___________________________ Question no 15 ________________________
function getUser() {
  return null;
}
👉 Access getUser().name safely using optional chaining.

_____________________ Answer ________________________________________ */
// function getUser(){return null;}
// console.log(getUser()?.name)
/*___________________________ Question no 16 ________________________
 Clone an Array
Question:
You have the following array:

let fruits = ["apple", "banana", "mango"];
Create a new array called allFruits that contains the same elements using the 
spread operator.
👉 Make sure changes to allFruits do not affect fruits.
_____________________ Answer ________________________________________ */
// let fruits = ['apple','banana','mango'];
// console.log(fruits);
// let allFruits = [...fruits];
// console.log(allFruits);
/*___________________________ Question no 17 ________________________
Merge Two Arrays
Question:
Given two arrays:
let boys = ["Ali", "Zain"];
let girls = ["Ayesha", "Fatima"];
Create a single array called students using the spread operator that contains all 
names.
_____________________ Answer ________________________________________ */
// let boys = ['Ali','Zain'];
// let girls = ['Ayesha','Fatima'];
// // let students = boys.concat(girls);
// let students = [...boys,...girls];
// console.log(students)
/*___________________________ Question no 18 ________________________
Add an Element to the Beginning and End
Question:
You have this array:

let languages = ["HTML", "CSS"];
Using the spread operator, create a new array that adds "JavaScript" at the end
 and "C" at the start.
👉 Do not use push() or unshift().

_____________________ Answer ________________________________________ */
// let languages = ['html','css'];
// let lan = ['c',...languages,'Javascript']
// console.log(lan);

/*___________________________ Question no 19 ________________________
Copy an Object and Add a Property
Question:
You have this object:
let person = { name: "Aziz", age: 22 };
Using the spread operator, create a new object called personDetail and add a new
property country: "Pakistan".

_____________________ Answer ________________________________________ */
// let person = {name : 'Aziz',
//     age : 22
// }

// let personDetail = {...person, country : 'pakistan '};
// console.log(person);
// console.log(personDetail);
/*___________________________ Question no 20 ________________________
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
Use the spread operator to create a new object that contains properties from both 
obj1 and obj2.
_____________________ Answer ________________________________________ */
// let obj1 = {a : 1,
//     b : 2
// }
// let obj2 = {c : 3,
//     d : 4
// }
// let objec = {...obj1,...obj2};
// console.log(objec);
/*___________________________ Question no 21 ________________________
Update a Value While Copying an Object
Question:
You have:

let book = { title: "JS Basics", pages: 200 };
Create a new object updatedBook using the spread operator, but update 
the pages to 300.

_____________________ Answer ________________________________________ */
// let book = {title : 'js basics',pages : 200}
// let updatedBook = {...book,pages: 300};
// console.log(updatedBook);

/*___________________________ Question no 22 ________________________
Remove a Value While Copying an Object
Question:

let user = { name: "Ali", age: 25, email: "ali@example.com" };
Create a copy of user without the email property using spread operator and 
destructuring.

_____________________ Answer ________________________________________ */
// let user = {name :'Ali',
//     age : 32,
//     email : 'ali@example.com'
// };
// let newObject = {...user};
// console.log(newObject);
// delete newObject.email;
// console.log(newObject)

/*___________________________ Question no 23 ________________________
 Flatten a Nested Array
Question:
let nested = [1, 2, [3, 4], 5];
Use the spread operator to create a flat array:
👉 Result: [1, 2, 3, 4, 5]
_____________________ Answer ________________________________________ */
// let nested = [1,2,[3,4],5]
// console.log(nested);
// let flat = [...nested,...[3,4]];
// console.log(flat)

/*___________________________ Question no 24 ________________________
callback function
_____________________ Answer ________________________________________ */
// first function
// const cb = () =>{console.log('i will be executed there')}
// // second function 
// const greet = (user,cb)=>{console.log(`hello ${user}`);
// cb();}

// greet('ahmed',cb);

/*___________________________ Question no 25 ________________________
callback function 
_____________________ Answer ________________________________________ */
//  const calculating = (a,b)=>{let sum = a + b;
//   console.log(sum)
//  }

//  const multiplication = (m,n,calculating) =>{let multiplication = m * n;
//   console.log(multiplication);
//   calculating(2,3);
//  }
// multiplication(10,20,calculating)
/*___________________________ Question no 26 ________________________
 Simple Greeting
Q: Write a function sayHello(name) that prints "Hello, [name]".
Then, write another function greetUser(callback) that takes a callback and calls it with your name.
Expected Output:
Hello, Aziz
_____________________ Answer ________________________________________ */
// const greetUser = () =>{console.log('i am call back function')}

// const anotherFunction = (greetUser) =>{console.log('I am general function');
//   greetUser();
// }
// anotherFunction(greetUser)

/*___________________________ Question no 27________________________
 call back function
_____________________ Answer ________________________________________ */
// function add(a,b){let ans = a + b;
//   console.log(ans)
// }

// function subtracting(m,n,add){let output = m-n ;
//   console.log(`output : `, output);
//   add(100,200)
// }
// subtracting(4,2,add)
/*___________________________ Question no 28 ________________________
Use Callback to Display Even or Odd
Q: Write a function checkNumber(num) that logs whether a number is even or odd.
Use a processNumber(num, callback) function to pass the number and function.

Expected Output:

7 is odd
_____________________ Answer ________________________________________ */
// const checkNumber = (num) =>{if(num % 2 == 0){console.log('even')}
// else{console.log('odd')}}

// function processNumber(num,checkNumber){checkNumber(num);}
// processNumber(8,checkNumber)
/*___________________________ Question no 29 ________________________
 
addition by call back function
_____________________ Answer ________________________________________ */
// function adding(a,b,c){let ans = a + b + c; 
//   console.log(ans)
// }
// function callbacking(adding){adding(4,2,1);
//   adding(100,200,200)
// }
// callbacking( adding)
/*___________________________ Question no 30 ________________________
Create a function greet that takes a name and a callback function. The callback should display 
a greeting message.

// Expected usage:
greet("Aziz", function(name) {
  console.log("Hello " + name + ", welcome!");
});
_____________________ Answer ________________________________________ */
// function callbacking(name){console.log(`Hello ${name} welcome`)}

// function greet(name,callbacking){callbacking(name)}
// greet('Aziz',callbacking)
/*___________________________ Question no 31 ________________________
 Calculator with Callback
Write a calculate function that takes two numbers and a callback (like add, subtract, etc.).
_____________________ Answer ________________________________________ */
// const callback = (a,b,c) =>{ let ans = a + b + c; 
//   console.log(ans)
// }

// const calculate = (callback) => {callback(3,2,2)};
// calculate(callback)

/*___________________________ Question no 32 ________________________
Create a function filterArray that takes an array and a callback to filter values.

// Use it like:
filterArray([1, 2, 3, 4], function(num) {
  return num % 2 === 0;
});
_____________________ Answer ________________________________________ */

// const callback = (arr) => {let even = [];
// for(let key of arr){if(key % 2 == 0){even.push(key)}}
// // if no even no found 
// if(even.length === 0){console.log('No even')}
// else{console.log(even)}
// }
// // main function 
// // Main function that takes array and callback
// const filterArray = (arr, callback) => {
//   callback(arr);
// };
// // Calling the function
// let arr = [1, 2, 3, 4, 5, 6];
// filterArray(arr, callback);

/*___________________________ Question no 33 ________________________
find even by call back function by for loop
_____________________ Answer ________________________________________ */
//  const callback = (array)=>{let even = [];
//   for(let key of array){if(key %  2 == 0){even.push(key)}
// }

// if(even.length === 0){console.log('No even no found')}
// else{console.log(even)}
//  };




//  let array = [1,3,5,7];
//  const process = (array,callback) => {callback(array)};
//  process(array,callback)




/*___________________________ Question no 34 ________________________
Recursion Function 
_____________________ Answer ________________________________________ */
// const recursionFunction = () => {const userinput = prompt('enter your name');
//   if(!userinput) {recursionFunction();}
// else{console.log(`hello ${userinput}`)}}

// example two
// let count = 1;
// function ank(){
//   if(count <=10){console.log(count * 4);
//     count++;
//     ank()
//   }
  
// }
// ank()
// example 3 

// function test(num){console.log(num);
//   num++;
//   if(num <=5){test(num)}
// }
// test(1)

// example 4 
// function fact(num){if(num <=1){return 1;}
// else{return num* fact(num-1)}};
// console.log(fact(5))
/*___________________________ Question no 35 ________________________
 palindrome checker
_____________________ Answer ________________________________________ */
// let word = "madam";
// let reversed = "";

// for (let i = word.length - 1; i >= 0; i--) {
//   reversed += word[i];
// }

// if (word === reversed) {
//   console.log(word + " is a palindrome");
// } else {
//   console.log(word + " is not a palindrome");
// }

/*___________________________ Question no 36 ________________________
return call back function 
_____________________ Answer ________________________________________ */

// function calclating(a,b){let ans = a + b;
//   return ans;
// }

// function process(calclating){calclating(3,2);
//   return calclating(3,2)
// };
//  let final = process(calclating);
//  console.log(final)
/*___________________________ Question no 37 ________________________
recursion function
_____________________ Answer ________________________________________ */
// let count = 1;
// function recursionFunction(){if(count <= 10){console.log(count * 4);
//   count++;
//   recursionFunction()
// }
// }
// recursionFunction()


/*___________________________ Question no 38 ________________________
call of three function inside in object;
_____________________ Answer ________________________________________ */
// const handleCalculation = (n)=>{const obj = {};
// obj.reset = () =>{return n;};
// obj.inc = () =>{return n + 1;};
// obj.dec = ()=>{return n - 1;};
// return obj;}
// const output = handleCalculation(5);
// console.log(output.dec())
// console.log(output.inc());
// console.log(output.reset())


/*___________________________ Question no 40 ________________________
Create a function createMultiplier(num) that returns an object with three methods:

double() → returns the number multiplied by 2

triple() → returns the number multiplied by 3

square() → returns the number squared

Required Output:


const output = createMultiplier(4);
console.log(output.double()); // 8
console.log(output.triple()); // 12
console.log(output.square()); // 16
_____________________ Answer ________________________________________ */
// const createMultiplier = (num) =>{obj = {};
// obj.double = (num)=>{return num * 2;
// };
// obj.tripple = (num) => {return num *  3;};
// obj.square = (num) => {return num * num;};
// return obj;
// }
// let Answer = createMultiplier();
// console.log(Answer.double(3));
// console.log(Answer.tripple(4))
// console.log(Answer.square(7));

/*___________________________ Question no 41 ________________________
Create a function stringHandler(str) that returns an object with three methods:
upper() → returns the string in uppercase
lower() → returns the string in lowercase
length() → returns the length of the string
Required Output:
const output = stringHandler("Hello");
console.log(output.upper());  // "HELLO"
console.log(output.lower());  // "hello"
console.log(output.length()); // 5

_____________________ Answer ________________________________________ */
// const stringHandler = () =>{obj = {};
// obj.upper = (str) =>{return str.toUpperCase()};
// obj.lower = (str)=>{return str.toLowerCase()};
// obj.lengt = (str) =>{return str.length;}
// return obj;}
// let output = stringHandler();
// console.log(output.upper('aziz'));
// console.log(output.lower('ABID'));
// console.log(output.lengt('hadi'))


/*___________________________ Question no 42 ________________________
Create a function arrayHandler(arr) that returns an object with three methods:

first() → returns the first element

last() → returns the last element

size() → returns the number of elements

Required Output:

const output = arrayHandler([10, 20, 30, 40]);
console.log(output.first()); // 10
console.log(output.last());  // 40
console.log(output.size());  // 4

_____________________ Answer ________________________________________ */
// const arrayHandler = () =>{ obj = {}; 
// obj.first = (arr) => {return arr.at(0);
// };
// obj.last = (arr) => { return arr.at(arr.length-1);

// }
// obj.number = (arr) =>{return arr.length;}

// return obj;
// }

// let Answer = arrayHandler();
// let arr = ['apple','mango','juice'];
// console.log(Answer.first(arr));
// console.log(Answer.last(arr));
// console.log(Answer.number(arr));

/*___________________________ Question no 43________________________
Create a function mathOperations(x, y) that returns an object with three methods:

sum() → returns x + y

product() → returns x * y

difference() → returns x - y

Required Output:

const output = mathOperations(7, 3);
console.log(output.sum());       // 10
console.log(output.product());   // 21
console.log(output.difference()); // 4
_____________________ Answer ________________________________________ */




/*___________________________ Question no 44 ________________________

Create a function counter(start) that returns an object with methods:

next() → increases by 1 and returns new value

prev() → decreases by 1 and returns new value

current() → returns current value without change

Required Output:

const output = counter(10);
console.log(output.next());    // 11
console.log(output.prev());    // 10
console.log(output.current()); // 10
_____________________ Answer ________________________________________ */




/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */





/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */





/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */


/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */


/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */



/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */



/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */



/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */



/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */





/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */




/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */




/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */





/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */





/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */


/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */


/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */



/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */



/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */



/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */



/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */





/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */




/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */




/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */





/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */





/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */
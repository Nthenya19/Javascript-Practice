// var name = window.prompt("Enter Your Name: ");
// alert("Your name is " + name);

// var header = document.getElementById("myHeader");
// header.style= "color:blue; background-color:red; "
// document.write(header.getAttribute("giraffe"));
// header.innerHTML = "Elephant Academy";


//Arrays//


// var luckyNumbers = [4, 8, 15, 16, "Twenty", false];

// luckyNumbers[0] = 90;
// document.write(luckyNumbers[0] + "<br>");
// document.write(luckyNumbers[1] + "<br>");
// document.write(luckyNumbers.length);

// var numberGrid = [[1, 2] [3, 4]];
// numberGrid[0][1] = 90;
// document.write(numberGrid[0][0] + "<br>");
// document.write(numberGrid[0][1] + "<br>");

// var friends = new Array();
// friends.push("Faith");
// friends.push("Rossy");
// friends.push("Njeri");
// friends.push("Abdul");


// document.write(friends + "<br>");
// document.write(friends.sort());

//OBJECTS//

//  var student = {
//    name: "Jeff",
//    major: "Biosystems",
//    age: 23,
//    gpa: 3.5,
//  }

// student.name = "Faith"
// document.write(student.name);

//Functions//

// var sum = addNumbers (4, 65);
// document.write(sum);

// function addNumbers(num1, num2) {
//   return num1+num2;
// }

// function handleClick(element){
//   alert("Clicked" + element.id);
  
// }

// var header = document.getElementById("myHeader");

// header.addEventListener("click", function(){
//   alert("You clicked " + header.id)
// }
// // );
//  var isStudent = false;
//  var isSmart = false;

//  if (isStudent && isSmart){
//    document.write("You are a student");
//  } else if (isStudent && !isSmart){
//    document.write("You are not a smart stuent");
//  } else {
//    document.write("You are not a student and not smart");
//  }
//  document.write("<br>");

 //SWITCH STATEMENT//

//  var myGrade = "A";
//  switch(myGrade) {
//    case "A":
//         document.write("You pass");
//         break;
//    case "F":
//         document.write ("you fail");
//         break;
//    default:
//         document.write("Invalid Grade");     
//  }

// var index = 6;
// while(index <= 5) {
//   document.write(index);
//   index++;

// }

// do{
//   document.write(index);
//   index++;

// } while (index<= 5);

// for (var i = 0; i< 5; i++) {
//   document.write(i);
// }

// var luckyNums = [4, 8, 34, 22, 43];

// luckyNums.forEach(function(luckyNum){
//   document.write(luckyNum + "<br>");
// }
// );

// var x = y+9;

// try {
//   var x  = y + 9;
// } catch(err) {
//   document.write(err)
// } finally{
//   //this code always get executed
// }

// class Book {
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//   }

//   readBook (){
//     document.write("Reading" + this.title + "By" this.author)
//   }
// }

// var book1 = new Book ("It Ends With Us", "Colleen Hoover");

// document.write (book1.title + "<br>");

// book1.readBook();

// class Book {
//   constructor (title, author) {
//     this.title = title;
//     this.author;
  
//   }get title () {
//     document.write ("<p>getting </p>");
//     return this._tittle;
//   }

//   set title (title) {
//     document.write ("<p>setting </p>");
//     this._tittle = title;

//   }

//   readBook(){
//     document.write("Reading " + this.title + "by " + this.author);
//   }
// }

// var book1 = new Book ("Verity ", "CoHo");


// document.write(book1.title+ "<br>");
// book1.readBook();


//INHERITANCE

class Chef {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  makeChicken () {
    document.write ("This chef makes Chicken <br>");
  }
  makeSalad () {
    document.write ("This Chef makes Salad <br>");
  }
  makeSpecialDish (){
    document.write ("This Chef Makes Special DIsh <br>");
  }
}

class italianChef extends Chef {
  constructor (name, age, countryOfOrigin) {
    super (name, age);
    this.countryOfOrigin = countryOfOrigin;
  }

  makePasta () {
    document.write ("This Chef Makes Pasta <br>");
  }

  //overidden//

  makeSpecialDish() {
    document.write ("This Chef makes Chicken PArm <br>");
  }
}

var myChef = new Chef ("James Gordon", 50);
myChef.makeChicken();

var myItalianChef = new italianChef ("Massimo Bottura", 66, "Italy");
myItalianChef.makeSpecialDish;
document.write(myItalianChef.age);

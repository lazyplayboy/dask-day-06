// create a movie class
 
class Movie {
    constructor(title= '', studio = '', rating = 'PG') {
       this.title = title;
       this.studio = studio;
       this.rating = rating;
    }
 
    getPG(movies = [], rating = '') {
       return movies.filter((m) => m.rating === rating);
    }
}
 
// solution for d
const casionRoyaleMovie = new Movie('Casino Royale', 'Eon Productions', 'PG13');
const leo = new Movie('Leo', 'LCU', 'PG');
const vikram = new Movie('Vikram', 'Vijay', 'PG');
const avatar = new Movie('Avatar: The water way', 'EROS', 'PG13');
const avengers = new Movie('The avengers: End Game', 'LCU', 'PG');
 
const moviesArray = [casionRoyaleMovie, leo, vikram, avatar, avengers];
 
console.log(casionRoyaleMovie.getPG(moviesArray, 'R'));
console.log(casionRoyaleMovie.getPG(moviesArray, 'PG'));
 
// create a circle class

class  Circle{
   constructor(radius=1.0, color="red"){
      this.radius = radius;
      this.color = color;
}
   getRadius = function () {
      return this.radius;
   }
   setRadius = function (radius) {
      this.radius = radius;
   }
   getColor = function () {
      return this.color;
   }
   setColor = function (color) {
      this.color = color;
   }
   toString = function () {
      return "Radius: " + this.radius + " Color: " + this.color;
   }
   getArea = function () {
      return (2 * (Math.PI) * this.radius);
   }
   getCircumference = function () {
      return (2 * this.radius);
   }
}
var c1 = new Circle();
console.log(c1.toString());
var c2 = new Circle(3.5);
console.log(c2.toString());
var c3 = new Circle(2.2, 'Yellow');
console.log("getRadius: " + c3.getRadius());
c3.setRadius(3.3);
console.log("Radius value after setRadius: " + c3.getRadius());
console.log("getColor: " + c3.getColor());
c3.setColor("Blue");
console.log("Color Value after setColor: " + c3.getColor());
console.log(c3.toString());
console.log("Area: " + c3.getArea());
console.log("Circumference: " + c3.getCircumference());

//create a "person" class

class person{
   constructor(name,id){
            this.name = name;
            this.id= id;

   }
   details(){
      console.log(this.name+" " , this.id =" ")
   }
}
var x = new person;
x.details();

// create a class to calculate the uber price.

class fareClac {
   constructor(baseFare, waitingFare, bookingCost) {
     this.baseFare = baseFare;
     this.waitingFare = waitingFare;
     this.bookingCost = bookingCost;
   }
   totalFare(km, waitHrs) {
     let cost = (this.baseFare * km) + (this.waitingFare * waitHrs) + this.bookingCost;
     console.log(`The Cost of your Fare is ${cost}`);
   }
 }
 
 let ola = new fareClac(10, 12, 7);
 let uber =new fareClac(11, 5, 10)
 
 ola.totalFare(17, 1)
 uber.totalFare(17, 1)

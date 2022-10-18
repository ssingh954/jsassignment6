//Q1. Perform the following operations to provide the implementation for a
//Rectangle class. The operations are:

class Rectangle {
  constructor(length, width) {
  this.length = length;
  this.width = width;
  }

  // method
  get area() {
    return this.length * this.width;
  }

}

let obj= new Rectangle(7,2);
console.log('Area of Rectangle: '+obj.area);

  
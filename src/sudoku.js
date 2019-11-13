// export function Triangle (side1, side2, side3) {
//   this.side1 = side1;
//   this.side2 = side2;
//   this.side3 = side3;
// }
// Triangle.prototype.checkType = function() {
//   if ((this.side1 <= 0) || (this.side2 <= 0) || (this.side3 <= 0)) {
//     return "please enter a number greater than 0"
//   } else if ((isNaN(this.side1)) || (isNaN(this.side2)) || (isNaN(this.side3))) {
//     return "please enter a real number";
//   } else if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
//     return "not a triangle";
//   } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
//     return "scalene triangle";
//   } else if ((this.side1 === this.side2) && ((this.side1 === this.side3)) && ((this.side2 === this.side3))) {
//     return "equalateral triangle";
//   } else if ((this.side1 === this.side2) || ((this.side1 === this.side3)) || ((this.side2 === this.side3))) {
//     return "isosceles triangle";
//   }
// };

var row1 = [$("inputr1c1").val(), $("inputr1c2").val(), $("inputr1c3").val()]


export function Rows (row1, row2, row3) {
  this.row1 = row1;
  this.row2 = row2;
  this.row3 = row3;
}

Rows.prototype.checkLegal = function() {
  const correctValues = "1,2,3";
  for (i = 1; i <= 9; i++) {
    ((this.rowi).sort().toString()) === (correctValues)
  } return
  var userArray = [];

}
Rows.prototype.checkLegal = function() {
  const correctValues = "1,2,3";
  if (((this.row1).sort().toString()) === correctValues) && ((this.row2).sort().toString()) === correctValues)

}



const correctValues = "1,2,3";
var userArray = [2,3,1];

if ((userArray.sort().toString()) === (correctValues)){
  console.log("true");
} else {
  console.log("false");
  alert("we shouldnt see this")
}

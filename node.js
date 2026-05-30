// Q1
alert("Taha Adnan");
// Q2
let name=prompt("Enter your name")
alert("Welcome " + name); 
// Q3
let age=16
alert(age);
// Q4
let number=5;
if(number>=0){
    alert("The number is positive");
}
else{
    alert("The number is negative");
}
// Q5
let marks=prompt("Enter your marks")
if(marks>=50){
    alert("You have passed");
}
else{
    alert("You have failed");
}
// Q6
let array=["apple","banana","mango","orange","grapes"];
alert(array[0]);
// Q7
let arry= ["red","green","blue"];
arry.push("yellow");
// Q8
let arr= ["HTML","CSS","JS"];
arr.pop();
// Q9
let name=["Ali","Ahmed","Sara","Ayesha"];
console.log(name.length);
Q10
for (let i = 1; i <= 10; i++) {
    document.write(i+"<br>");
}
// Q11
for (let i = 10; i >= 1; i--) {
    document.write(i+"<br>");
}
// Q12
let fruits=["apple","banana","mango",];
for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i]+"<br>");
}
// Q13
for (let i = 1; i <= 20; i++) {
    if(i%2===0){
        document.write(i+"<br>");
    }
}
// Q14
for (let i = 1; i <= 15; i++) {
    if(i%2===1){
        document.write(i+"<br>");
    }
}
// Q20
let shoppingCart=["Milk","Bread","Eggs"];
let item=prompt("Enter an item to add to the shopping cart");
shoppingCart.push(item);
shoppingCart.pop();
console.log(shoppingCart);
"use strict";
// console.log("ALLAH");
//  ("Assignment Node.3" (15/08/2023));
// //1---Create a function that takes an Array, an index and a value as Parameters. Inside the function,use the splice method to insert the value at the specified index in the Array. Return the modified Array.
// var arr:number[]=[3,4,5,6,7,8.9];
// function asd(arr:number[]){
// console.log(arr);
// var a=arr[2];
// console.log(a);
// console.log(arr[4]);
// var c=arr.splice(1,2,90);
// console.log(arr);
// }
// asd(arr);
// //2---implement a simple shoping cart program using an array. Create function to add items, remove items and update quantities using the splice methods. Print the cart's contents after each operation.
// var shopinngCart:string[]=["shirt","tie","shoes","belt","pant"];
// console.log(shopinngCart);
// shopinngCart.splice(1,2,"pen");
// console.log(shopinngCart);
// //3--- Write a program that use a while loop to printa the first 25 integers.
// var i=0
// while (i<=25){
// console.log(+i);
//     i++
// }
// //4---Write a programthat use a while  loop to prit the first 10 even  numbers.
// var e=1;
// while (e<=20){
//     var even=++e;
//     console.log(even);
//     e++;
// }
// //5---Create a function that takes positive integers and parameters and use a while loop to calculate and return the factorial of that number
var t = prompt("enter any number");
var d = [];
console.log(d);
var i = t;
for (i = 0; i <= t; i++) {
    var m = t % +i;
    if (m == 0) {
        //console.log(i);
        d.push(i);
    }
    //console.log(d);
}
console.log("factors of " + t + "=" + "{" + d + "}");
// 
// 
// //console.log(t);
// //6---Write a program that having an array of numbers if  the number is negative it should remove the negative number from array.
// // var arr: number[] = [1, -2, 3, -4, 5, -6, 7, 8];
// //   const neg: number[] = [];
// //   const pos: number[] = [];
// //   for (var i = 0; i < arr.length; i++) {
// //     if (arr[i] < 0) {
// //       neg.push(arr[i]);
// //     }
// //     else pos.push(arr[i])
// //  }
// // console.log(neg);
// // console.log(pos);
// //7---Create a function that takes an array of number as paramerers. use a while loop to calcilate and return  the sum of all the numbers of that Array.
// // var arr: number[] = [3, 9, 2, 6, 4, 9, 5];
// // var sum=0;
// //   for (let i = 0; i < arr.length; i++) {
// //     sum += arr[i];
// //   }
// //   console.log(sum);
// //8---Implement a program that takes a list of temperature in selcius as an input from that user . convert each temperature to fahrenheit using the formula F=(C*9/5)+32  and store the converted tempmeratur in an Array. use the while loop for conversion of each tempreature.
// // var celTem: number[] = [13, 29, 32, 46, 54,];
// // var forTem:number[]=[];
// //   for (let i = 0; i < celTem.length; i++) {
// //      var f:number=(celTem[i]*9/5)+32;
// //      forTem.push(f);
// //   }
// //   console.log(forTem);
// // var arr3:number[]=[2,-3,4,-5,6];
// // var neg1:number[]=[];
// // var pos1:number[]=[];
// // for(let i=0; i<arr3.length; i++){
// //     if (arr3[i]<0){
// //     neg1.push(arr3[i]);
// //     }
// //     else pos1.push(arr3[i])
// // }
// // console.log(neg1);
// // console.log(pos1);
// //------------------biggest number
// // var arr4:number[]=[2,5,3,99];
// // var big=arr4[0];
// // for (let i=1; i<arr4.length; i++){
// //     if ( arr4[i]>big){
// //       big=arr4[i];
// //       console.log(big);
// //         }
// // }

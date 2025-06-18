// javascript have two way to declare a array 
// 1st-way 
const myarray = [10,20,30,40,50,60] ;
console.log(myarray); // array is index based and its strating for the 0 
console.log("the element in oth index is "+myarray[0]);

// 2nd way 
const myArray2 = new Array("sayon","varija","shweta","mithun","puja");
let myArray3 = new Array("payel","musu");
console.log(myArray2);
for (let index = 0; index < myArray2.length; index++) {
    console.log(index +" -->"+myArray2[index]);
}

// Array methods 
console.log(myArray2.at(1));
let string  = myArray2.join('..');
console.log(string);
console.log(myArray2.join('|'));

myArray2.unshift("bhaskar");
console.log(myArray2);
console.log(myArray2.pop());
console.log("------------------");
console.log(myArray2);
console.log(myArray2.shift())
console.log(myArray2)




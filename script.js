/*part 1 Assignment*/

const  num1= Number(document.getElementById("num1"));
const  num2= Number(document.getElementById("num2"));
const  sign= document.getElementById("num2");
const  numresult= document.getElementById("result");
const  numtype= document.getElementById("typeofnum");
const  button= document.getElementById("btn");



/*activate button*/
button.onclick= function(){
   const num1 = Number(document.getElementById("num1").value);
   const num2 = Number(document.getElementById("num2").value); 
   const sign = document.getElementById("sign").value.trim(); 

   let result;

    if (sign == "+"){
        result = num1+num2;
        numresult.textContent= `The sum is ${result}`;
    }
    else if (sign =="-"){
        result = num1 - num2;
        numresult.textContent= `The diference is ${result}`;
    }
     else if (sign == "*"){
      
        result = num1 * num2;
        numresult.textContent= `The Product is ${result}`;
     }

     else if (sign == "/" && num2!=0){
        result = num1 / num2;
        result = Math.floor(result);
         numresult.textContent= `The division is ${result}`;
     }
    
     else {
        numresult.textContent = "You have to enter a  Value";
     }

  

};


/* ***********************************************************************/
/*Part 2: JavaScript Functions — The Heart of Reusability*/

/*function for calculating total*/
function AddNum(a,b){
   total = a +b;
   return total;
};

console.log(AddNum(6,8));
/*function for formatting character by changing from lowercase to uppercase*/
const charformat = function(name){
   return name.toUpperCase();
};
console.log(charformat("jebilla"));

/* *****************************************************************************/

/*Part 3: JavaScript Loops — Embrace the Power of Repetition!*/

/* use the for loop to display numbers from 1-20 */

for (let i=1; i<=20; i++){
   console.log(`Count ${i}`);
};

/* using the while loop for numbers*/

let x = 5;
while (x <= 20) {
  console.log(`Number: ${x}`);
  x++; // Increment num to avoid infinite loop
};


/* using the do .. while loop */

let p = 20;

do{
   console.log(`I am ${p} years old`);
   p++;

} while(p<=50);


/* ***************************************************************************************************/

/*Part 4: Mastering the DOM with JavaScript*/
const heading = document.getElementById("header");

const colorbtn= document.getElementById("btn2");

const container = document.getElementById("container");

colorbtn.addEventListener("click", () => {
   container.style.background = "blue";
   container.style.color = "white";
   heading.style.color = "white";

   
});
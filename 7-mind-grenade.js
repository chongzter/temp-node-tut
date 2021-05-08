// when you import module, you actually invoke the function addValues without calling
const num1 = 5;
const num2 = 10;

function addValues() {
    console.log(`the sum is : ${num1 + num2} `);
}

addValues(num1, num2);
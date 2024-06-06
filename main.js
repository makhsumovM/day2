//task1
/*let longestTime =function(h,m,s){
    let hour = h*3600;
    let minut = m*60;
    if (hour>minut&&hour>s){
        return h;
    }
    else if (minut>hour&&minut>s){
        return m;
    }
    return s;
}
console.log(longestTime(1, 59, 3598));
console.log(longestTime(2, 300, 15000));
console.log(longestTime(15, 955, 59400));
*/

//task2
/*let same = function(a){
    n1 = Math.floor(a/100);
    n2 = Math.floor(a/10)%10;
    n3 = a%10;
    return n1 ==n2 || n2==n3 ||n1== n3? true : false  
}
console.log(same(212));
console.log(same(897));
console.log(same(811));*/


//task3

/*let largestSwap = function(a){
    let swap = a%10*10 + Math.floor(a/10);
    return a>swap? true:false;
}
console.log(largestSwap(14));
console.log(largestSwap(53));*/

//task4

/*let addUp = function(num) {
    let sum = 0; 
    for(let i = 1; i <= num; i++) {
        sum += i; 
    }
    return sum; 
}

console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));*/


//task 5
/*let different = function(a,b,c){
    if(a==b && b!=c){
        return 3;
    }
    else if (a==c && c!=b){
        return 2;
    }
    else {
        return 1;
    }
}
console.log(different(5,5,10));
console.log(different(897,1,1));
console.log(different(811,100,811));*/

//task 8
/*
let maxNum =function(N){
    let rakami_kalon = 0;
    for(let i =N; i>0; Math.floor(i=i/10)){
        let rakami_Oxironi_N = i%10;
        if(rakami_Oxironi_N>rakami_kalon){
            rakami_kalon = rakami_Oxironi_N;
        }

    }
    return Math.floor(rakami_kalon);
}
console.log(maxNum(7132));
console.log(maxNum(897));
console.log(maxNum(811));
*/



//taks 9
/*
let isSymmetrical = function(N){
    let first_N;
    for(let i = N; i > 0; i = Math.floor(i / 10)) {
        first_N = i % 10;
    }
     return first_N == N%10;

    
}

console.log(isSymmetrical(7227)); 
console.log(isSymmetrical(9939)); 
console.log(isSymmetrical(4444444444)); */

//task 10
/*let addDigits = function(N) {
    let rakamho ;
    for (let i = N; i > 0; i = Math.floor(i / 10)) {
        let rakam = i % 10;
        rakamho = rakam ;
        console.log(rakamho)
    }
    
}

console.log(addDigits(7898)); // Выведет "7898"*/


//task 11

/*let isPrime = function (num){
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(2)); 
console.log(isPrime(6));*/

//task13
/*
let sumOfDigit = function(num){
    let sum=0;
    for(let i = 1; i<=num; i++){
        sum = sum+i;
    }
    return sum;
}
console.log(sumOfDigit(5));
console.log(sumOfDigit(12))*/

//task12
/*
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); 
console.log(factorial(4));*/
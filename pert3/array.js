// ARRAY 
// var numbers= [10,5,12,7,15];
// console.log(numbers[0]);
//var murid= [[1, "vincent",]]
// for (var i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }
// menentukan total semua value dalam array 
// var total = 0;
// for ( var i=0; i < numbers.length; i++){
//     total +=numbers[i]
// }
// console.log(total)

// tentukan nilai dalam sebuah array, yang lebih besar 10 
// var tempArray = [];
// for (var i = 0; i < numbers.length; i++){
//     if (numbers[i] > 10){
//         tempArray.push(numbers[i])
//     }
// }
// console.log(tempArray)

// function
// function hello() {
//     console.log("Hello")
// }
// hello("admin") 

/**
 * STUDY CASE FUNCTION
 * Tentukan faktor-faktor dari sebuah angka.
 * 
 * contoh :
 * function factor(n){
 * // code here
 * }
 * 
 * result:
 * factor(10)
 * // 1 2 5 10
 */

// function factor(n){
//     for (i= 1; i <= n; i++){
//         if (n % i === 0){
//         console.log(i)
//         }
//     }
// }
// factor(10)

/**
 * STUDY CASE 2 
 * 
 * Buat sebuah function untuk cek apakah sebuah bilangan prima atau tidak
 * 
 * Task:
 * - function chechFaktor(n) untuk menentukan jumlah faktornya
 * - function checkPrima(n) untuk cek bilangan prima atau tidak(main)
 */

// function checkFactor(n){
//     let countFactor = 0;
//     for(var i = 1; i<n; i++){
//         if(n % i === 0){
//             countFactor++;
//         }
//     }
//     return countFactor;
// }
// //
// function checkPrima(n){
//     let jumlahFaktor = checkFactor(n);
//     if(jumlahFaktor === 2){}
// }
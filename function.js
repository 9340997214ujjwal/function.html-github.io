var num = parseInt(prompt("Enter your number"))
function ManiputlateArray(x,callback1,callback2){
    var mul = callback1(x);
    var add = callback2(x);
    return [mul , add] ;
}
function mulBy4(n){
    return n * 4;
}
function add9(n){
    return n + 9;
}
var func = ManiputlateArray(num,mulBy4,add9);
console.log('The mul & add are ',func);
document.write('The mul & add are ', func);
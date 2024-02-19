var input = 145;
var temp=input
var fact = 1;
var num = 0;
var sum = 0
while (input > 0) {
    num = input % 10;

    for (var i = 1; i <= num; i++) {
        fact = fact * i;

    }
    sum = fact + sum;
    if (i > num) { fact = 1 }
    input = parseInt(input / 10);
}
if(sum==temp){
    console.log(`${temp} is Peterson Number `)
}else{
    console.log(`${temp} is not Peterson Number `)
}
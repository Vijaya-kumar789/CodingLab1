var input = 121;
var temp = input;
var sum = 0;
var num=0;
while (input > 0) {
    num=input%10;
    input=parseInt(input/10);
    sum=(sum*10)+num;
    }
if(sum===temp){
    console.log("This is Palindrome Number")
}
else{
    console.log("This is not Palindrome Number")
}
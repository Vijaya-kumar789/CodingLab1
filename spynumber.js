var input=135;
var temp=input;
var sum=0;
var mul=1;
var num=0;
while(input>0){
   num=input%10;
    input=parseInt(input/10);
    sum=sum+num
    mul=(mul*num);
}
if(sum==mul){
    console.log("This is Spy Number");
}
else{
    console.log(" This is Not a spy Number")
}

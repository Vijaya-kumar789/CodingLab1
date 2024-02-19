let input=153;
let num=0
let temp=input;
let sum=0;
while(input>0){
    num=input%10;
    input=parseInt(input/10);
    sum=sum+(num**3)

}
if(temp==sum){
    console.log("Amstrong Number");
}
else{
    console.log("Not an Amstrong Number")
}

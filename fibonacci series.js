var a=0;
var b=1;

for (var i=0;i<8;i++){
    console.log(a);
    var c=a+b;
    a=b;
    b=c;
}
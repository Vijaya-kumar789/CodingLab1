var input = 5;
var sq = (input * input);
var num = 0;
var sq1 = 0;
while (input > 0) {
    num = input % 10;
    sq1 = sq % 10;
    if (num !== sq1) {
        console.log("This is not Automorphic Number");
        break
    }
    input = parseInt(input / 10);
    sq = parseInt(sq / 10);
}
if (num == sq1) {
    console.log("This is Automorphic Number");
}

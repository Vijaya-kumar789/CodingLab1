var input = 7;

var count = 0;

for (var i = 0; i <= input; i++) {
    if (input % i == 0) {
        count = count + 1;
    }
}
if (count == 2) {
    console.log("Prime number");
}
else {
    console.log("Composite number")
}

// Change the values and operators below to test your algorithm meets all conditions
/*
var x = 50;
var expression1 = (x < 25); //false
var expression2 = (x > 50); //false

function classTest() {
    var result;
    if (expression1 == true && expression2 == true){
        result = 'True ✅ True ✅'
    } else if (expression1 == true && expression2 ==false) {
        result = 'True ✅ False ❌'
    } else if (expression1 == false && expression2 == true) {
        result = 'False ❌ True ✅'
    } else if (expression1 == false && expression2 == false) {
        result = 'False ❌ False ❌'
    }
    return result
}

console.log(classTest());
*/

var x = 50
var expression1 = x < 25 //false
var expression2 = x > 50 //false

switch (true) {
    case expression1 == true && expression2 == true: //false
        console.log('True ✅ True ✅');
        break;
    case expression1 == true && expression2 != true: //false
        console.log('True ✅ False ❌');
        break;
    case expression1 != true && expression2 == true: //false
        console.log('False ❌ True ✅');
        break;
    case expression1 != true && expression2 != true: //true
        console.log('False ❌ False ❌');
}

var input = { 'array': [] };

input.getInput = function () {
    return this.array.join("");
}

var output = {};
output.text = document.getElementById("output");

var clickNum = function (event) {
    var str = event.target.innerHTML;
    switch (str) {
        case 'AC':
            input.array.pop();
            break;
        case '+':
            input.array.push(' ' + str + ' ');
            break;
        case '-':
            input.array.push(' ' + str + ' ');
            break;
        case '×':
            input.array.push(' ' + str + ' ');
            break;
        case '÷':
            input.array.push(' ' + str + ' ');
            break;
        default:
            input.array.push(str);
    }
    if (input.array.length === 0) {
        output.text.innerHTML = "0";
    } else {
        output.text.innerHTML = input.getInput();
    }
}

var showResult = function (event) {
    console.log("clickOther");
    console.log(event.target.innerHTML);
}
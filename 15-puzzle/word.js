var word1 = document.getElementById("word1");
var word2 = document.getElementById("word2");
var check = document.getElementById('check');

var random_words = 'APPLE,LINUX,AUDLT,BEGIN,BRAIN,BUILD,CHAIR,CREAM,HELLO,LOVER'
var R_words = random_words.split(',');

var game = {};
game.choice = function () {
    var idx = Math.floor(Math.random() * R_words.length);
    return R_words[idx];
}

var answer = game.choice();
word1.innerHTML = answer;

game.word = answer.split('');
game.btnOb = [];

game.updateDisplay = function () {
    if (answer === game.word.join('')) {
        check.innerHTML = '일치합니다';
    } else {
        check.innerHTML = '일치하지 않습니다';
    }
}

for (var i = 0; i < answer.length; i++) {
    var btn = document.createElement('button');
    btn.innerHTML = answer[i];
    word2.appendChild(btn);
    game.btnOb.push(btn);
}

game.copyBtnText = function () {
    for (var i = 0; i < this.word.length; i++) {
        this.btnOb[i].innerHTML = this.word[i];
    }
}

var turnover = function () {
    var temp = [];
    while (game.word.length != 0) {
        var s = game.word.pop();
        temp.push(s);
    }
    game.word = temp;
    game.copyBtnText();
    game.updateDisplay();
};

var rshift = function () {
    var s = game.word.pop();
    game.word.unshift(s);
    game.copyBtnText();
    game.updateDisplay();
};

var lshift = function () {
    var l = game.word.shift();
    game.word.push(l);
    game.copyBtnText();
    game.updateDisplay();
};

// shuffle 기능

var toggle = Math.floor(Math.random() * 2) === 0;

if (toggle) {
    turnover();
}

var n = Math.floor(Math.random() * answer.length);

for (var i = 0; i < n; i++) {
    rshift();
}
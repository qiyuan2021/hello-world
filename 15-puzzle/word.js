// HTML Element
const word1 = document.getElementById("word1"); //answer
const word2 = document.getElementById("word2"); //buttons
const check = document.getElementById('check'); //word1 === word2
const progress = document.getElementById('progress'); // progress check

//game object 
const game = {
    'btnOb': [],
    'maxPlay': 3,
    'current': 0
};

const random_words = 'APPLE,LINUX,AUDLT,BEGIN,BRAIN,BUILD,CHAIR,CREAM,HELLO,LOVER'
game.R_words = random_words.split(',');

//choose 1 word from R_words
game.choose = function () {
    const idx = Math.floor(Math.random() * this.R_words.length);
    this.answer = this.R_words[idx];
    this.letters = this.answer.split('');
    word1.innerHTML = this.answer;
};

game.addButtons = function () {
    for (let i = 0; i < this.letters.length; i++) {
        const btn = document.createElement('button');
        btn.innerHTML = this.letters[i];
        word2.appendChild(btn);
        this.btnOb.push(btn);
    }
};

game.removeButtons = function () {
    for (let i = 0; i < this.btnOb.length; i++) {
        word2.removeChild(this.btnOb[i]);
    }
    this.btnOb = [];
};

game.completed = function () {
    return this.answer === this.letters.join('');
}
game.updateDisplay = function () {
    if (this.completed()) {
        check.innerHTML = '일치합니다';
    } else {
        check.innerHTML = '일치하지 않습니다';
    }
};

game.init = function () {
    this.choose();
    this.addButtons();
    this.updateDisplay();
};
game.init();

game.copyBtnText = function () {
    for (let i = 0; i < this.letters.length; i++) {
        this.btnOb[i].innerHTML = this.letters[i];
    }
}

game.turnover = function () {
    const temp = [];
    //copy and turnover
    while (game.letters.length != 0) {
        const s = game.letters.pop();
        temp.push(s);
    }
    game.letters = temp;
    game.copyBtnText();
    game.updateDisplay();
}

game.rshift = function () {
    const s = game.letters.pop();
    game.letters.unshift(s);
    game.copyBtnText();
    game.updateDisplay();
};

game.lshift = function () {
    const l = game.letters.shift();
    game.letters.push(l);
    game.copyBtnText();
    game.updateDisplay();
};

game.progress = function () {
    if (game.completed()) {
        game.current++;
        game.removeButtons();
        game.init();
        game.shuffle();
        let str = "";
        for (let i = 0; i < game.current; i++) {
            str += "O";
        }
        progress.innerHTML = str;
    }
    if (game.current == game.maxPlay) {
        alert("Good! Thank you for playing");
    }
};

// event handler for 뒤집기 버튼
const turnover = function () {
    game.turnover();
    game.progress();
};

// event handler for 왼쪽으로 밀기 버튼
const rshift = function () {
    game.rshift();
    game.progress();
};

// event handler for 오른 쪽으로 밀기 버튼
const lshift = function () {
    game.lshift();
    game.progress();
};

// 랜덤 배치 기능
game.shuffle = function () {
    const toggle = Math.floor(Math.random() * 2) === 0;
    if (toggle) {
        game.turnover();
    }

    const n = Math.floor(Math.random() * (game.answer.length - 1));
    for (let i = 0; i < n; i++) {
        game.rshift();
    }
};
game.shuffle();
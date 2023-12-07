const BtnGerar = document.querySelector("#BtnGerar");
const Pre = document.querySelector(".pre");
const Post = document.querySelector(".post");

const passwordhere = document.querySelector("#passwordhere")

BtnGerar.addEventListener("click", () => {
    Pre.style.display = 'none';
    Post.style.display = 'flex';
    passwordhere.innerHTML = generatePassword();
});

const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
    const symbols = "(){}[]=<>/,.!@#$%&*+-";
    return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = () => {
    let password = '';
    const passwordLength = 10;
    const generators = [getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol];

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * generators.length);
        const randomValue = generators[randomIndex]();
        password += randomValue;
    }

    return password;
};

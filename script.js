
function findNumber() {
    let secretNumber = Math.floor(Math.random() * 100) + 1;;
    let lives = 10;

    function tryFindNumber() {
        if (lives == 0) {
            let comfirmGameOver = confirm("Попытки закончились, хотите сыграть еще?");

            if (comfirmGameOver == true) {
                lives = 10;
                tryFindNumber();

            } else {
                return;
            }
        }

        let findedNumber = prompt("Введите число:" + secretNumber)

        if (findedNumber === null) {
            alert("Игра окончена");

            return;
        }

        findedNumber = Number(findedNumber);

        if (findedNumber > secretNumber) {
            lives--;

            alert("Загаданное число меньше, осталось попыток " + lives);
            tryFindNumber();

        } else if (findedNumber < secretNumber) {
            lives--;

            alert("Заганное число больше, осталось попыток: " + lives);
            tryFindNumber();

        } else if (isNaN(findedNumber)) {

            alert("Введи число!");
            tryFindNumber();

        } else if (secretNumber == findedNumber) {

            let comfirmGameOver = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");

            if (comfirmGameOver == true) {
                lives = 10;
                findNumber();

            } else {
                return;
            }
        }
    }

    tryFindNumber();
}

findNumber();
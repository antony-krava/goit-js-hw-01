let input;
let total = 0;

do {
    input = prompt('Введите число');

    if (input === null) {
        alert(`Общая сумма чисел равна ${total}`);
        break;
    }

    input = Number(input);

    const notANan = Number.isNaN(input);

    if (notANan) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }

    total += input;

} while (true);
let credits = 23580;
const pricePerDroid = 3000;

let numberDroid = prompt('Какое количество дроидов Вы хотите купить?');
numberDroid = Number(numberDroid);
let totalPrice;

numberDroid <= 0 ? console.log('Отменено пользователем!') : totalPrice = numberDroid * pricePerDroid;

if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!')
} else if (totalPrice <= credits) {
    credits -= totalPrice;
    console.log(`Вы купили ${numberDroid} дроидов, на счету осталось ${credits} кредитов.`)
}
  
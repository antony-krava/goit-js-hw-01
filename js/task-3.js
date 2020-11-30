const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('Введите пароль');

if (message === null) {
    message = 'Отменено пользователем!';
    alert(message);
} else if (message === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
    alert(message);
} else if (message !== ADMIN_PASSWORD) {
    message = 'Доступ запрещен, неверный пароль!';
    alert(message);
}
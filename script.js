if ("Notification" in window) {
    // Запрашиваем разрешение на отправку уведомлений
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            // Если пользователь разрешил, показываем уведомление
            showNotification();
        } else {
            console.log("Уведомления отключены пользователем.");
        }
    });
} else {
    console.log("Уведомления не поддерживаются вашим браузером.");
}

// Функция для показа уведомления
function showNotification() {
    const options = {
        body: "Добро пожаловать на наш сайт!",
        icon: "https://example.com/icon.png" // Иконка для уведомления
    };

    // Показываем уведомление
    const notification = new Notification("Приветствие", options);

    // Можно добавить обработчик клика по уведомлению
    notification.onclick = function() {
        window.focus(); // Вернуть пользователя на вкладку
    };
}
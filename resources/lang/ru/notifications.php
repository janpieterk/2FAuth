<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Notifications Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines are used during authentication for various
    | messages that we need to display to the user. You are free to modify
    | these language lines according to your application's requirements.
    |
    */

    'hello' => 'Привет',
    'hello_user' => 'Привет, :username,',
    'regards' => 'С наилучшими пожеланиями',
    'test_email_settings' => [
        'subject' => 'Тестовое письмо 2FAuth',
        'reason' => 'Вы получили это письмо, потому что вы запросили тестовое письмо, чтобы проверить настройки электронной почты вашего экземпляра 2FAuth.',
        'success' => 'Хорошие новости! Всё работает! :-)'
    ],
    'new_device' => [
        'subject' => 'Connection to 2FAuth from a new device',
        'resume' => 'Новое устройство только что подключилось к вашей учетной записи 2FAuth.',
        'connection_details' => 'Информация об этом подключении',
        'recommandations' => 'Если это вы, то вы можете проигнорировать это уведомление. Если вы подозреваете, что какое-либо подозрительное действие с вашей учётной записью, измените ваш пароль.'
    ],
    'failed_login' => [
        'subject' => 'Не удалось войти в 2FAuth',
        'resume' => 'Произошла неудачная попытка входа в вашу учётную запись 2FAuth.',
        'connection_details' => 'Подробности об этой попытке подключения',
        'recommandations' => 'Если это были вы, можете проигнорировать это предупреждение. Если дальнейшие попытки не удались, свяжитесь с администратором 2FAuth для проверки настроек безопасности и принятия мер против этого атакующего.'
    ],
];
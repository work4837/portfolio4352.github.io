<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'test-wp' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'root' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', '' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ToPVgOrfj0?;.QFeYa`h2u^)TIzdwlPCe=F%sRz72Khu-d=Ytzk9rP|Zw,4Hzx}.' );
define( 'SECURE_AUTH_KEY',  '`?o.&@m9K!)ifQycdV9Qz|)5+zY8[*:_ery-+?G803w~2h8xja+k;[b{l=( V16b' );
define( 'LOGGED_IN_KEY',    'fI<} QanTszk,S;:4y;_s!}l|dU=3r/Dz_]xh$_GSn>k]tfG)F}+%+Z#6YYAj-qa' );
define( 'NONCE_KEY',        '2MO_`Q,,m<;T@^:{$+.:}aq|4XusrA[.tr$pb[;Hk{O<,e6O}I82c4G([pj^op-O' );
define( 'AUTH_SALT',        'seB;(Re$W9}&A1<qsBpY]_nFf%9LbUDB0up.|%,l}x%EHKt@!KL^lGRN;d)ziTTQ' );
define( 'SECURE_AUTH_SALT', '*}&myO{n L#O}(#2=6L`<3%@Mf0$1cp_3N$`4h*4GAO;b`3Z?c/5Ljf(4D;y}pr6' );
define( 'LOGGED_IN_SALT',   'L5klU|/Oztm&EA5N+H xSBhSM4TqwC_Hxh.C_F&-DTS}k:K7iF7ZV]+b_`/,!mD{' );
define( 'NONCE_SALT',       '9zG/Xp[=V/`g_=f;xPyy4 ZtztubJ6a_2)3b} ),PCldE5`EbkrgOJ,{,lA3D*~)' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once( ABSPATH . 'wp-settings.php' );

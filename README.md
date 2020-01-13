# discordbotstut
Начнём. Ссылка на мой [youtube канал.](https://www.youtube.com/channel/UCHHBv4pqQWIMUuXIirVWmjg?view_as=subscriber) 
~~Если вы читаете это, то скорее всего первая часть туториала уже вышла.~~ Ещё не вышла.
### Discord bot туториал. Туториал по созданию ботов для дискорда на node.js используя discord.js.
###### Creation date : 06.12.2019
###### Также отдельное спасибо [Mice#0777](https://l.co.ua/) за помощь в написании.

#### Установка [node.js](https://nodejs.org/en/).
Давайте начнём создание бота. Если у вас установлена node.js, то пропустите сделающие 2 строчки.
Заходим на сайт [node.js](https://nodejs.org/en/), скачиваем, устанавливаем. Скриншотов процесса установки нету, тк переустанавливать node.js нету желания. Но там всё интуитивно понятно.

#### Создание файлов, инициализация проекта, установка библиотек.
Создаём папку bot. Желательно не использовать кирилицу, юникод и т. п. в названии.
Сразу же создаём файл index.js или bot.js. Это не несёт особого смысла. Можно назвать как угодно, но принятно index.js / bot.js.
Это будет главный файл бота, т.е. первым запускается, в нём основной код бота.
Далее открываем консоль / терминал если у вас linux.
Для быстрого открытия консоли на windows можно нажать WIN + R, ввести cmd.
Далее переходим в папку бота, думаю как это сделать через консоль всем понятно. Пишим :
npm init - инициализация проекта.
Жмём enter до конца. Если ошибка в package name, то напишите bot.
npm i discord.js - установка библиотеки discord.js.
<br />
#### Редакторы кода.
Далее рекомендую установить один из следующих редакторов кода :
##### [Atom](https://atom.io/).
##### [VScode](https://code.visualstudio.com/).
##### [WebStorm](https://www.jetbrains.com/ru-ru/webstorm/) (спасибо за подсказку Mice V 4.4.4#0444 )
Если очень слабый компьюер можете поставить [notepad++](https://notepad-plus-plus.org/downloads/), но это для постоянной основы не самый хороший вариант.
Лично я использую Atom.

#### Аккаунт бота.
Вы можете зарегистрировать его на сайте [discord developers](https://discordapp.com/developers/).
Жмём кнопку "New Application". Вводим название бота. Жмём "Create".
Переходим во вкладку "Bot", нажимаем "Add Bot", затем "Yes, do it!"
Находим строку "token", немного ниже есть кнопка "Copy", нажимаем. Теперь в вашем буфере обмена есть токен бота.

#### Код.
##### Начало.
Создадим первый код. Пишем : 
```javascript
const Discord = require("discord.js"); //Подключаем discord.js для дальнейшего использования.
const client = new Discord.Client(); 
client.login("token"); //Где token пишем токен бота.
```
##### Запуск.
Открываем консоль, переходим в папку проекта и пишем : 
```
node название-файла-с-кодом.js
```
в зависимости от названия файла. 
Если у вас windows, то вы можете создать файл start.bat с текстом 
```
node название-файла-с-кодом.js
pause
```
Если линукс, то вы можете создать файл start.sh
```
node название-файла-с-кодом.js
```
Это будет запускать бота. Далее я не буду говорить про запуск. Делайте это сами.
#### Конфиг.
Создаем файл ``config.json`` с конфигурацией нашего бота.
```json
{
"version" : "1.0", 
"prefix" : "!"
}
``` 
В начале кода бота напишем : 
```javascript
const config = require("./config.json");
```
Еще вы можете создать конфиг прямо в коде бота.
```js
let config ={ 
"version" : "1.0",
"prefix" : "!" 
}
```
Но второй вариант крайне не рекомендуется использовать, ведь для того что-бы изменить конфиг бота нам придется изменять его код.
#### Реагирование на сообщение.
Теперь давайте делать что-то когда приходит новое сообщение.
Например логировать его текст.
```javascript
client.on("message", message => { //Пришло сообщение.
console.log(message.content); //console.log логирует в консоль, message - объект сообщения, message.content - строка объекта с текстом сообщения.
})
```
#### Получение информации о авторе сообщения (отправителе).
Давайте залогируем тег автора.
```javascript
client.on("message", message => { //Пришло сообщение.
console.log(message.author.tag); //message.author.tag содержит в себе тег автора.
})
```
#### Команда !ping
Давайте в ответ на сообщение !ping отправлять такое сообщение : "@user, мой пинг равен " далее пинг. 
```javascript
client.on("message", message => { //Пришло сообщение.
if(message.content.toLowerCase()==config.prefix + "ping") //Если текст сообщения равен префиксу плюс ping, то происходит код в {} Часть кода .toLowerCase() превращает текст в строчный. (Делает из заглавных букв обычные.) 
{
message.reply("мой пинг равен " + client.ping) //message.reply отвечает на сообщение.
//Также можно использовать message.channel.send(message.author + ", мой пинг равен " + client.ping);
}
})
```
Также можно писать не 
```javascript
if(message.content.toLowerCase()==config.prefix + "ping")
```
А 
```javascript
if(message.content.toLowerCase().startsWith(config.prefix + "ping"))
```
.startsWith проверят начинается ли строка с символов в аргументах.

#### Об отправке сообщений.
Теперь рассмотрим message.channel.send();
Когда я только начинал программировать я не понимал смысл этой фразы, но сейчас понимаю и могу рассказать вам. message - объект сообщения, в нём есть channel - канал в который было отправлено, то есть с помощью message.channel мы получаем канал, а .send() отправляет туда сообщение.
```javascript
client.on("message", message => { //Пришло сообщение.
if(message.content.toLowerCase()==config.prefix + "test")
{
message.channel.send("I am working now!");
}
})
```
Также можно отправлять сообщение по ID канала.
Делается это так :
```
//some code...
client.channels.get('ID канала').send("Hi!");
```
client.channels - все каналы которые есть на серверах с ботом.  
.get('ID') получает канал из них по ID.  
.send("Text"); Отправляет сообщение.  
ID канала можно получить используя [devepoer mode](https://discordia.me/en/developer-mode)  

#### Eval.
Также даже начинающим программистам будет очень полезна в боте команда !eval для выполнения кода не пиша его в коде бота, т.е. вы пишите ``!eval какой-то код`` и бот выполняет этот код.  
Я нашёл хороший [туториал](https://github.com/AnIdiotsGuide/discordjs-bot-guide/blob/master/examples/making-an-eval-command.md) по этой команде на github. Рекомендую ознакомиться и взять себе команду в код бота. Принцип её работы мы разберём позже. [Тык](https://github.com/AnIdiotsGuide/discordjs-bot-guide/blob/master/examples/making-an-eval-command.md). 
 
#### RichEmbed.
##### Пример. 
Думаю вы все видели как боты отправляют сообщения такого типа. 
 
![Image alt](https://github.com/TrueMajner/discordbotstut/raw/master/img/embed.png) 
 
Это называется RichEmbed (Embed). 
Давайте отправим простой эмбед похожий на данный. (Картинка ниже) 
 
![Image alt](https://github.com/TrueMajner/discordbotstut/raw/master/img/exxample.png) 
 
##### Команда. 
Для этого создадим новую команду ``!ping``.
```javascript
client.on("message", message => { //Пришло сообщение.
if(message.content.toLowerCase()==config.prefix + "ping") //Выше было
{
let embed = new Discord.RichEmbed() //Создаём новый эмбед.
.setTitle('Пинг бота.') //Устанавливаем заголовок.
.setColor(`GREEN`) //Цвет зелёный. Можно указать hex.
.setDescription("Пинг : " + client.ping); //Устанавливаем описание.
message.channel.send(embed); //Отправляем.
}
})

```
##### Параметры.
В Embed есть много различных параметров, вы можете прочесть их далее, либо посмотреть на оффициальном сайте [discord.js](https://discord.js.org/#/docs/main/stable/class/RichEmbed)
```javascript
embed.setColor("Цвет в hex или один из встроенных."); // Устанавливает цвет боковой полосы.
embed.setDescription("Описание") //Устанавливает описание.
embed.serFooter("Подпись") //Устанавливает подпись мелким шрифтом под эмбедом.
embed.setThumbnail("url") //Миниатюра эмбеда.
embed.setAuthor("Имя", "Url") //Устанавливает автора.
embed.addField("Заголовок", "Текст") //Добавляет поле.
embed.setImage("URL") //Добавляет картинку.
```
##### Пример.
Команда ``!avatar``. 
```javascript
client.on("message", message => { //Пришло сообщение.
if(message.content.toLowerCase().startsWith(config.prefix + "avatar")) //Выше было
{
let mb = message.mentions.members.first() || message.member; // Если есть упомянание человека в сообщении, то берём его, если нету, то себя. Расскажу чуть позже.
let color = mb.displayHexColor; //Цвет самой высокой роли человека, если цвет невидимый то самой высокой отображаемой роли.
if (color == '#000000') color = mb.hoistRole.hexColor;//Цвет самой высокой роли человека.
let embed = new Discord.RichEmbed() //Создаём эмбед
.setImage(mb.user.avatarURL) //Устанавливаем картинку - аватар человека.
.setColor(color) //Цвет.
.setFooter("Аватар пользователя " + mb.user.tag); //Устанавливаем в подпись чей это аватар.
message.channel.send({embed}); //Отправляем.
}
})
```
#### Мой дискорд сервер!
Прошу зайти на [мой дискорд сервер](https://discord.gg/38Tdu7N), ведь я долго делал туториал, а вам не сложно зайти на [мой сервер](https://discord.gg/38Tdu7N) в виде благодарности. 
#### В разработке..

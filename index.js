const Discord = require("discord.js"); //Подключаем discord.js для дальнейшего использования.
const client = new Discord.Client(); 
client.login("token"); //Где token пишем токен бота.

let config = { //Создаём литеральный объект.
version : "1.0", //Версия бота.
prefix : "!" //Префикс бота.
};

client.on("message", message => { //Пришло сообщение.
if(message.content==config.prefix + "ping") //Если текст сообщения равен префиксу плюс ping, то происходит код в {}
{
message.reply("мой пинг равен " + client.ping) //message.reply отвечает на сообщение.
//Также можно использовать message.channel.send(message.author + ", мой пинг равен " + client.ping);
}
})

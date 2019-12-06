//Для получения аргументов команды с учётом того, что человек может писать по много пробелов между словами.
let str = "sadas       dssf sd    df df  dfdfd";
let args = space(str.split(" "));
function space(text){
return text.replace(/\s+/g," ");
}

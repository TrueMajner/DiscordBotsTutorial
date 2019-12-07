//Для получения аргументов команды с учётом того, что человек может писать по много пробелов между словами.
function space(text){
return text.replace(/\s+/g," ");
}
let str = "sadas       dssf sd    df df  dfdfd";
let args = space(str.split(" "));

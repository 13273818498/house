//setCookie(key,val,time)   time 可选参数
function setCookie(key,val,time) {
    var date=new Date();
    date.setDate(date.getDate()+time);
    // document.cookie=key+'='+val+';expires='+date;
document.cookie=`${key}=${val};expires=${date}`;
}
function getCookie(key) {
    var a=document.cookie.split('; ');
    for(var item of a){
        var aaa=item.split('=');
        if(aaa[0]==key){
            return(aaa[1]);        }
    }
}
//删除cookie   把时间改成-1就可以了
function removeCookie(key){
    this.setCookie(key,'',-1);
}
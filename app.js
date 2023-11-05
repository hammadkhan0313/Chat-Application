function addmessage(){
    // sab se phle hamne value get ke.
    var val = document.getElementById('val')
    // then hamne create element se ek element banya.  
    var p = document.createElement('p')
    // input ke value get ke.
    var text = document.createTextNode(val.value)
    // elemrnt ke andar koe dosra element ya text daalne ke lye use hota he.
    p.appendChild (text)
    // then html se div se message ke id ko get karenge.
    var message = document.getElementById('message')   
    message.appendChild(p)
    // input ko khali karne ke leye.
    val.value = ""
};
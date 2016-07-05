
let timeOutVar=-1;
function changeImage(y,data,interval)
{
    let x=y
    var img = document.getElementById("images");
    var txt = document.querySelector('.informativeText');
    if(!img || !txt){
        clearTimeout(timeOutVar);    
    }
    else{
        img.classList.remove('imageHidden');
        img.src = data[x].url;
        txt.innerHTML=data[x].text;
        x++;
        if(x >= data.length){
            x = 0;
        } 
        timeOutVar= setTimeout(function(){changeImage(x,data,interval);},interval);
    }
}

function putImage_Text(data){
    let interval=10000;
    var img = document.getElementById("images");
    var txt = document.querySelector('.informativeText');
    if(!img || !txt){
        clearTimeout(timeOutVar);    
    }
    else{
        txt.innerHTML=data[0].text;
        img.src=data[0].url;
        img.style.opacity=1;
        timeOutVar= setTimeout(function(){changeImage(1,data, interval);},interval);
    }
}

function imagesEfects(data){
    clearTimeout(timeOutVar);
    putImage_Text(data)

}

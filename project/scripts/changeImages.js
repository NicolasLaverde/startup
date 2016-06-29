

function callImagesEfect(dataImages,folder){
        dataImages.success(function(data){

            let interval=5000;
            let images=[];
            let text = document.querySelector('.informativeText');
            let imagesAux;
            let lastLink=-1;
            let timeOutVar=-1;
            let timeFadeOut;
            
            let uncore = document.getElementsByTagName('a');
            for(let i=0; i<uncore.length;i++){
                uncore[i].addEventListener("click", function(e){
                    console.log(timeOutVar);
                    clearInterval(timeOutVar);
                    console.log(timeOutVar);
                    clearInterval(timeFadeOut);
                    if(lastLink===-1){
                        lastLink=i;
                    }
                    init();
                });
            }
            if(lastLink===-1){
                init();
            }
            function changeImage(y)
            {
                let x=y
                var img = document.getElementById("images");
                var txt = document.querySelector('.informativeText');
                img.classList.remove('imageHidden');
                console.log(x);
                img.src = imagesAux[x].url;
                txt.innerHTML=imagesAux[x].text;
                x++;
                if(x >= imagesAux.length){
                    x = 0;
                } 
                if(typeof timeOutVar ==='undefineed'){
                    console.log('my value is ' + timeOutVar);
                }
                timeOutVar= setTimeout(function(){changeImage(x); return -10;},10000);
            }
            function efect(images){
                var img = document.getElementById("images");
                var txt = document.querySelector('.informativeText');
                txt.innerHTML=images[0].text;
                img.src=images[0].url;
                imagesAux=images;
                img.style.opacity=1;
                timeOutVar= setTimeout(function(){changeImage(1); return -10},10000);
            }
            function init(){
                for(let i=0; i<data.Images.length;i++){
                    if(folder===data.Images[i].name){
                        console.log(folder);
                        efect(data.Images[i].array);
                        break;
                    }
                }
            }
        });
}

import {common} from "./parent.js"
import breakfast from "./assets/breakfast.png"
import maincourse from "./assets/maincourse.png"

export class menu extends common{
    constructor (dom,content){
        super(dom);
        this.content=content;

    }

    appendMenu(){
        const images=[breakfast,maincourse]
        for (let menu in this.content.menu) {
            const menuDom =document.createElement("div");
            const photo=document.createElement("div");
            photo.classList.add("menuImg");
            const img=document.createElement('img');
            img.classList.add("img");
            // const img=new Image();
            for (let dishes in this.content.menu[menu]){

                this.mainDom.appendChild(menuDom);
                const dishesDom=document.createElement("div");
                dishesDom.classList.add("dish")
                dishesDom.innerHTML=`<p class="dishName">${this.content.menu[menu][dishes].dishName}<span class="price">${this.content.menu[menu][dishes].price}</span><p class="discription">${this.content.menu[menu][dishes].discription}</p`;
                menuDom.appendChild(dishesDom);
                menuDom.classList.add("card");
                
            }
            for (let i = 0; i < 1; i++) {
                img.src=images[i];
                images.splice(0,1);
                img.alt="Food Img";
               
                
            }
            photo.appendChild(img);
            menuDom.appendChild(photo);

            
        }
    }
}


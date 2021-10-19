import {common} from "./parent.js"
import cookImg from "./assets/chef.png"
import managerImg from "./assets/manager.png"


export class contact extends common{

    constructor(dom,content){
        super(dom);
        this.content=content;
    }


    appendContact(){
        const images=[cookImg,managerImg]
        for(let staff in this.content.staffs){
            const staffInfoDiv=document.createElement("div");
            // const photo=document.createElement("div");
            // photo.classList.add("contactImg");
            const img=document.createElement('img');
            img.classList.add("img");
            this.mainDom.appendChild(staffInfoDiv);
            console.log("inside first loop",staff)
           
            staffInfoDiv.innerHTML=`<p>${this.content.staffs[staff].name}</p><p>${this.content.staffs[staff].position}</p><p>${this.content.staffs[staff].contact}</p><p>${this.content.staffs[staff].email}</p>`
          
            
            staffInfoDiv.classList.add("card");
            staffInfoDiv.classList.add("contactContent");

            for (let i = 0; i < 1; i++) {
                img.src=images[i];
                images.splice(0,1);
                
               
                
            }
            // photo.appendChild(img);
            staffInfoDiv.appendChild(img);
        }
            
        }
    

}
export class common{
    constructor(dom){
        this.dom=dom;
    }
    
    header(){
        const header= document.createElement('div');
        header.classList.add("header");
        const home=document.createElement('div');
        const menu=document.createElement('div');
        const contact=document.createElement('div');
        home.classList.add("home");
        menu.classList.add("menu");
        contact.classList.add("contact");
        home.textContent="Home";
        menu.textContent="Menu";
        contact.textContent="contact"
        this.dom.appendChild(header);
        header.appendChild(home);
        header.appendChild(menu);
        header.appendChild(contact);         

    }



    appendTitle(title){
        const mainDom=document.createElement("main");
        const titleDom = document.createElement("div");
        titleDom.textContent= title;
        titleDom.classList.add("title");
        mainDom.classList.add("grid");
            
        this.dom.appendChild(mainDom);
        mainDom.appendChild(titleDom);
        return mainDom;
    }

    
}







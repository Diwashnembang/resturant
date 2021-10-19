export class common{
    constructor(dom){
        this.dom=dom;
        this.mainDom=document.createElement("main");
    }
    
    appendHeader(){
        const header= document.createElement('div');
        header.classList.add("header");
        this.dom.appendChild(header)
        
        //text inside options
        const home=document.createElement('div');
        const menu=document.createElement('div');
        const contact=document.createElement('div');
        home.classList.add("home");
        menu.classList.add("menu");
        contact.classList.add("contact");
        home.textContent="Home";
        menu.textContent="Menu";
        contact.textContent="contact"

        home.classList.add("option");
        menu.classList.add("option");
        contact.classList.add("option");
       

        //adding doms inside header
    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);
        return header;         

    }



    appendTitle(title){

        const titleDom = document.createElement("div");
        titleDom.textContent= title;
        titleDom.classList.add("title");
        
        titleDom.classList.add(`${title.split(' ')[0]}`.toLowerCase());
        this.mainDom.classList.add("grid");
            
        this.dom.appendChild(this.mainDom);
        this.mainDom.appendChild(titleDom);
        return titleDom;
    }

    appendFooter(){

        const footer=document.createElement("footer");
        const footerContent = document.createElement("div");
        footer.classList.add('footer');
        footerContent.classList.add("grid");
        for(let key in this.content.credit){
            const credit=document.createElement('div');
            credit.classList.add('credit');
            credit.innerHTML=`<p class=>${this.content.credit[key]}`;
            footerContent.appendChild(credit)
        }

        this.dom.appendChild(footer);
        footer.appendChild(footerContent);
        return {footer,footerContent};


        // for footer content
        

    }

    appendImages(images){
        
    }

    
}







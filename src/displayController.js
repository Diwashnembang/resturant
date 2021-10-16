import { home } from "./home.js";
import { menu } from "./menu.js";
import {common} from "./parent.js"

export class displayController {
   
    static createHomepage(contentDom, homeContent) {
        const homepage = new home(contentDom, homeContent);
        homepage.appendTitle(homeContent.title);
        homepage.appendFeedback(homepage.mainDom);
        homepage.appendSchedule(homepage.mainDom);
        homepage.apppendLocation(homepage.mainDom);
        homepage.appendFooter();
    }


    static clearScreen(dom) {
        // while(dom.firstChild) {
        //   dom.removeChild(dom.firstChild);
        // }
        dom.remove()
    }

    static createHeading(dom){
        const header = new common(dom);
        header.appendHeader()

    }

    static createMenupage(contentDom,menuContent){
        const menupage = new menu(contentDom,menuContent);
        menupage.appendTitle(menuContent.title);
        menupage.appendMenu();
        menupage.appendFooter()
    }
}
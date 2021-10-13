import { home } from "./home.js";

export class displayController {
   
    createHomepage(contentDom, homeContent) {
        const homepage = new home(contentDom, homeContent);
        homepage.header();
        const main = homepage.appendTitle("The Famous One's Kitchen ");
        homepage.appendFeedback(homepage.mainDom);
        homepage.appendSchedule(homepage.mainDom);
        homepage.apppendLocation(homepage.mainDom);
        homepage.appendFooter(homepage.mainDom);
    }
}
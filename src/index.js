import { home} from "./home.js";
import  "./style.css";
const contentDom=document.querySelector("#content");

const h = new home(contentDom);
h.header()
h.appendTitle("The Famous One's Kitchen ")


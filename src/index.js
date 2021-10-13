import { displayController } from "./displayController";
import "./style.css";



const homeContent = {
    review:
        "This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they’re doing and what they’re talking about, and you can tell making the customers happy is their main priority. Food is pretty good, some italian classics and some twists, and for their prices it’s 100% worth it.",
    reviewer: "Billy",
    schedule: {
        title: "Hours",
        time: {
            Sunday: "8am - 8pm",
            Monday: "6am - 6pm",
            Tuesday: "6am - 6pm",
            Wednesday: "6am - 6pm",
            Thursday: " 6am - 10pm",
            Friday: " 6am - 10pm",
            Saturday: "8am - 10pm",
        },
    },
    location: "123 Forest Drive, Forestville, Maine",
    credit: {
        first: `Photo by <a href="https://unsplash.com/@miracletwentyone?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joseph Gonzalez</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
        second: `Photo by <a href="https://unsplash.com/@kodeblacc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Favour Otunji</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
        third: `Photo by <a href="https://unsplash.com/@vardarious?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Volkan Vardar</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
        fourth: `Background by <a href="https://unsplash.com/@brookelark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brooke Lark</a> on <a href="https://unsplash.com/s/photos/resturant-white?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
           `,
    },
};


const contentDom = document.querySelector("#content");
const  displayControll=new displayController();

displayControll.createHomepage(contentDom,homeContent);

import { displayController } from "./displayController";
import "./style.css";



const homeContent = {
    title: "The Famous One's Kitchen ",
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
        first: `Photo by <a href="https://unsplash.com/@miracletwentyone?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText "target="_blank">Joseph Gonzalez</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>`,
        second: `Photo by <a href="https://unsplash.com/@kodeblacc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Favour Otunji</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>`,
        third: `Photo by <a href="https://unsplash.com/@vardarious?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Volkan Vardar</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>`,
        fourth: `Background by <a href="https://unsplash.com/@brookelark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Brooke Lark</a> on <a href="https://unsplash.com/s/photos/resturant-white?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>
           `,
    },
};

const menuContent = {
    title: "Menu",
    menu: {
        firstMenu: {

            firstDish: {

                dishName: "Two By Five",
                price: "14.99",
                discription: "2 eggs, 2 sausage links, 2 strips of maple bacon, 2 buttermilk pancakes and 2 slices of toast.",

            },

            secondDish: {
                dishName: "Avocado toast",
                price: "10.99",
                discription: "Sourdough toast topped with smashed avocado, tomatoes, mixed greens and a soft poached egg.",

            },

            thirdDish: {
                dishName: "Brioche Breakfast Club",
                price: "13.59",
                discription: "Fried egg, double slices of Canadian Cheddar, maple bacon, lettuce, tomato and mayo on a grilled brioche bun. Served with shredded hashbrowns.",

            },

        },

        secondMenu: {
            firstDish: {

                dishName: "Beer-Battered Fish And Chips",
                price: "16.59",
                discription: "2 pieces of hand-battered Ocean Wise cod fillets, freshly dipped in our housemade beer batter and served with tartar sauce, coleslaw and fresh cut homestyle fries.",

            },

            secondDish: {
                dishName: "Southern-Style Chicken Tenders ",
                price: "17.59",

                discription: "6 pieces of premium chicken tenderloin, hand-battered in our secret southern-style recipe. Served with your choice of dipping sauce, coleslaw and fresh cut homestyle fries.",
            },

            thirdDish: {
                dishName: "The Amazing Ginger Bowl",
                price: "17.99",
                discription: "Hand-breaded chicken tenders, tossed in citrus ginger sauce, with carrots and onions on chef’s rice topped with sesame seeds and green onions. Served with naan bread",

            },

        },
    },

    credit: {
        first: "Menu from <a href='https://rickysrestaurants.ca/menus/?location_id=558' target=_blank>Rikey's Resturant</a>",
    }


};

const contactContact={
    title:"Contact",
    staffs:{
        staffNo1:{
            name:"Harry",
            position:"Cook",
            contact:"555-555-5554",
            email:"totallyRealEmail@notFake.com",

        },

        staffNo2:{
            name:"Nick",
            position:"Manager",
            contact:"555-555-5554",
            email:"totallyRealEmail@notFake.com",

        },

    },
    credit:{
        first:"Made by Diwash Nembang",
    },
}


const contentDom = document.querySelector("#content");
displayController.createHeading(contentDom);
displayController.createHomepage(contentDom,homeContent);
const headerDom=Array.from(document.querySelectorAll(".option"));
headerDom.forEach(header=>{
    const choosen=header.getAttribute("class").split(' ')[0];    
    header.addEventListener("click",()=>{
        const mainDom=document.querySelector("main");
        const footerDom=document.querySelector("footer");
        console.log(choosen)
        switch (choosen) {
            case "home":
                
                displayController.clearScreen(mainDom);
                displayController.clearScreen(footerDom);
                displayController.createHomepage(contentDom,homeContent);
                break;
            
                case "menu":
                displayController.clearScreen(mainDom);
                displayController.clearScreen(footerDom);
                displayController.createMenupage(contentDom, menuContent); 
                break;
                
                case "contact":
                displayController.clearScreen(mainDom);
                displayController.clearScreen(footerDom);
                displayController.createContactPage(contentDom, contactContact); 
                
                break;
                
                default:   
                break;
        }
       
});
})


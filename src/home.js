import {common} from './parent.js';

export class home extends common{
    constructor(dom,content){
        super(dom);
        this.content=content;
       

    }

    appendFeedback(mainDom){
       const review= this.content.review;
       const reviewer=this.content.reviewer;
       const reviewDom= document.createElement('div');
       reviewDom.classList.add("card");
       reviewDom.classList.add("review");
       reviewDom.innerHTML=`<p>${review}</p><p class="reviewer">-${reviewer}</p>`;
       mainDom.append(reviewDom);

       const photo= document.createElement('div');
       photo.classList.add("photo");
       photo.classList.add("first");
       
       mainDom.appendChild(photo);
        return {reviewDom,photo};


    }

    appendSchedule(mainDom){
        const scheduleDom= document.createElement("div");
        scheduleDom.classList.add("card");
        scheduleDom.classList.add("schedule");

        scheduleDom.innerHTML=`<h2>${this.content.schedule.title}</h2p>`;
        mainDom.append(scheduleDom);
        for(let key in this.content.schedule.time ){ //for breaking line after each day
            const scheduleDetailDom= document.createElement("div");
            scheduleDetailDom.innerHTML=`<p>${key}:${this.content.schedule.time[key]}</p>`;
            scheduleDom.append(scheduleDetailDom);    
        }

        const photo= document.createElement('div');
       photo.classList.add("photo");
       photo.classList.add("second");
       
       mainDom.appendChild(photo);

        return {scheduleDom,photo};

    }

   apppendLocation(mainDom){
       const locationDom=document.createElement("div");
       locationDom.classList.add("card");
       locationDom.classList.add("location");
       locationDom.innerHTML=`<p>Location</p><p class="locationDetail">${this.content.location}`;
       mainDom.appendChild(locationDom);
       return locationDom;

   }
    


}
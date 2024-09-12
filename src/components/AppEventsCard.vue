<script>
import { RouterLink } from 'vue-router';

    export default {
        name: 'AppEventsCard',
        
        

        data(){
            return{
                eventsList: [
                    {
                        slug: "concert-in-the-park-ab37",
                        img: "https://picsum.photos/200/300",
                        name: "Concert in the Park",
                        description: "A live concert featuring local bands.",
                        organiser: "City Council",
                        location: "Central Park",
                        date: "15/09/2024", 
                        time: "19:00",
                        reservationRequired: true,
                        cost: 20,
                        eventType: "Music"
                    },
                    {
                        slug: "art-exhibition-cd42",
                        img: "https://picsum.photos/200/300",
                        name: "Art Exhibition",
                        description: "Showcasing contemporary artists' works.",
                        organiser: "Art Collective",
                        location: "Downtown Gallery",
                        date: "18/09/2024",
                        time: "17:00",
                        reservationRequired: false,
                        cost: 0,
                        eventType: "Art"
                    },
                    {
                        slug: "food-festival-ef93",
                        img: "https://picsum.photos/200/300",
                        name: "Food Festival",
                        description: "Explore dishes from all over the world.",
                        organiser: "Food Lovers Association",
                        location: "City Square",
                        date: "20/09/2024",
                        time: "11:00",
                        reservationRequired: false,
                        cost: 10,
                        eventType: "Food"
                    },
                    {
                        slug: "yoga-in-the-park-gh21",
                        img: "https://picsum.photos/200/300",
                        name: "Yoga in the Park",
                        description: "A relaxing yoga session in nature.",
                        organiser: "Health and Wellness",
                        location: "Riverside Park",
                        date: "22/09/2024",
                        time: "08:00",
                        reservationRequired: true,
                        cost: 15,
                        eventType: "Wellness"
                    },
                    {
                        slug: "tech-conference-ij74",
                        img: "https://picsum.photos/200/300",
                        name: "Tech Conference",
                        description: "Learn about the latest in technology.",
                        organiser: "Tech Innovators",
                        location: "Convention Center",
                        date: "25/09/2024",
                        time: "09:00",
                        reservationRequired: true,
                        cost: 100,
                        eventType: "Technology"
                    },
                    {
                        slug: "theater-performance-kl53",
                        img: "https://picsum.photos/200/300",
                        name: "Theater Performance",
                        description: "A local production of a classic play.",
                        organiser: "Community Theater",
                        location: "Main Theater",
                        date: "28/09/2024",
                        time: "20:00",
                        reservationRequired: false,
                        cost: 30,
                        eventType: "Theater"
                    },
                    {
                        slug: "marathon-mn98",
                        img: "https://picsum.photos/200/300",
                        name: "Marathon",
                        description: "Annual city marathon with participants from around the world.",
                        organiser: "City Sports",
                        location: "City Streets",
                        date: "01/10/2024",
                        time: "07:00",
                        reservationRequired: true,
                        cost: 50,
                        eventType: "Sports"
                    },
                    {
                        slug: "book-fair-op65",
                        img: "https://picsum.photos/200/300",
                        name: "Book Fair",
                        description: "A fair for book lovers and authors.",
                        organiser: "Library Association",
                        location: "Convention Hall",
                        date: "05/10/2024",
                        time: "10:00",
                        reservationRequired: false,
                        cost: 5,
                        eventType: "Literature"
                    },
                    {
                        slug: "film-screening-qr87",
                        img: "https://picsum.photos/200/300",
                        name: "Film Screening",
                        description: "A screening of independent films.",
                        organiser: "Film Club",
                        location: "Indie Cinema",
                        date: "07/10/2024",
                        time: "18:30",
                        reservationRequired: true,
                        cost: 12,
                        eventType: "Film"
                    },
                    {
                        slug: "coding-workshop-st49",
                        img: "https://picsum.photos/200/300",
                        name: "Coding Workshop",
                        description: "Learn the basics of programming in this workshop.",
                        organiser: "Code Academy",
                        location: "Tech Hub",
                        date: "10/10/2024",
                        time: "14:00",
                        reservationRequired: true,
                        cost: 25,
                        eventType: "Education"
                    }
            ],
     }
        },
        methods: {
            
            },

        }
	

    
</script>

<template>
    <div v-for="event in eventsList" class="card rounded text-white position-relative">
         <router-link><img :src="event.img" class="card-img-top rounded" alt="..."></router-link> 
        <div class=" rounded lm-card-img-overlay d-flex flex-column justify-content-end">
            <div class="d-flex justify-content-between" >
                <h5 class="card-title">{{event.name}}</h5>
            </div>
            <div class="d-flex justify-content-between" >
                <router-link class="fs-6" style="text-decoration: none; color: bisque;" >{{event.location}}</router-link>
                <span class="fs-6" >{{ event.date }}</span>
            </div>
        </div>
        <div class="lm-card-top-overlay text-end pe-2" >
            <span>#{{ event.eventType }}</span>
        </div>
    </div>
</template>

<style lang="scss" >
    .lm-card-img-overlay{
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 1rem;
        background-color: #18172da5;
    }

    .lm-card-top-overlay{
        position: absolute;
        right: 0;
        top: 0;
        left: 0;
        background-color: #18172da5;
    }

    .card{
        border: black;
        width: 18rem;
    }

    @media screen and (min-width: 992px) {
        .card{
            width: calc(100% / 3 - 1.5rem);
        }
}
</style>
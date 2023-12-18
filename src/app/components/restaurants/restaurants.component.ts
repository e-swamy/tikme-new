import { Component } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent {
  title = 'TikeMe';
  restaurantBranches: any = [
    {
      id: 1,
      title: "Amet sunt rerum autem, sequi harum at adipisci impedit ipsa",
      restaurantImg: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1381&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "7700 Hurontario St & Ray Lawson Blvd, Brampton, ON L6Y 4M3, Canada",
      phoneNumber: "+1 (905) 457-5557",
      openingTime: "Opens at 05:30 PM",
      orderType: "order-now"
    },
    {
      id: 2,
      title: "Lorem ipsum, dolor sit amet consectetur elit commodi temporibus placeat maiores reiciendis vero fugit quis voluptatem",
      restaurantImg: "https://plus.unsplash.com/premium_photo-1671394138163-ba8be139614b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "7700 Hurontario St & Ray Lawson Blvd, Brampton",
      phoneNumber: "+1 (905) 457-5557",
      openingTime: "Opens on Saturday",
      orderType: "pre-order"
    },
    {
      id: 3,
      title: "Commodi temporibus placeat maiores sit amet consectetur adipisicing elit",
      restaurantImg: "https://images.unsplash.com/photo-1600628421060-939639517883?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "7700 Hurontario St & Ray Lawson Blvd, Brampton, ON L6Y 4M3, Canada",
      phoneNumber: "+1 (905) 457-5557",
      openingTime: "Opens on Monday",
      orderType: ""
    },
    {
      id: 4,
      title: " Reiciendis consectetur adipis voluptates saepe, culpa",
      restaurantImg: "https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "7700 Hurontario St & Ray Lawson Blvd, Brampton, ON L6Y 4M3, Canada",
      phoneNumber: "+1 (905) 457-5557",
      openingTime: "Opens at 11 AM",
      orderType: "pre-order"
    },
    {
      id: 5,
      title: "Nesciunt distinctio iste voluptates saepe",
      restaurantImg: "https://plus.unsplash.com/premium_photo-1674106347866-8282d8c19f84?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "7700 Hurontario St & Ray Lawson Blvd, Brampton",
      phoneNumber: "+1 (905) 457-5557",
      openingTime: "Opens at 10:30 AM",
      orderType: "order-now"
    }
  ]
}

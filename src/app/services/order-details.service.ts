import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  //Food detais
  foodDetails = [
    {
      id:1,
      foodName:"Paneer Grilled",
      foodDetails:"Pan-fried masala paneer",
      foodPrice:200,
      foodImg:"https://media.istockphoto.com/id/1474136049/photo/close-up-image-of-paneer-kebabs-marinated-curd-cheese-pieces-on-metal-skewers-red-onion-and.webp?b=1&s=170667a&w=0&k=20&c=MpgFyuzf7fBEToJUVnIR4Gx5H8sqNygH_OdPm4kCHS8="
    },
    {
      id:2,
      foodName:"Pizza",
      foodDetails:"Onion|Capsicum|Black olives| sweet corn, Red Parpika topped with cheese",
      foodPrice:199,
      foodImg:"https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id:3,
      foodName:"Sweets",
      foodDetails:"all mixed sweets",
      foodPrice:149,
      foodImg:"https://images.unsplash.com/photo-1591123220262-87ed377f7c08?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id:4,
      foodName:"Biryani",
      foodDetails:"Biryani with leg piece| Bone-less chicken, biryani with natu-kodi",
      foodPrice:399,
      foodImg:"https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=1788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id:5,
      foodName:"Ice creams",
      foodDetails:"vennela | strawberry | Chocolate ",
      foodPrice:259,
      foodImg:"https://images.unsplash.com/photo-1571778127658-9275961ee810?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id:6,
      foodName:"Burgers",
      foodDetails:"veg & non-veg burgers",
      foodPrice:150,
      foodImg:"https://images.unsplash.com/photo-1610440042657-612c34d95e9f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }

  ]
}

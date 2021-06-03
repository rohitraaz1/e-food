import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-borivali',
  templateUrl: './borivali.component.html',
  styleUrls: ['./borivali.component.css']
})
export class BorivaliComponent implements OnInit {

  dishes: Dish[]=[
    {
      id: '1',
      name: 'Mc Donalds',
      image: '/assets/images/Borivali/Mc Donalds.png',
      rating:'4.5'
    },
    {
      id: '2',
      name: 'Juice Box',
      image: '/assets/images/Borivali/Juice Box.png',
      rating:'5'
    },
    {
      id: '3',
      name: 'Wok Express',
      image: '/assets/images/Borivali/Wok Express.png',
      rating:'3.5'
    },
    {
      id: '4',
      name: 'Seven Kings',
      image: '/assets/images/Borivali/Seven Kings.png',
      rating:'4.5'
    },
    {
      id: '5',
      name: 'Banana Leaf',
      image: '/assets/images/Borivali/Banana Leaf.png',
      rating:'5'
    },
    {
      id: '6',
      name: 'Wow! Momo',
      image: '/assets/images/Borivali/Wow! Momo.png',
      rating:'5'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

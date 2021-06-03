import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-andheri',
  templateUrl: './andheri.component.html',
  styleUrls: ['./andheri.component.css']
})
export class AndheriComponent implements OnInit {
  dishes: Dish[]=[
    {
      id: '1',
      name: 'Sarovar-veg',
      image: '/assets/images/Andheri/Sarovar-Veg.jpg',
      rating:'4.5'
    },
    {
      id: '2',
      name: 'Jumbo King',
      image: '/assets/images/Andheri/Jumbo King.png',
      rating:'5'
    },
    {
      id: '3',
      name: 'Subway',
      image: '/assets/images/Andheri/Subbway.png',
      rating:'3.5'
    },
    {
      id: '4',
      name: 'Amar Juice Center',
      image: '/assets/images/Andheri/Amar-Juice centre.png',
      rating:'3.5'
    },
    {
      id: '5',
      name: 'Urban Burger',
      image: '/assets/images/Andheri/Urban-burger.png',
      rating:'5'
    },
    {
      id: '6',
      name: 'Sbarro',
      image: '/assets/images/Andheri/Sbarro.png',
      rating:'5'
    },
    {
      id: '7',
      name: 'Keventers',
      image: '/assets/images/Andheri/Keventers.png',
      rating:'5'
    },
    {
      id: '8',
      name: 'Sandwizza',
      image: '/assets/images/Andheri/SandWizza.png',
      rating:'2.5'
    },
    {
      id: '8',
      name: 'Sweetish House Mafia',
      image: '/assets/images/Andheri/Sweetish House Mafia.jpg',
      rating:'4.5'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

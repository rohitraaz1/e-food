import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-bandra',
  templateUrl: './bandra.component.html',
  styleUrls: ['./bandra.component.css']
})
export class BandraComponent implements OnInit {

  dishes: Dish[]=[
    {
      id: '1',
      name: 'Franks',
      image: '/assets/images/Bandra/Franks.png',
      rating:'4.5'
    },
    {
      id: '2',
      name: 'Pastel works',
      image: '/assets/images/Bandra/Pastel works.png',
      rating:'5'
    },
    {
      id: '3',
      name: 'Oye Teri',
      image: '/assets/images/Bandra/Oye Teri.png',
      rating:'3.5'
    },
    {
      id: '4',
      name: 'The J',
      image: '/assets/images/Bandra/The J.png',
      rating:'3.5'
    },
    {
      id: '5',
      name: 'South Indian House',
      image: '/assets/images/Bandra/South Indian House.png',
      rating:'5'
    },
    {
      id: '6',
      name: 'Pancakes',
      image: '/assets/images/Bandra/Pancakes.png',
      rating:'5'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-kandavali',
  templateUrl: './kandavali.component.html',
  styleUrls: ['./kandavali.component.css']
})
export class KandavaliComponent implements OnInit {

  dishes: Dish[]=[
    {
      id: '1',
      name: 'Kitchen-Crew',
      image: '/assets/images/Kandivali/Kitchen-Crew.png',
      rating:'4.5'
    },
    {
      id: '2',
      name: 'Balaji-Idli House',
      image: '/assets/images/Kandivali/Balaji-Idli House.png',
      rating:'5'
    },
    {
      id: '3',
      name: 'Ruchi Restaurant',
      image: '/assets/images/Kandivali/Ruchi Restaurant.png',
      rating:'3.5'
    },
    {
      id: '4',
      name: 'Square pizza',
      image: '/assets/images/Kandivali/Square pizza.png',
      rating:'3.5'
    },
    {
      id: '5',
      name: '99-Pancakes',
      image: '/assets/images/Kandivali/99-Pancakes.png',
      rating:'5'
    },
    {
      id: '6',
      name: 'Big chefs Restaurant',
      image: '/assets/images/Kandivali/Big chefs Restaurant.png',
      rating:'5'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Featured } from '../shared/featured';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featured: Featured[]=[
    {
      id: '1',
      image: '/assets/images/intro.jpg',
      step: '/assets/images/step1.jpeg',
      title: 'Maxed out effect',
      description: 'When you dont care..'
    },
    {
      id: '2',
      image: '/assets/images/middle.png',
      step: '/assets/images/step2.jpeg',
      title: 'Chilling Effect',
      description: 'When you cant go to restaurant, bring restaurant to your home..'
    },
    {
      id: '3',
      image: '/assets/images/end.jpg',
      step: '/assets/images/step3.jpg',
      title: 'We are open 24/7',
      description: 'To fulfill your cravings..'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

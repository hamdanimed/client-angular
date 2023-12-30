import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private router:Router){}

  price=1000000;
  transfers=[
    {"timestamp":1703945878,"sender":"Client 1","reciever":"Client 2","amount":2000},
    {"timestamp":1703945878,"sender":"Client 1","reciever":"Client 2","amount":2000},
    {"timestamp":1703945878,"sender":"Client 1","reciever":"Client 2","amount":2000},
    {"timestamp":1703945878,"sender":"Client 1","reciever":"Client 2","amount":2000},
  ]

}

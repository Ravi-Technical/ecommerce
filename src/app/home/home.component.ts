import { Component, OnInit } from '@angular/core';
import { WelcomeService } from '../@core/welcome.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  ProductsList:any[] = [];

  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);


  constructor(private welcome: WelcomeService) { }

  ngOnInit(): void {
    this.welcome.getProducts().subscribe((products:any) => {
      this.ProductsList = products;
    })
  }



}

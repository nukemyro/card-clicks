import { Component, OnInit } from '@angular/core';
import { ClickCardComponent } from './click-card/click-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  cards: ClickCardComponent[] = [];

  constructor() {

  }

  ngOnInit() {
    for(let i = 0; i < 10; i++) {
      let c = new ClickCardComponent();
      c.cardTitle = 'card-' + i;
      this.cards.push(c);
    }    
  }

  cardClick(card: ClickCardComponent): void {
    card.clickCount++;
    console.log(card.cardTitle + ' has been clicked ' + card.clickCount + ' times');
    this.cards.sort((a, b) => {
      if (a.clickCount < b.clickCount) return -1;
      if (a.clickCount >= b.clickCount) return 1;
      return 0;
    });
  }  
}

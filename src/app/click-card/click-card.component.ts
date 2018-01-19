import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'click-card',
  templateUrl: './click-card.component.html',
  styleUrls: ['./click-card.component.css']
})
export class ClickCardComponent implements OnInit {
  @Input() clickCount: number = 0;
  @Input() cardTitle: string;
  @Input() cardText: string;  

  constructor() {
    this.clickCount = 0;
    this.cardTitle = 'derp';
  }

  ngOnInit() {    

  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss'],
})
export class SonComponent implements OnInit {
  @Input() beverage = 'tea';
  @Output() newBeverage = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  addNewBeverage(value: string) {
    this.newBeverage.emit(value);
  }
}

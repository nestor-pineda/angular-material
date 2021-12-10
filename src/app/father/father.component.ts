import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss'],
})
export class FatherComponent implements OnInit {
  fathersBeverage = 'coffee';
  beverages = [''];
  constructor() {}

  ngOnInit(): void {}

  addBeverageToArray(newBeverageInput: string) {
    this.beverages.push(newBeverageInput);
    this.clearInput();
  }

  clearInput() {
    let input = <HTMLInputElement>document.getElementById('bev');
    input.value = '';
  }
}

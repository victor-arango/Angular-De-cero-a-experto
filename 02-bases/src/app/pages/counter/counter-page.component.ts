import { Numeric } from './../../../../node_modules/zod/v4/core/util.d';
import { Component } from "@angular/core";



@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {
counter =15;

incrementBy( value: number){
  this.counter += value;
}

decrementBy( value: number){
  this.counter -= value;
}

resetCounter (){
  this.counter = 10;
}



}

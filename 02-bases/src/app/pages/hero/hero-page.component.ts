import { Component, signal } from "@angular/core";



@Component({
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent {
name = signal('Iron Man');
age = signal(45);

getHeroDescription(){
  return `${ this.name() } - ${ this.age() }`;
}

changeHero(){
   this.name.set('SpiderMan');
   this.age.set(22);
}

resetForm(){
    this.name.set('IronMan');
   this.age.set(45);
}


chageAge(){
  this.age.set(60);
}

}

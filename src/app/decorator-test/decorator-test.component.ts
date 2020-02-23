import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decorator-test',
  templateUrl: './decorator-test.component.html',
  styleUrls: ['./decorator-test.component.css']
})
export class DecoratorTestComponent implements OnInit {

  c : C;

  toppings =[];
  
  constructor() {

   this.c = new C();
   this.toppings = this.c.getToppings();
   }

  ngOnInit(): void {
  }
  onClick() {
    this.c.addTopping("hello");
    this.toppings = this.c.getToppings();
  }

}

function Emoji() {
  // tslint:disable-next-line: only-arrow-functions
  return function(target: Object, key: string | symbol) {

    let val = target[key];

    const getter = () => {
      return val;
    };

    const setter = (next: any) => {
      console.log('Console log updates setter');
      val = `test ${next} test`;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });

  };

}
function f() {
  console.log('f(): evaluated');
  return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log('f(): called');
  };

}

function g() {
  console.log('g(): evaluated');
  return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log('g(): called');
  };
}

function Confirmable(message: string) {

  return function(target: Object, key: string | symbol , descriptor: PropertyDescriptor) {
    const original = descriptor.value;

    descriptor.value = function(...args: any[]) {
          const allow = confirm(message);
          if (allow) {
            const result = original.apply(this, args);
            return result;
          } else {
            return null;
          }

      };

    return descriptor;

  };

}
class C {

  @Emoji()
  flavor = 'vanilla';

  toppings = [];

  @Confirmable('are you sure')
  addTopping(topping= 'sprinkles') {
    this.toppings.push(topping);
  }

  @f()
  @g()
  method() {}


  getFlavor() {
    return this.flavor;
  }

  getToppings() {
    return this.toppings;
  }

}

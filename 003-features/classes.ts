class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    //visible only to the class and its children
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class MyCar extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    // visible only to the class
    console.log('vroom2');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const myCar2 = new MyCar(4, 'red');
myCar2.startDrivingProcess();
console.log(myCar2.color);

import { faker } from '@faker-js/faker';
import { Mappable } from './Mappable';

export class User implements Mappable {
  // the "implements Mappable" part is not mandatory (the program works fine without it), the idea is just to clarify that user must implement the Mappable members
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: faker.address.latitude(),
      lng: faker.address.longitude(),
    };
  }

  markerContent(): string {
    return `
    <div>
      <h1>${this.name}</h1>
    </div>
    `;
  }
}

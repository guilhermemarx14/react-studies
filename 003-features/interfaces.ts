interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const myDrink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (reportable: Reportable): void => {
  console.log(`${reportable.summary()}`);
};

// we can send oldCivic without and error because it has the summary method that returns a string
printSummary(oldCivic);
printSummary(myDrink);

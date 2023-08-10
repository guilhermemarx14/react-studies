// using arrays
const carMakers = ['ford', 'toyota', 'chevy'];

const date = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// help with inference when extracting values
const myCar = carMakers.pop();

// prevent incompatible values
//carMakers.push(100); -- error

// Help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()]; // everything in the array must be a date or string
importantDates.push('2030-10-10');
importantDates.push(new Date());

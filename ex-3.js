
let orders = [
  {
    id: 1,
    customerName: "Brenn Hugk",
    productName: "Chocolate - Milk, Callets",
    productPrice: 94690,
    productQuantity: 35,
    creditCardType: "solo",
  },
  {
    id: 2,
    customerName: "Celia Dary",
    productName: "Bread - Pumpernickle, Rounds",
    productPrice: 10746,
    productQuantity: 87,
    creditCardType: "jcb",
  },
  {
    id: 3,
    customerName: "Toinette Blindermann",
    productName: "Bar - Granola Trail Mix Fruit Nut",
    productPrice: 94191,
    productQuantity: 31,
    creditCardType: "switch",
  },
  {
    id: 4,
    customerName: "Anjela Joannet",
    productName: "Cheese - Parmesan Cubes",
    productPrice: 5131,
    productQuantity: 96,
    creditCardType: "diners-club-carte-blanche",
  },
  {
    id: 5,
    customerName: "Kennith Bussons",
    productName: "Wine - White, Pinot Grigio",
    productPrice: 94432,
    productQuantity: 75,
    creditCardType: "jcb",
  },
];


let isArray = Array.isArray(orders); 
let creditCardTypeOfBlindermann;
let totalPurchaseOfJoannet;
let totalPurchaseOfDary;


let blindermannOrder = orders.find((order) => order.customerName === "Toinette Blindermann");
if (blindermannOrder) {
  creditCardTypeOfBlindermann = blindermannOrder.creditCardType;
}


let joannetOrders = orders.filter((order) => order.customerName === "Anjela Joannet");
totalPurchaseOfJoannet = joannetOrders.reduce((total, order) => total + order.productPrice * order.productQuantity, 0);


let daryOrders = orders.filter((order) => order.customerName === "Celia Dary");
totalPurchaseOfDary = daryOrders.reduce((total, order) => total + order.productPrice * order.productQuantity, 0);

console.log(isArray); 
console.log(creditCardTypeOfBlindermann); 
console.log(totalPurchaseOfJoannet); 
console.log(totalPurchaseOfDary); 

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

// Start coding here

// ให้ตรวจสอบ orders ว่าเป็น Array จริงๆ หรือไม่
console.log(Array.isArray(orders));

// แสดงผลลัพธ์ของจำนวนยอดซื้อสินค้าทั้งหมดของ Kennith Bussons ออกมาทางหน้าจอ
console.log(orders[4].productPrice * orders[4].productQuantity);

// แสดงผลลัพธ์ของจำนวนยอดซื้อสินค้ารวมทั้งหมดของ Anjela Joannet และ Celia Dary ออกมาทางหน้าจอ
console.log(
  orders[3].productPrice * orders[3].productQuantity +
    orders[1].productPrice * orders[1].productQuantity
);

// แสดงผลลัพธ์ของ creditCardType ของ Toinette Blindermann
console.log(orders[2].creditCardType);

// ให้ลบข้อมูล Order ของ Celia Dary
let firstOrders = orders.splice(0, 1);
let secondOrders = orders.splice(1);
let newOrders = firstOrders.concat(secondOrders);
console.log(newOrders);

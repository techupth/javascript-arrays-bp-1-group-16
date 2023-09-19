// Exercise #3: Array of Orders

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
let isArray = typeof orders === 'array';

let creditCardTypeOfBlindermann;
let totalPurchaseOfJoannet;
let totalPurchaseOfDary;

for (let i = 0; i < orders.length; i++) {
  if(orders[i]['customerName'] === 'Toinette Blindermann') {
    //console.log(i);
    creditCardTypeOfBlindermann = orders[i]['creditCardType'];
    orders[i]['creditCardType'] = 'visa';
    //console.log(orders[2]['creditCardType']);
    //break;
  } else if (orders[i]['customerName'] === 'Anjela Joannet'){
    totalPurchaseOfJoannet = orders[i]['productQuantity'];
  } else if (orders[i]['customerName'] === 'Celia Dary'){
    totalPurchaseOfDary = orders[i]['productPrice'] * orders[i]['productQuantity'];
  } else if (orders[i]['customerName'] === 'Brenn Hugk'){
    delete orders[i];
  }
}


console.log(`orders is array: ${isArray}`);
console.log(`Blindermann's credit card type: ${creditCardTypeOfBlindermann}`);
console.log(`Joannet's totalPurchaseQuantity: ${totalPurchaseOfJoannet}`);
console.log(`Dary's totalPurchaseAmount: ${totalPurchaseOfDary}`);
console.log(orders);


//ให้ Assign Value เข้าไปใน Variable ที่ชื่อว่า isArray โดยให้ Value เป็น Boolean ที่เกิดจากการตรวจสอบว่า Array orders เป็น Array จริงๆ หรือไม่
//ให้ Assign Value เข้าไปใน Variable ที่ชื่อว่า creditCardTypeOfBlindermann โดยให้ Value เป็น Value ที่มาจาก Key creditCardType ของลูกค้าชื่อ Toinette Blindermann
//ให้ Reassign ตัว Value ของ Key creditCardType ของลูกค้าชื่อ Toinette Blindermann ให้เป็น “visa"

//ให้ Assign ตัว Value เข้าไปใน Variable totalPurchaseOfJoannet โดยให้ Value เป็น Value ที่มาจาก Key productQuantity ของลูกค้าชื่อ Anjela Joannet
//ให้ Assign ตัว Value เข้าไปใน Variable totalPurchaseOfDary โดยให้ Value เกิดจากการคำนวนยอดซื้อสินค้ารวมของลูกค้าชื่อ Celia Dary 🕵🏼‍♀️  Hint: ยอดซื้อสินค้ารวมหมายถึง ราคาสินค้า x จำนวนสินค้า
//ให้ลบ Object ของลูกค้าชื่อ Brenn Hugk ที่อยู่ใน Array orders
//เมื่อลบ Object เสร็จแล้วให้ทำการแสดงผลค่าของ orders ออกมาดูทางหน้าจอด้วย console.log()

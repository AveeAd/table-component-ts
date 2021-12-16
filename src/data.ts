export interface TableHeader {
  [key:string]: string;
}

export interface TableData {
  id:number,
  product: string;
  price: number;
  quantity: number;
  total: number;
}

export const tableHeaders:TableHeader[] = [
  {id:"Product ID"},
  {product:'Product'},
  {price:'Price'},
  {quantity:'Quantity'},
  {total:'Total'},
]

export const tableData:TableData[] = [
  {
    id:1,
    product: 'Product 1',
    price: 10,
    quantity: 2,
    total: 20,
  },
  {
    id:2,
    product: 'Product 2',
    price: 20,
    quantity: 3,
    total: 60,
  },
  {
    id:3,
    product: 'Product 3',
    price: 30,
    quantity: 4,
    total: 120,
  },
  {
    id:4,
    product: 'Product 4',
    price: 40,
    quantity: 5,
    total: 200,
  },
  {
    id:5,
    product: 'Product 5',
    price: 50,
    quantity: 6,
    total: 300,
  },
  {
    id:6,
    product: 'Product 6',
    price: 60,
    quantity: 7,
    total: 420,
  },
  {
    id:7,
    product: 'Product 7',
    price: 70,
    quantity: 8,
    total: 540,
  },
  {
    id:8,
    product: 'Product 8',
    price: 80,
    quantity: 9,
    total: 660,
  },
  {
    id:9,
    product: 'Product 9',
    price: 90,
    quantity: 10,
    total: 780,
  },
  {
    id:10,
    product: 'Product 10',
    price: 100,
    quantity: 11,
    total: 900,
  }
]
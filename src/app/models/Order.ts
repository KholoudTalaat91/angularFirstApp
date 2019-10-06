export interface Order {
  OrderId: number;
  OrderDate: string;
  UserId: string;
  Products: Product[];
  PaymentType: string;
}
export interface Product {
  OrderId: number;
  Quantity: number
}
export type Size = "S" | "M" | "L" | "XL";
export type OrderStatus = "pending" | "paid" | "shipped" | "cancelled";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // in grosze (integer)
  category: string;
  images: string[];
  slug: string;
  created_at: string;
}

export interface Variant {
  id: string;
  product_id: string;
  size: Size;
  stock: number;
}

export interface OrderItem {
  product_id: string;
  variant_id: string;
  quantity: number;
  price: number; // in grosze
}

export interface Order {
  id: string;
  items: OrderItem[];
  total: number; // in grosze
  stripe_session_id: string | null;
  status: OrderStatus;
  email: string;
  created_at: string;
}

export interface Database {
  public: {
    Tables: {
      products: {
        Row: Product;
        Insert: Omit<Product, "id" | "created_at">;
        Update: Partial<Omit<Product, "id" | "created_at">>;
      };
      variants: {
        Row: Variant;
        Insert: Omit<Variant, "id">;
        Update: Partial<Omit<Variant, "id">>;
      };
      orders: {
        Row: Order;
        Insert: Omit<Order, "id" | "created_at">;
        Update: Partial<Omit<Order, "id" | "created_at">>;
      };
    };
  };
}

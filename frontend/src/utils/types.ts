export type CategoryProps = {
  slug: string;
  name: string;
  url: string;
};

export type CartItemProps = {
  id: string | number;
  quantity: number;
  title: string;
  totalPrice: number;
  price: number;
  thumbnail: string;
  brand: string;
};

export type CartStateProps = {
  items: CartItemProps[];
  totalQuantity: number;
  totalAmount: number;
};

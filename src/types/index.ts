export type Category = 'Silk' | 'Cotton' | 'Banarasi' | 'Kanjeevaram' | 'Chiffon' | 'Georgette';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: Category;
  colors: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
}

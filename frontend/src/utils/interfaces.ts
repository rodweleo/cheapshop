interface DimensionsProps {
  width: number;
  height: number;
  depth: number;
}

interface ReviewProps {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface MetaProps {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

interface ProductProps {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: DimensionsProps;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ReviewProps[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: MetaProps;
  images: string[];
  thumbnail: string;
  objectID?: string;
}




export type { ReviewProps, ProductProps };
interface Product {
  id: string;
  name: string;
  price_in_cents: number;
  image_url: string;
}

interface Data {
  allProducts: Product[];
}

interface ProductsFetchResponse {
  data: Data;
}

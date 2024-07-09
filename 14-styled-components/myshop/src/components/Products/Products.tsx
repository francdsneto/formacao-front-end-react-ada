import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import * as S from "./styles";

import axios from "axios";

export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const Products: React.FC = () => {
  const [products, setProducts] = useState([] as ProductType[]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("https://fakestoreapi.com/products");

      setProducts(response.data);
    })();
  }, []);

  return (
    <S.ProductsWrapper>
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            category={product.category}
            description={product.description}
            image={product.image}
            price={product.price}
            rating={product.rating}
          />
        );
      })}
    </S.ProductsWrapper>
  );
};

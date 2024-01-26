"use client"
import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "./product-card";
import styled from "styled-components";


const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    grid-gap: 32px;
    max-width: 100%;
    margin-top: 32px;
    justify-content: center;
`

export function ProductList() {
    const { data } = useProducts();


    return (
        <GridContainer>
            {data?.map((product: any) =>
                <ProductCard
                    key={product.id}
                    title={product.name}
                    price={product.price_in_cents}
                    image={product.image_url} id={product.id}                />
            )}
        </GridContainer>
    )
    
}
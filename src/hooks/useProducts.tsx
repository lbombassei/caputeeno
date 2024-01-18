"use client"
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { buildQuery} from "@/utils/graphQl-filters";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(
        API_URL, { query: query})
}

    

export function useProducts() {

    const { type, priority, search } = useFilter();
    const searchDeferred= useDeferredValue(search);
    const query = buildQuery(type, priority);
    const { data } = useQuery({
        queryKey: ['Products', type, priority, searchDeferred],
        queryFn: () => fetcher(query ),
    })
    const products = data?.data?.data?.allProducts
    const filteredProducts = products?.filter(product => product.name.toLowerCase().includes(searchDeferred.toLowerCase()))
    return { data: filteredProducts }
    
}
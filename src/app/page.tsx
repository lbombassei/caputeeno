"use client"
import { FilterBar } from "@/components/filters/filter-bar";
import main from './page.module.css';
import { ProductList } from "@/components/products/products-list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


export default function Home() {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>

    <main className={main.main}>
      <FilterBar />
      <ProductList />
    </main>
    </QueryClientProvider>
  )
}

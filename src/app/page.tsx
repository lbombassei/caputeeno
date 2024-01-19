"use client"
import { FilterBar } from "@/components/filters/filter-bar";
import main from './page.module.css';
import { ProductList } from "@/components/products/products-list";


export default function Home() {
  
  return (
    <main className={main.main}>
      <FilterBar />
      <ProductList />
    </main>
  )
}

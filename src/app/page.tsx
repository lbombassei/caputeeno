import { FilterBar } from "@/components/filter-bar";
import main from './page.module.css';


export default function Home() {
  return (
    <main className={main.main}>
        <FilterBar />
    </main>
  )
}

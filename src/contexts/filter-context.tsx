'use client'
import { FilterType } from "@/enum/filter-enum";
import { PriorityEnum } from "@/enum/priority-enum";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterType.ALL,
    priority: PriorityEnum.POPULARITY,
    setPriority: (value: PriorityEnum) => {}, 
    setSearch: (value: string) => {},
    setPage: (value: number) => {},
    setType: (value: FilterType) => {}
})

interface ProviderProps {
    children: ReactNode
}

export function FilterContextProvider({children}: ProviderProps) {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [type, setType] = useState(FilterType.ALL);
    const [priority, setPriority] = useState(PriorityEnum.POPULARITY);
    return (
        <FilterContext.Provider value={{ search, page, type,priority, setSearch, setPage, setType, setPriority }}>
            {children}
        </FilterContext.Provider>
    )
}
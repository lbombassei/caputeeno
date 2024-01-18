'use client'
import styled from "styled-components";
import { FilterByType } from "./filter-by-type";
import { FilterByPriority } from "./filter-by-priority";

interface FilterProps {

}
const FilterContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
    padding-top: 34px;
    justify-content: space-between;
`
export function FilterBar(props: FilterProps) {
    return (
        <FilterContainer>
            <FilterByType />
            <FilterByPriority />
        </FilterContainer>
    )
}
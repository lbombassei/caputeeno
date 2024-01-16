import styled from "styled-components"

interface FilterBytypeProps {

}

interface FilterItemProps {
    selected: boolean;
}

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    list-style: none;
`

const FilterItem = styled.li<FilterItemProps>`
    color: var(--text-dark);
    text-align: center;
    font-family: inherit;
    font-size: 16px;
    font-weight: ${props => props.selected ? '600' : '400'};
    line-height: 22px; 
    text-transform: uppercase;
    border-bottom: ${props => props.selected ? '4px solid var(--orange-low)' : ''};
    cursor: pointer;
`

export function FilterByType() {
    return (
        <FilterList>
            <FilterItem selected>Todos os Produtos</FilterItem>
            <FilterItem selected={false}>Camisetas</FilterItem>
            <FilterItem selected={false}>Canecas</FilterItem>
        </FilterList>
    )
}
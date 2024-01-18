import styled from "styled-components"
import { ArrowDownIcon } from "./arrow-down"
import { useState } from "react"
import { useFilter } from "@/hooks/useFilter"
import { PriorityEnum } from "@/enum/priority-enum"


const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button{
        border: none;
        background: transparent;
        font-family: inherit;
        cursor: pointer;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: var(--text-dark);
        display: flex;
        align-items: center;
        justify-content: center;
        svg{
            margin-left: 16px;
        }
    }
`

const PriorityFilter = styled.ul`
    position: absolute;
    width: 250px;
    border-radius: 4px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.10);
    padding: 12px 16px;
    list-style: none;
    top: 100%;
    z-index: 1;

    li{
        color: var(--text-dark);
        font-size: 14px;
        font-weight: 400;
        font-family: inherit;
        cursor: pointer;
    }

    li + li{
        margin-top: 4px;
    }
`

export function FilterByPriority() {

    const [isOpen, setIsOpen] = useState(false);

    const { setPriority } = useFilter()

    const handleOpen = () => {
        setIsOpen(prev => !prev);
    }

    const handleUpdatePriority = (value: PriorityEnum) => {
        setPriority(value);
        setIsOpen(false);
    }

    return (
        <FilterContainer>
            <button onClick={handleOpen}>Organizar por
            <ArrowDownIcon />
            </button>

            {isOpen &&
                <PriorityFilter>
                    <li onClick={() => handleUpdatePriority(PriorityEnum.NEWS)}>Novidades</li>
                    <li onClick={() => handleUpdatePriority(PriorityEnum.BIGGEST_PRICE)}>Preço: Maior - Menor</li>
                    <li onClick={() => handleUpdatePriority(PriorityEnum.MINOR_PRICE)}>Preço: Menor - Maior</li>
                    <li onClick={() => handleUpdatePriority(PriorityEnum.POPULARITY)}>Mais vendidos</li>
                </PriorityFilter>}
            
        </FilterContainer>
    )
}
import styled from "styled-components";
import { SearchIcon } from "../icons/serach-icon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
    width: 352px;
    border-radius: 8px;
    border: none;
    background-color: var(--bg-secundary);
    padding: 10px 16px;

    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark)
`
const InputContainer = styled.div`
    position: relative;
    width: 352px;
    
    svg{
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }

    `

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { 
    value: string;
    handleChange: (value: string) => void
}
export function PrimaryInputWSearchIcon(props: InputProps) {
    return (
        <InputContainer>
            <PrimaryInput onChange={(event) => props.handleChange(event.target.value)} {...props}></PrimaryInput>
            <SearchIcon/>
        </InputContainer>
    )
}
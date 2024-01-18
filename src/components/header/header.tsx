'use client'
import { styled } from 'styled-components';
import { Saira_Stencil_One } from 'next/font/google';
import { PrimaryInput, PrimaryInputWSearchIcon } from './primary-input';
import { CartControl } from './cart-control';
import { useFilter } from '@/hooks/useFilter';

interface HeaderProps {

}

const sairaStencilOne = Saira_Stencil_One({
    weight: [ '400'],
    subsets: ['latin']
  })

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px
    }
`

const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
`

export function Header(props: HeaderProps) {
    const {setSearch, search} = useFilter();
    return (
        <TagHeader>
            <Logo className={sairaStencilOne.className}> Caputeeno </Logo> 

            <div>
                <PrimaryInputWSearchIcon
                    value={search}
                    handleChange={setSearch}
                    placeholder='Procurando por algo específico?' />
                <CartControl/>
            </div>
        </TagHeader>
    )
}
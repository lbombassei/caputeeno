import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "../icons/cart-icon";
import styled from "styled-components";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    background-color: var(--delete-color);
    border-radius: 100%;
    padding: 0px 5px;
    font-size: 12px;
    color: white;
    margin-left: -10px
`
const Container = styled.div`
    position:relative;

`

export function CartControl() {
    const { value } = useLocalStorage('cart-items', [])




    return (
        <Container>
            <CartIcon />
            {value?.length > 0 && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}
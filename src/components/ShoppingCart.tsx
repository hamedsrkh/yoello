import React, {useRef, useCallback, useState} from 'react';
import styled, {css} from "styled-components";
import {useAppSelector} from "../store/hooks";
import {CartItem} from "./uiComponents/CartItem";


export const ShoppingCart = () => {
    const [openState, setOpenState] = useState<number>(0);
    const products = useAppSelector(state => state.cart.products)
    const calculateTotal = useCallback(
        () => {
            let total = 0;
            products.forEach(product => {
                total += (product.count * product.beer.abv)
            })
            return total
        }
        , [products]
    );

    return (
        <>
            {openState === 2 && <BackDrop/>}
            <Container open={openState}>
                <Pull onClick={() => setOpenState((prev) => prev != 2 ? prev + 1 : 0)}>Shopping Cart</Pull>
                <div className="px-5">
                    <Items>
                        {
                            products.map(product => <CartItem item={product}/>)
                        }
                    </Items>
                    {
                        products.length > 0 &&
                        <>
                            <Tips>
                                <p className="mb-2">Tips for Waiters</p>
                                <MultiButton className="multi-button">
                                    <button className="bg-amber-400">ZERO</button>
                                    <button className="bg-amber-400">ROUND UP</button>
                                    <button className="bg-amber-400">10%</button>
                                    <button className="bg-amber-400">CUSTOM</button>
                                </MultiButton>
                            </Tips>
                            <div className="flex justify-between items-center">
                                <span>subtotal</span>
                                <span>$10</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>tips</span>
                                <span>$2</span>
                            </div>
                            <div className="flex justify-between items-center text-white text-lg mt-5">
                                <span>total</span>
                                <span>${calculateTotal()}</span>
                            </div>
                            <div className="bg-amber-400 confirm">Confirm Payment</div>
                        </>
                    }
                </div>
            </Container>
        </>
    );
};


const MultiButton = styled.div`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  width: 100%;

  & button {
    position: relative;
    flex: 1 1 auto;
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  }

  & button:not(:first-child) {
    margin-left: 2px;
  }

  & button:first-child {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  & button:last-child {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }

`
const Items = styled.div`
  max-height: 230px;
  overflow-y: scroll;
`

const Tips = styled.div`
  margin-bottom: 30px;
`


const HalfOpen = css`
  transform: translateY(calc(100% - 80px));
`
const Open = css`
  transform: translateY(calc(100% - 500px));
`

const Container = styled.div<{ open: number }>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 50px;
  background-color: #212129;
  color: #9B9BA3;
  transform: translateY(100%);
  ${props => props.open === 1 && HalfOpen}
  ${props => props.open === 2 && Open}
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  width: 100%;
  height: 100vh;
  z-index: 21;
  cursor: pointer;
  transition: transform 400ms ease-in-out;
  padding-top: 50px;

  & .confirm {
    position: relative;
    flex: 1 1 auto;
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 1rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    width: 100%;
  }
`;

const Pull = styled.span`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: end;
  font-weight: bold;
  font-size: 11px;
  color: #aeaeae;
  height: 40px;
  text-align: center;
  width: 100%;

  &:after {
    content: "";
    position: absolute;
    width: 18px;
    height: 2px;
    background-color: #aeaeae;
    border-radius: 10px;
    left: calc(50% - 9px);
    top: 15px;
  }
`

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  backdrop-filter: blur(4px);
`
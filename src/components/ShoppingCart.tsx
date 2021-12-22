import React, {useRef, useCallback, useState} from 'react';
import styled, {css} from "styled-components";

export const ShoppingCart = () => {
    const [openState, setOpenState] = useState<number>(0);


    return (
        <>
            {openState === 2 && <BackDrop/>}
            <Container open={openState}>
                <Pull onClick={() => setOpenState((prev) => prev != 2 ? prev + 1 : 0)}>Shopping Cart</Pull>
            </Container>
        </>
    );
};


const HalfOpen = css`
  transform: translateY(calc(100% - 100px));
`
const Open = css`
  transform: translateY(calc(200px));
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
`;

const Pull = styled.span`
  position: absolute;
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
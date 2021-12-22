import React, {useState} from 'react';
import {faMugHot, faPercent, faSearch, faUtensils} from "@fortawesome/free-solid-svg-icons";
import {Nav} from "./Nav";
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import {Routes} from "../routes/Routes";

export const NavBar = () => {
    const icons = [faMugHot, faUtensils, faPercent, faSearch]
    const [nav, setNav] = useState(0);
    const navigate = useNavigate()

    return (
        <Container className="flex flex-row items-center relative cursor-pointer">
            {icons.map((icon, index) => {
                return <Nav key={index} onClick={() => {
                    setNav(index)
                    navigate(Routes[index].path)
                }} icon={icon}
                            active={nav === index}/>
            })
            }
            <OverlayContainer position={nav}>
                <OverLaySide side={"left"}/>
                <Overlay/>
                <OverLaySide side={"right"}/>
            </OverlayContainer>
        </Container>
    );
};
const Container = styled.div`
  height: 60px;
`

const Position = (position: number) => `translateX(${position}00%)`

const OverlayContainer = styled.div<{ position: number }>`
  position: absolute;
  left: 0;
  width: 25%;
  height: 100%;
  transform: ${props => props.position && Position(props.position)};
  transition: transform 600ms ease-in-out;
`
const Overlay = styled.span`
  position: absolute;
  border-radius: 15px 15px 0 0;
  background-color: #2F2E30;
  height: 100%;
  left: 10px;
  width: calc(100% - 20px);
`
const OverLaySide = styled.span<{ side: "left" | "right" }>`
  position: absolute;
  ${props => props.side === 'right' && "left: 0;"};
  ${props => props.side === 'left' && "right: 0;"};
  bottom: 0;
  height: 100%;
  background-color: #2F2E30;
  width: 10px;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #e74c3c;
    border-radius: ${props => props.side === 'left' ? "0 0 0 10px" : "0 0 10px 0"};
  }
`

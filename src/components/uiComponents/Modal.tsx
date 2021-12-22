import React, {useEffect} from 'react';
import styled from "styled-components";

interface PropTypes {
    onClose: () => void,
    show: boolean,
    children: any,
}

export const Modal: (props: PropTypes) => JSX.Element = (props) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, []);
    return (
        <ModalContainer className={props.show ? 'show' : ''}>
            <ModalBody>
                {props.children}
                <CloseButton onClick={props.onClose}>CLOSE</CloseButton>
            </ModalBody>
        </ModalContainer>
    );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 30;
  backdrop-filter: blur(4px);
  display: none;
  justify-content: center;
  align-items: center;
  &.show {
    display: flex;
  }
`;

const ModalBody = styled.div`
  position: relative;
  min-width: 300px;
  min-height: 300px;
  max-height: 500px;
  //overflow-y: auto;
  width: 80%;
  height: auto;
  background-color: #2F2E30;
  z-index: 31;
  border-radius: 15px;
  box-shadow: 10px 5px 10px rgba(0,0,0,0.6);
  color: #787678;
  padding: 30px;
  
  & p{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    max-height: 3.6em;
    line-height: 1.8em;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  background-color: #DD0000;
  color: #000;
  top: -33px;
  left: 2px;
  z-index: 32;
  padding: 3px 10px;
  border-radius: 10px;
  font-weight: bold;
`;
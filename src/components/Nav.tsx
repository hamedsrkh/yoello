import React, {HTMLProps} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styled, {css, keyframes} from "styled-components";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";

interface PropTypes {
    icon: IconDefinition,
    active: boolean
}

export const Nav: (props: PropTypes & React.HTMLAttributes<HTMLDivElement>) => JSX.Element = ({
                                                                                                  icon,
                                                                                                  active,
                                                                                                  ...containerProps
                                                                                              }) => {
    return (
        <Container className="basis-1/4 flex items-center justify-center"  {...containerProps}>
            <IconWrapper><FontAwesomeIcon size="lg" color='white' icon={icon}/></IconWrapper>
        </Container>
    );
};

const Container = styled.div`
  height: 100%;
`;

const IconWrapper = styled.span`
  z-index: 2;
`
import React from 'react';

export interface PropTypes {
    children: any,
}
export const Center : (props: PropTypes) => JSX.Element= (props) => {
    return (
        <div className="flex justify-center items-center">
            {props.children}
        </div>
    );
};



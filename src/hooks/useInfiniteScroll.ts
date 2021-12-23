import React, {useState, useEffect} from 'react';

type UseInfiniteScroll = (props: {
    callback: () => void
    offset: number
}) => [boolean, React.Dispatch<React.SetStateAction<boolean>>]

export const useInfiniteScroll: UseInfiniteScroll = ({callback, offset = 0}) => {
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        function handleScroll() {


            let left = window.innerHeight + document.documentElement.scrollTop
            let right = document.documentElement.offsetHeight + offset
            if (
                Math.abs(left - right) <= 20
                &&
                !isFetching
            ) {
                callback()
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isFetching]);

    return [isFetching, setIsFetching];
};

export default useInfiniteScroll;

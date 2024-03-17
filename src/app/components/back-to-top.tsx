"use client"

import { Box } from "@chakra-ui/react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const BackToTop = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const isScrolled = scrollTop > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <Box transition="background-color 0.5s ease-out, display 0.5s ease-out" position={'fixed'} bottom={'0'} right={'0'} bg={scrolled ? "black" : "white"} w={50} height={50} m={5} borderRadius={'full'} display={scrolled ? 'flex' : 'none'} justifyContent={'center'} alignContent={'center'} alignItems={'center'} alignSelf={'center'} cursor={'pointer'} onClick={scrollToTop} boxShadow={'xl'}>
            <FontAwesomeIcon icon={faArrowUp} size="xl" bounce={scrolled ? false : false} />
        </Box>
    );
};

export default BackToTop;

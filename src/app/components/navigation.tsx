"use client"

import { Box, Flex, Button, useMediaQuery } from '@chakra-ui/react';
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portofolio", href: "/portofolio" },
    { name: "Blog", href: "/blog" },
    { name: "Profile", href: "/profile" },
];

const Navbar = () => {
    const pathName = usePathname();
    const isActive = (href: string) => pathName === href;
    const [scrolled, setScrolled] = useState(false);
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

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

    return (
        <Box position="sticky" top="0" zIndex="999" transition="padding 0.5s ease-out" p={scrolled ? "0" : "5"}>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                padding="1.5rem"
                bg={scrolled ? "white" : "#262828"}
                color={scrolled ? "black" : "white"}
                borderRadius={scrolled ? "0" : "50"}
                boxShadow={5}
                position={'sticky'}
                top={'0'}
                zIndex={'999'}
            >
                <Flex gap={5}>
                    <Link href='#' target='_blank' title='Github'>
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </Link>
                    <Link href='#' target='_blank' title='LinkedIn'>
                        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                    </Link>
                    <Link href='#' target='_blank' title='Instagram'>
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </Link>
                </Flex>
                {isLargerThan768 ? (
                    <Flex align="center" gap={2.5}>
                        {navLinks.map((link, index) => (
                            <Link href={link.href} key={index} passHref>
                                <Button
                                    bg={scrolled ? (isActive(link.href) ? "black" : "transparent") : (isActive(link.href) ? "white" : "transparent")}
                                    color={scrolled ? (isActive(link.href) ? "white" : "black") : (isActive(link.href) ? "black" : "white")}
                                    borderRadius={50}
                                    size='sm'
                                    variant='solid'
                                    _hover={scrolled ? { bg: "black", color: "white" } : { bg: "white", color: "black" }}
                                    transition="background-color 0.5s ease-out, color 0.5s ease-out"
                                >
                                    {link.name}
                                </Button>
                            </Link>
                        ))}
                    </Flex>
                ) : (
                    <Flex align="center" justifyContent="flex-end" flex="1">
                        <Button color={scrolled ? "black" : "white"} borderRadius={50} size='sm' borderColor={scrolled ? "black" : "white"} variant='outline' _hover={scrolled ? { bg: "black", color: "white" } : { bg: "white", color: "black" }} borderWidth={2} transition="background-color 0.5s ease-out, border-color 0.5s ease-out">
                            Menu
                        </Button>
                    </Flex>
                )}
            </Flex>
        </Box>
    );
};

export default Navbar;

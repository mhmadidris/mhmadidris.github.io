"use client"

import { Box, Flex, Button, useMediaQuery, IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from '@/data/navigation-data';
import { socialMediaLinks } from '@/data/social.media-data';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

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
                transition="background-color 0.5s ease-out, color 0.5s ease-out, border-radius 0.5s ease-out"
                bg={scrolled ? "white" : "#262828"}
                color={scrolled ? "black" : "white"}
                borderRadius={scrolled ? "0" : "50"}
                boxShadow={'xl'}
                position={'sticky'}
                top={'0'}
                zIndex={'999'}
            >
                <Flex gap={5}>
                    {socialMediaLinks.map((index) => (
                        <Link href={index.href} target='_blank' title={index.title} key={index.href}>
                            <FontAwesomeIcon icon={index.icon} size="lg" />
                        </Link>
                    ))}
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
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label="Options"
                                icon={<FontAwesomeIcon icon={faBars} />}
                                colorScheme="transparent"
                                variant="ghost"
                                _hover={{ color: scrolled ? "black" : "white" }}
                                _active={{ color: scrolled ? "black" : "white" }}
                            />
                            <MenuList w={'100%'} m={5}>
                                {navLinks.map((link, index) => (
                                    <Link href={link.href} key={index} passHref>
                                        <MenuItem
                                            bg={isActive(link.href) ? "black" : "transparent"}
                                            color={isActive(link.href) ? "white" : "black"}
                                            _hover={{ bg: "black", color: "white" }}
                                        >
                                            {link.name}
                                        </MenuItem>
                                    </Link>
                                ))}
                            </MenuList>
                        </Menu>
                    </Flex>
                )}
            </Flex>
        </Box>
    );
};

export default Navbar;

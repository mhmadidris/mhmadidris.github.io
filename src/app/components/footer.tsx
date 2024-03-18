import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box px={5} py={2.5} bg={'#262828'} color={'white'}>
            <Text textAlign={'center'}>
                Muhammad Idris - Copyright All Rights Reserved &copy; {currentYear}
            </Text>
        </Box>
    );
};

export default Footer;
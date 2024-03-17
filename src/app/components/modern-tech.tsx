import { Box, Button, Divider, Flex, Heading } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { modernTechnologiesData } from "@/data/modern-technologies";

const ModernTechnology = () => {
    return (
        <Box mx={10} py={10}>
            <Flex flexDir={'column'} justifyContent={'center'} alignContent={'center'} alignItems={'center'}>
                <Heading as='h4' size='md' mb={2.5}>
                    MODERN TECHNOLOGIES
                </Heading>
                <Divider borderWidth="2.5px" w={'5rem'} borderRadius={10} />
            </Flex>
            <Flex mt={10} justifyContent={'center'} gap={2.5} wrap="wrap">
                {modernTechnologiesData.map((index) => (
                    <Box border={'2px solid white'} px={3.5} py={1.5} borderRadius="full" color={'white'} minWidth="fit-content"
                        maxWidth="fit-content" title={index.title}>
                        <Flex alignContent={'center'} alignItems={'center'} gap={1.5}>
                            <FontAwesomeIcon icon={index.icon} size="lg" />
                            <Heading as='h6' size='xs'>
                                {index.title}
                            </Heading>
                        </Flex>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default ModernTechnology;

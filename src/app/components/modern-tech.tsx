import { Box, Divider, Flex, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { modernTechnologiesData } from "@/data/modern-technologies";

const ModernTechnology = () => {
    return (
        <Box mx={[4, 10]} py={10}>
            <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'} mb={5}>
                <Heading as='h4' size={['sm', 'md']} mb={2.5}>
                    MODERN TECHNOLOGIES
                </Heading>
                <Divider borderWidth={['1px', '2.5px']} w={['3rem', '5rem']} borderRadius={10} />
            </Flex>
            <Wrap justifyContent={'center'} justifyItems={'center'} justify={'center'} alignContent={'center'} spacing={2}>
                {modernTechnologiesData.map((index, i) => (
                    <WrapItem key={i}>
                        <Box border={'2px solid white'} px={3.5} py={1.5} borderRadius="full" color={'white'} minWidth="fit-content" maxWidth="fit-content" title={index.title}>
                            <Flex alignContent={'center'} alignItems={'center'} gap={1.5}>
                                <FontAwesomeIcon icon={index.icon} size="lg" />
                                <Heading as='h6' size={['xs', 'sm']}>
                                    {index.title}
                                </Heading>
                            </Flex>
                        </Box>
                    </WrapItem>
                ))}
            </Wrap>
        </Box>
    );
};

export default ModernTechnology;

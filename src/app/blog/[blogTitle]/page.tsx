import { Box, Card, Flex, Heading, Img, Text } from "@chakra-ui/react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BlogDetailProps {
    params: {
        blogTitle: string;
    };
}

const BlogDetail: React.FC<BlogDetailProps> = ({ params }) => {
    return (
        <Box mx={{ base: 5, md: 10 }}>
            <Flex alignItems={'center'} gap={1.5} my={5}>
                <Heading as='h6' size='xs'>
                    Home
                </Heading>
                <FontAwesomeIcon icon={faChevronRight} size="xs" />
                <Heading as='h6' size='xs'>
                    Blog
                </Heading>
                <FontAwesomeIcon icon={faChevronRight} size="xs" />
                <Heading as='h6' size='xs'>
                    Ini Blog Pertama
                </Heading>
            </Flex>

            <Card p={5}>
                <Flex justifyContent={'space-between'} gap={5}>
                    <Box w={{ base: '100%', md: '70%' }}>
                        <Heading as='h3' size='lg'>
                            Prabowo-Gibran Menang di 36 Provinsi, Ganjar Bilang Begini
                        </Heading>
                        <Text my={2.5} fontSize={10}>
                            26 May 2024 20:19 AM
                        </Text>
                        <Img src="https://source.unsplash.com/random" title="" width={'100%'} height={'25rem'} objectFit={'cover'} />
                        <Text textAlign={'justify'} mt={2.5}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                        <Text textAlign={'justify'} mt={2.5}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                        <Text textAlign={'justify'} mt={2.5}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>

                        <Box mt={10}>
                            <Heading as='h5' size='sm' mb={2.5}>
                                TAGS
                            </Heading>
                            <Flex gap={1.5}>
                                <Box bg={'grey'} color="white" minWidth="fit-content" borderRadius={2.5} maxWidth="fit-content" p={1} fontSize={15}>
                                    Travel Enthusiast
                                </Box>
                                <Box bg={'grey'} color="white" minWidth="fit-content" borderRadius={2.5} maxWidth="fit-content" p={1} fontSize={15}>
                                    Tips & Tricks
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                    <Box display={{ base: 'none', md: 'block' }} w={{ base: '0%', md: '30%' }}>
                        <Heading as='h4' size='md' mb={2.5}>
                            Latest Blogs
                        </Heading>
                        <Flex flexDir={'column'} gap={2}>
                            <Flex gap={1.5}>
                                <Img src="https://source.unsplash.com/random/1" title="" width={'75px'} height={'75px'} objectFit={'cover'} />
                                <Box>
                                    <Heading as='h4' size='md'>
                                        (md) In love with React & Next
                                    </Heading>
                                    <Flex gap={1.5}>
                                        <Box bg={'grey'} color="white" minWidth="fit-content" borderRadius={2.5} maxWidth="fit-content" p={1} fontSize={7.5}>
                                            Travel
                                        </Box>
                                        <Box bg={'grey'} color="white" minWidth="fit-content" borderRadius={2.5} maxWidth="fit-content" p={1} fontSize={7.5}>
                                            Travel
                                        </Box>
                                    </Flex>
                                </Box>
                            </Flex>
                            <Flex gap={1.5}>
                                <Img src="https://source.unsplash.com/random/1" title="" width={'75px'} height={'75px'} objectFit={'cover'} />
                                <Box>
                                    <Heading as='h4' size='md'>
                                        (md) In love with React & Next
                                    </Heading>
                                    <Flex gap={1.5}>
                                        <Box bg={'grey'} color="white" minWidth="fit-content" borderRadius={2.5} maxWidth="fit-content" p={1} fontSize={7.5}>
                                            Travel
                                        </Box>
                                        <Box bg={'grey'} color="white" minWidth="fit-content" borderRadius={2.5} maxWidth="fit-content" p={1} fontSize={7.5}>
                                            Travel
                                        </Box>
                                    </Flex>
                                </Box>
                            </Flex>
                            <Flex gap={1.5}>
                                <Img src="https://source.unsplash.com/random/1" title="" width={'75px'} height={'75px'} objectFit={'cover'} />
                                <Box>
                                    <Heading as='h4' size='md'>
                                        (md) In love with React & Next
                                    </Heading>
                                    <Flex gap={1.5}>
                                        <Box bg={'grey'} color="white" minWidth="fit-content" borderRadius={2.5} maxWidth="fit-content" p={1} fontSize={7.5}>
                                            Travel
                                        </Box>
                                        <Box bg={'grey'} color="white" minWidth="fit-content" borderRadius={2.5} maxWidth="fit-content" p={1} fontSize={7.5}>
                                            Travel
                                        </Box>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
            </Card>
        </Box>
    );
};

export default BlogDetail;

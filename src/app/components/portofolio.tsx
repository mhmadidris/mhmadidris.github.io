import { Box, Button, Card, Divider, Flex, Grid, GridItem, Heading, Image, Link, Text } from "@chakra-ui/react";

const PortofolioWidget = () => {
    return (
        <Box py={10} bg={'white'}>
            <Box mx={10}>
                <Flex flexDir={'row'} justifyContent={'space-between'} alignContent={'center'} alignItems={'center'} color={'black'}>
                    <Heading as='h4' size='md'>
                        Portofolio
                    </Heading>
                    <Link href="#" textDecoration={'underline'} fontSize={15}>
                        View All
                    </Link>
                </Flex>
                <Flex gap={5} mt={5} alignContent={'space-between'} justifyContent={'center'} justifyItems={'center'}>
                    <Link href='#'>
                        <Card bg='#353839' h={'20rem'} borderRadius={10} boxShadow={5}>
                            <GridItem display='flex' flexDirection='column' justifyContent='center' alignItems='start'>
                                <Image
                                    borderTopRadius={10}
                                    width='100%'
                                    height='17.5rem'
                                    src='https://source.unsplash.com/random/1'
                                    alt='Picture'
                                    objectFit='cover'
                                />
                                <Heading as='h5' size='sm' color='white' m={2}>
                                    (sm) In love with React & Next
                                </Heading>
                            </GridItem>
                        </Card>
                    </Link>
                    <Link href='#'>
                        <Card bg='#353839' h={'20rem'} borderRadius={10} boxShadow={5}>
                            <GridItem display='flex' flexDirection='column' justifyContent='center' alignItems='start'>
                                <Image
                                    borderTopRadius={10}
                                    width='100%'
                                    height='17.5rem'
                                    src='https://source.unsplash.com/random/1'
                                    alt='Picture'
                                    objectFit='cover'
                                />
                                <Heading as='h5' size='sm' color='white' m={2}>
                                    (sm) In love with React & Next
                                </Heading>
                            </GridItem>
                        </Card>
                    </Link>
                    <Link href='#'>
                        <Card bg='#353839' h={'20rem'} borderRadius={10} boxShadow={5}>
                            <GridItem display='flex' flexDirection='column' justifyContent='center' alignItems='start'>
                                <Image
                                    borderTopRadius={10}
                                    width='100%'
                                    height='17.5rem'
                                    src='https://source.unsplash.com/random/1'
                                    alt='Picture'
                                    objectFit='cover'
                                />
                                <Heading as='h5' size='sm' color='white' m={2}>
                                    (sm) In love with React & Next
                                </Heading>
                            </GridItem>
                        </Card>
                    </Link>
                    <Link href='#'>
                        <Card bg='#353839' h={'20rem'} borderRadius={10} boxShadow={5}>
                            <GridItem display='flex' flexDirection='column' justifyContent='center' alignItems='start'>
                                <Image
                                    borderTopRadius={10}
                                    width='100%'
                                    height='17.5rem'
                                    src='https://source.unsplash.com/random/1'
                                    alt='Picture'
                                    objectFit='cover'
                                />
                                <Heading as='h5' size='sm' color='white' m={2}>
                                    (sm) In love with React & Next
                                </Heading>
                            </GridItem>
                        </Card>
                    </Link>
                    <Link href='#'>
                        <Card bg='#353839' h={'20rem'} borderRadius={10} boxShadow={5}>
                            <GridItem display='flex' flexDirection='column' justifyContent='center' alignItems='start'>
                                <Image
                                    borderTopRadius={10}
                                    width='100%'
                                    height='17.5rem'
                                    src='https://source.unsplash.com/random/1'
                                    alt='Picture'
                                    objectFit='cover'
                                />
                                <Heading as='h5' size='sm' color='white' m={2}>
                                    (sm) In love with React & Next
                                </Heading>
                            </GridItem>
                        </Card>
                    </Link>
                </Flex>
            </Box>
        </Box>
    );
};

export default PortofolioWidget;
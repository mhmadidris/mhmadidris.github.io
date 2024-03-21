import { Box, Button, Card, CardBody, Flex, GridItem, Heading, Image, Input, Select, SimpleGrid, Text, Wrap, WrapItem } from "@chakra-ui/react";
import BlogSlider from "../components/blog-slider";
import { portofolioData } from "@/data/portofolio-data";
import { blogData } from "@/data/blog-data";
import Link from 'next/link';

const Blog = () => {
    return (
        <Box mx={{ base: 5, md: 10 }}>
            <Input placeholder='Search Something...' bg={'white'} borderRadius={'full'} width={'100%'} color={'black'} />

            <SimpleGrid columns={[1, 2, 3, 4]} spacing={5} my={5}>
                {blogData.slice(0, 12).map((index, i) => (
                    <Link href={index.link} title={index.title} passHref>
                        <Card bg='#353839' h={'16.5rem'} borderRadius={10} boxShadow={5}>
                            <GridItem position="relative">
                                <Image
                                    borderTopRadius={10}
                                    width='100%'
                                    height='12.5rem'
                                    src={`${index.image}/${i + 1}`}
                                    alt='Picture'
                                    objectFit='cover'
                                />
                                <Box
                                    position="absolute"
                                    top={0}
                                    right={0}
                                    bg="rgba(0, 0, 0, 0.5)"
                                    color="white"
                                    px={2}
                                    py={1}
                                    borderRadius={10}
                                    fontSize="xs"
                                    fontWeight="bold"
                                    m={1.5}
                                >
                                    {index.category}
                                </Box>
                                <CardBody color={'white'}>
                                    <Heading as='h6' size='xs'>
                                        {`${index.title} ${i + 1}`}
                                    </Heading>
                                </CardBody>
                            </GridItem>
                        </Card>
                    </Link>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Blog;

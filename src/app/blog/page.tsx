import { Box, Button, Card, CardBody, Flex, GridItem, Heading, Image, Input, Link, Select, SimpleGrid, Text, Wrap, WrapItem } from "@chakra-ui/react";
import BlogSlider from "../components/blog-slider";
import { portofolioData } from "@/data/portofolio-data";
import { blogData } from "@/data/blog-data";

const Blog = () => {
    return (
        <Box mx={10}>
            <Flex flexDir={{ base: 'column-reverse', md: 'row' }} justifyContent={'space-between'} alignContent={'center'} alignItems={'center'} color={'black'} gap={2.5}>
                <Input placeholder='Search Something...' size='sm' bg={'white'} borderRadius={'full'} width={{ base: "100%", md: '85%' }} />
                <Select value='option1' size='sm' bg={'white'} borderRadius={'full'} width={{ base: "100%", md: '15%' }}>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
            </Flex>
            <SimpleGrid columns={[1, 2, 3, 4]} spacing={5} my={5}>
                {blogData.slice(0, 12).map((index, i) => (
                    <Link href={index.link} _hover={{ textDecoration: "none" }} title={index.title}>
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

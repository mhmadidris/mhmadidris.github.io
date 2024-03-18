import { modernTechnologiesData } from "@/data/modern-technologies";
import { portofolioData } from "@/data/portofolio-data";
import { Box, Button, Card, CardBody, Divider, Flex, Grid, GridItem, Heading, Image, Link, SimpleGrid, Text, Wrap, WrapItem } from "@chakra-ui/react";

interface PortofolioProps {
    isProfile: boolean;
}

const PortofolioWidget: React.FC<PortofolioProps> = ({ isProfile }) => {
    return (
        <Box mx={10}>
            <Flex display={isProfile ? 'flex' : 'none'} flexDir={'row'} justifyContent={'space-between'} alignContent={'center'} alignItems={'center'} color={'black'}>
                <Heading as='h4' size='md'>
                    Portofolio
                </Heading>
                <Link href="#" textDecoration={'underline'} fontSize={15}>
                    View All
                </Link>
            </Flex>
            <SimpleGrid columns={[1, 2, 3, 4]} spacing={5} mt={5}>
                {portofolioData.slice(0, isProfile ? 4 : 8).map((index, i) => (
                    <Link href={index.link} _hover={{ textDecoration: "none" }} title={index.title}>
                        <Card bg='#353839' h={'20rem'} borderRadius={10} boxShadow={5}>
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
                                    <Wrap spacing={2} mt={2.5}>
                                        {index.tags && index.tags.slice(0, 4).map((tag, tagIndex) => (
                                            <WrapItem key={tagIndex}>
                                                <Box bg="white" px={2.5} py={0.5} borderRadius="full" color="black" minWidth="fit-content" maxWidth="fit-content" title={tag} fontSize={10} textTransform="uppercase" fontWeight="bold">
                                                    #{tag}
                                                </Box>
                                            </WrapItem>
                                        ))}
                                        {index.tags && index.tags.length > 4 && (
                                            <WrapItem>
                                                <Box bg="white" px={2.5} py={0.5} borderRadius="full" color="black" minWidth="fit-content" maxWidth="fit-content" title={index.tags.slice(4).join(', ')} fontSize={10} fontWeight="bold">
                                                    {index.tags.length - 4}+ more tags
                                                </Box>
                                            </WrapItem>
                                        )}
                                    </Wrap>

                                </CardBody>
                            </GridItem>
                        </Card>
                    </Link>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default PortofolioWidget;
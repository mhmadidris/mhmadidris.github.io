import { Box, Text, Flex, Heading, Button, Divider, Link, Center } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Satisfy } from "next/font/google";
import ModernTechnology from "../components/modern-tech";
import PortofolioWidget from "../components/portofolio";
import { socialMediaLinks } from "@/data/social.media-data";

const satisfy = Satisfy({ weight: ["400"], subsets: ["latin"] });

const Profile = () => {
    return (
        <>
            <Flex
                align="center"
                justify="center"
                bg={`url('/images/bg-profile.svg')`}
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundPosition="center"
                minHeight="78.5vh"
                color={'white'}
                flexDir={'column'}
                pb={'10rem'}
            >
                <Box w={{ base: '90%', sm: '80%', md: '70%', lg: '50%' }}>
                    <Heading textAlign={'center'} as='h2' size='xl' fontFamily={satisfy.style.fontFamily}>
                        Hello Everyone
                    </Heading>
                    <Text textAlign={'center'} my={5}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae a, totam aut quod voluptas assumenda eligendi voluptatem voluptatum libero perspiciatis nesciunt quae aspernatur.
                    </Text>
                    <Flex flexDir={{ base: 'column-reverse', md: 'row' }} justifyContent={'center'} alignContent={'center'} alignItems={'center'} gap={2}>
                        <Button size={{ base: "sm", md: "md" }} borderRadius="full" bg={'white'}>
                            Download CV
                        </Button>
                        <Center display={{ base: 'none', md: 'block' }} height='25px'>
                            <Divider orientation='vertical' />
                        </Center>
                        <Flex mb={{ base: '2.5', md: '0' }} gap={5}>
                            {socialMediaLinks.map((index) => (
                                <Link href={index.href} target='_blank' title={index.title}>
                                    <FontAwesomeIcon icon={index.icon} size="xl" />
                                </Link>
                            ))}
                        </Flex>
                    </Flex>
                </Box>
            </Flex>

            <ModernTechnology />

            <Box py={10} bg={'white'}>
                <PortofolioWidget isProfile={true} />
            </Box>
        </>
    );
};

export default Profile;

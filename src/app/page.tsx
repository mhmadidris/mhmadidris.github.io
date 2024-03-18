import { socialMediaLinks } from '@/data/social.media-data';
import { Box, Heading, Text, Button, Flex, Image, Card, Grid, GridItem, Center, Divider } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";
import BlogSlider from './components/blog-slider';
import PortofolioWidget from './components/portofolio';

const Home = () => {
  return (
    <>
      <Box>
        <Flex
          h="75vh"
          justifyContent={{ base: "center", md: "space-around" }}
          alignContent="center"
          alignItems="center"
          justify="center"
          bg={`url('/images/bg-home.svg')`}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundPosition="center"
          direction={{ base: "column-reverse", md: "row" }}
          pb={{ base: 10, md: 0 }}
        >
          <Flex direction="column" textAlign={{ base: 'center', md: 'left' }} alignItems={{ base: 'center', md: 'flex-start' }}>
            <Heading as="h2" size="xl">
              Hello
            </Heading>
            <Heading size={{ base: 'lg', md: '2xl' }}>
              I'm Muhammad Idris
            </Heading>
            <Text mt={2.5}>Programmer | Travel Enthusiast</Text>
          </Flex>
          <Image
            borderRadius="full"
            boxSize={{ base: 200, md: 250 }}
            src="https://bit.ly/dan-abramov"
            alt="Profile Picture"
            boxShadow="md"
            my={{ base: 5, md: 0 }}
          />
        </Flex>

        <Box borderRadius={5} p={5} boxShadow={10} my={5}>
          <Flex flexDir={'column'} justifyContent={'center'} alignContent={'center'} alignItems={'center'}>
            <Heading as='h4' size='md' mb={2.5}>
              OVERVIEW
            </Heading>
            <Divider borderWidth="2.5px" w={'5rem'} borderRadius={10} />
          </Flex>
          <Flex mt={5} direction={{ base: "column-reverse", md: "row" }} justifyContent="space-between" alignContent="center" alignItems="center">
            <Box flex="1" mt={{ base: "5", md: "0" }}>
              <Heading as='h3' size='lg' mb={2.5} textAlign={{ base: "center", md: "start" }}>
                Who I'm?
              </Heading>
              <Text mb={5} textAlign={{ base: "center", md: "start" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, totam natus enim inventore ut dignissimos provident sapiente nemo animi, laboriosam illo iure voluptates accusantium? Necessitatibus libero quo provident odio rem?
              </Text>
              <Flex justifyContent={{ base: "center", md: "start" }} alignItems={{ base: "center", md: "start" }}>
                <Link href="/profile">
                  <Button size={'sm'}>
                    See Profile
                  </Button>
                </Link>
              </Flex>
            </Box>
            <Box flex="1">
              <Center>
                <Image src='/images/overview-img.png' alt='Overview Picture' objectFit='cover' w={460} />
              </Center>
            </Box>
          </Flex>
        </Box>

        <Box borderRadius={5} p={5} boxShadow={10} my={5}>
          <Flex flexDir={'column'} justifyContent={'center'} alignContent={'center'} alignItems={'center'}>
            <Heading as='h4' size='md' mb={2.5}>
              PORTOFOLIO
            </Heading>
            <Divider borderWidth="2.5px" w={'5rem'} borderRadius={10} />
          </Flex>

          <PortofolioWidget isProfile={false} />
        </Box>
      </Box>

      <Box bg={'white'} color={'black'} p={5} boxShadow={10} my={5} h={150}>
        <Flex flexDir={{ base: "column", md: "row" }} justifyContent={{ base: 'center', md: 'space-between' }} alignContent={'center'} alignSelf={'center'} alignItems={'center'} px={25} h={"100%"}>
          <Heading size={{ base: 'md', md: 'lg' }} textAlign={'center'} m={0}>
            Find Me on Social Networks
          </Heading>
          <Flex mt={5} gap={5}>
            {socialMediaLinks.map((index) => (
              <Link href={index.href} target='_blank' title={index.title}>
                <FontAwesomeIcon icon={index.icon} size="2xl" />
              </Link>
            ))}
          </Flex>
        </Flex>
      </Box>

      <Box mx={10}>
        <Box bg={'#414a4c'} borderRadius={5} p={5} boxShadow={10} my={5}>
          <Flex alignContent={'center'} justifyContent={'space-between'} alignItems={'center'} alignSelf={'center'}>
            <Heading as='h4' size='md'>
              BLOG
            </Heading>
            <Link href='/blog'>
              <Button borderRadius={25} size={'sm'}>see all</Button>
            </Link>
          </Flex>

          <BlogSlider />
        </Box>
      </Box>
    </>
  );
};

export default Home;

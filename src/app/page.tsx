import { Box, Heading, Text, Button, Container, Flex, Image, Card, Grid, GridItem, Center, Divider } from '@chakra-ui/react';
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Box mx={10}>
        <Flex h={'75vh'} justifyContent='space-around' alignContent='center' alignItems='center'>
          <Flex direction={'column'}>
            <Heading as='h2' size='xl'>
              Hello,
            </Heading>
            <Heading as='h2' size='2xl'>
              I'm Muhammad Idris
            </Heading>
            <Text mt={2.5}>
              Fullstack Developer | Travel Enthusiast
            </Text>
          </Flex>
          <Image
            borderRadius='full'
            boxSize={250}
            src='https://bit.ly/dan-abramov'
            alt='Profile Picture'
            boxShadow={5}
          />
        </Flex>

        <Box borderRadius={5} p={5} boxShadow={10} my={5}>
          <Flex flexDir={'column'} justifyContent={'center'} alignContent={'center'} alignItems={'center'}>
            <Heading as='h4' size='md' mb={2.5}>
              OVERVIEW
            </Heading>
            <Divider borderWidth="2.5px" w={'5rem'} borderRadius={10} />
          </Flex>
          <Flex mt={5} justifyContent="space-between" alignContent="center" alignItems="center">
            <Box flex="1">
              <Heading as='h3' size='lg' mb={2.5}>
                Who I'm?
              </Heading>
              <Text mb={5}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, totam natus enim inventore ut dignissimos provident sapiente nemo animi, laboriosam illo iure voluptates accusantium? Necessitatibus libero quo provident odio rem?
              </Text>
              <Link href="#">
                <Button size={'sm'}>
                  See Portofolio
                </Button>
              </Link>
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
          <Grid templateColumns='repeat(3, 1fr)' gap={5} mt={5} alignContent={'center'} justifyContent={'center'} justifyItems={'center'}>
            <Link href='#'>
              <Card w='20rem' bg='#353839' h={'20rem'} borderRadius={10} boxShadow={5}>
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
              <Card w='20rem' bg='#353839' h={'20rem'} borderRadius={10} boxShadow={5}>
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
              <Card w='20rem' bg='#353839' h={'20rem'} borderRadius={10} boxShadow={5}>
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
              <Card w='20rem' bg='#353839' h={'20rem'} borderRadius={10} boxShadow={5}>
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
              <Card w='20rem' bg='#353839' h={'20rem'} borderRadius={10} boxShadow={5}>
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
              <Card w='20rem' bg='#353839' h={'20rem'} borderRadius={10} boxShadow={5}>
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
          </Grid>
        </Box>
      </Box>

      <Box bg={'rgba(255, 255, 255, 0.75)'} color={'black'} p={5} boxShadow={10} my={5} h={150}>
        <Flex flexDir={'row'} justifyContent={'space-between'} alignContent={'center'} alignSelf={'center'} alignItems={'center'} px={25} h={"100%"}>
          <Heading as='h3' size='lg' textAlign={'center'} m={0}>
            Find Me on Social Networks
          </Heading>
          <Flex mt={5} gap={5}>
            <Link href='#' target='_blank' title='Github'>
              <FontAwesomeIcon icon={faGithub} size="2xl" />
            </Link>
            <Link href='#' target='_blank' title='LinkedIn'>
              <FontAwesomeIcon icon={faLinkedinIn} size="2xl" />
            </Link>
            <Link href='#' target='_blank' title='Instagram'>
              <FontAwesomeIcon icon={faInstagram} size="2xl" />
            </Link>
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
          <Grid templateColumns='repeat(4, 1fr)' gap={5} mt={5} alignContent={'center'} justifyContent={'center'} justifyItems={'center'}>
            <Link href='#'>
              <Card w='16rem' bg='#0e1111' h={'16rem'} borderRadius={10} boxShadow={5} p={2.5}>
                <GridItem display='flex' flexDirection='column' justifyContent='center' alignItems='start'>
                  <Image
                    borderRadius={2.5}
                    width='100%'
                    height='10rem'
                    src='https://source.unsplash.com/random/1'
                    alt='Picture'
                    objectFit='cover'
                  />
                  <Heading as='h4' size='md' my={2.5} color='white'>
                    (md) In love with React & Next
                  </Heading>
                </GridItem>
              </Card>
            </Link>
            <Link href='#'>
              <Card w='16rem' bg='#0e1111' h={'16rem'} borderRadius={10} boxShadow={5} p={2.5}>
                <GridItem display='flex' flexDirection='column' justifyContent='center' alignItems='start'>
                  <Image
                    borderRadius={2.5}
                    width='100%'
                    height='10rem'
                    src='https://source.unsplash.com/random/2'
                    alt='Picture'
                    objectFit='cover'
                  />
                  <Heading as='h4' size='md' my={2.5} color='white'>
                    (md) In love with React & Next
                  </Heading>
                </GridItem>
              </Card>
            </Link>
            <Link href='#'>
              <Card w='16rem' bg='#0e1111' h={'16rem'} borderRadius={10} boxShadow={5} p={2.5}>
                <GridItem display='flex' flexDirection='column' justifyContent='center' alignItems='start'>
                  <Image
                    borderRadius={2.5}
                    width='100%'
                    height='10rem'
                    src='https://source.unsplash.com/random/3'
                    alt='Picture'
                    objectFit='cover'
                  />
                  <Heading as='h4' size='md' my={2.5} color='white'>
                    (md) In love with React & Next
                  </Heading>
                </GridItem>
              </Card>
            </Link>
            <Link href='#'>
              <Card w='16rem' bg='#0e1111' h={'16rem'} borderRadius={10} boxShadow={5} p={2.5}>
                <GridItem display='flex' flexDirection='column' justifyContent='center' alignItems='start'>
                  <Image
                    borderRadius={2.5}
                    width='100%'
                    height='10rem'
                    src='https://source.unsplash.com/random/3'
                    alt='Picture'
                    objectFit='cover'
                  />
                  <Heading as='h4' size='md' my={2.5} color='white'>
                    (md) In love with React & Next
                  </Heading>
                </GridItem>
              </Card>
            </Link>
            {/* <Link href='/blog' color='white'>
    <Card w='16rem' bg='#0e1111' h={'16rem'} borderRadius={10} boxShadow={5} p={2.5} flexDir={'column'} justifyContent={'center'} alignContent={'center'} alignItems={'center'} color={'white'}>
      <Heading as='h4' size='md' mb={2.5}>
        see all
      </Heading>
      <FontAwesomeIcon icon={faCircleChevronRight} size='4x' />
    </Card>
  </Link> */}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Home;

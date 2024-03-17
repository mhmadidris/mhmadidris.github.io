"use client"

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt, faGitAlt, faHtml5, faJava, faJs, faLaravel, faPhp, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase, faMobile, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";

const carouselSlider = [
    { icon: faHtml5, title: "HTML" },
    { icon: faCss3Alt, title: "CSS" },
    { icon: faLaravel, title: "Laravel" },
    { icon: faJs, title: "Javascript" },
    { icon: faPhp, title: "PHP" },
    { icon: faJava, title: "Java" },
    { icon: faDatabase, title: "MySQL" },
    { icon: faPython, title: "Python" },
    { icon: faReact, title: "React" },
    { icon: faGitAlt, title: "Git" },
    { icon: faMobileScreenButton, title: "Mobile Development" },
    { icon: faCode, title: "Web Development" },
];

const InfiniteSlider = () => {
    const settings = {
        navigator: true,
        dots: true,
        infinite: true,
        slidesToShow: carouselSlider.length / 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 0,
        cssEase: "linear",
    };

    return (
        <Box>
            <Slider {...settings}>
                {carouselSlider.map((index) => (
                    <Box>
                        <Flex alignContent={'center'} alignItems={'center'} gap={1.5}>
                            <FontAwesomeIcon icon={index.icon} size="xl" />
                            <Heading as='h4' size='md'>
                                {index.title}
                            </Heading>
                        </Flex>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default InfiniteSlider;

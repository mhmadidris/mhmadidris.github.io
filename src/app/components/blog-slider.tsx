"use client"

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Card, CardBody, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import '../style.css';
import { blogData } from "@/data/blog-data";
import Link from 'next/link';

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "yellow" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "blue" }}
            onClick={onClick}
        />
    );
}

function BlogSlider() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Box className="slider-container" mt={5}>
            <Slider {...settings}>
                {blogData.slice(0, 6).map((index, i) => (
                    <Box px={1.5}>
                        <Link href={index.link} passHref>
                            <Card bg='#0e1111' borderRadius={10} boxShadow={5}>
                                <Image
                                    borderTopRadius={10}
                                    width='100%'
                                    height='12.5rem'
                                    src={`${index.image}/${i + 1}`}
                                    alt='Picture'
                                    objectFit='cover'
                                />
                                <CardBody color={'white'}>
                                    <Heading as='h6' size='xs'>
                                        {`${index.title} ${i + 1}`}
                                    </Heading>
                                    <Text className="no-underline" textTransform={'uppercase'} fontSize={12.5} mt={2.5}>
                                        {index.category}
                                    </Text>
                                </CardBody>
                            </Card>
                        </Link>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default BlogSlider;

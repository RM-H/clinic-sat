import React, {useEffect, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import {Navigation, Pagination, Autoplay} from 'swiper/modules';

import Grid from '@mui/material/Unstable_Grid2'
import {Typography, Button} from '@mui/material'

import {BlogCard, Spinner} from '../index.js'


import {getSplash} from '../../Services/services.js'

const LandingBlogSlider = () => {


    const [data, setData] = useState(false)

    const getData = async () => {
        const response = await getSplash()
        if (response) {
            setData(response.data.blogs)


        } else {
            alert('مشکل در ارتباط با سرور')
        }
    }


    useEffect(() => {

        getData()
    }, []);

    let content

    if (data !== false) {
        content =
            data.map((i) => {
                return (
                    <>

                        <SwiperSlide key={i.id}>
                            <Grid key={i.id} container sx={{px: 4}}>


                                <Grid key={i.id} xs={12} sx={{py: 3,}}>
                                    <BlogCard hide={i.hide} key={i.id} img={i.img} title={i.title} date={i.date_text} id={i.id}
                                              text={i.txt}/>
                                </Grid>


                            </Grid>
                        </SwiperSlide>
                    </>
                )
            })
    } else {
        content = <Spinner/>
    }


    return (
        <>

            <Grid container className='pad ' sx={{
                py: 6,
                backgroundImage: `url("/assets/images/wave.svg")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>


                <Grid xs={12} sx={{display: 'flex', flexDirection: 'row', height: '33%', alignItems: 'center', mt: 8}}>


                    <img src="/assets/images/knbowledge.png" alt=""/>
                    <Typography className='yekan clronetext' variant='h4' component='h4'>
                        درباره آلرژی بیشتر بدانید ...

                    </Typography>
                    <Button className='yekan' variant="contained" sx={{mr: 'auto'}}>مشاهده بیشتر</Button>

                </Grid>

                <Swiper
                    spaceBetween={50}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    breakpoints={
                        {
                            200: {
                                slidesPerView: 1
                            },
                            900: {
                                slidesPerView: 2
                            },

                            1024: {
                                slidesPerView: 3
                            }
                        }
                    }


                    speed={1618}
                    loop={true}
                    navigation={true}
                    // pagination={{
                    //
                    //     bulletActiveClass:'bulletbg',
                    //
                    //
                    //
                    //
                    //
                    // }}
                    modules={[Navigation, Pagination, Autoplay]}
                    style={{height: '100%', width: '100%'}}

                >

                    {
                        content
                    }


                </Swiper>

            </Grid>


        </>
    )
}

export default LandingBlogSlider;
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
import {Typography, Divider} from '@mui/material'

const LandingSlider = () => {
    return (
        <>

            <Grid container className='pad clrthree ' sx={{py: 5 }}>


                <Grid xs={12} sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '33%',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    <img src="/assets/images/quote-blue.png" alt=""/>
                    <Typography className='yekan clronetext' variant='h4' component='h4' sx={{mx: 2}}>
                        نظرات برخی از مراجعین

                    </Typography>
                    <img src="/assets/images/quote-blue.png" alt=""/>
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
                            1024: {
                                slidesPerView: 1
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

                    <SwiperSlide>
                        <Grid container sx={{px: 5}}>


                            <Grid xs={4} sx={{py: 3, px: 4}}>
                                <div className='width100 yekan  borderrad1 clrseven shadowone borderrad1 '
                                     style={{padding: '1rem'}}>
                                    <Typography className='yekan' sx={{my: 2}} variant='subtitle1' component='p'>
                                        آقای فلانی
                                        <img src="/assets/images/person.png" style={{float: 'left'}} alt=""/>


                                    </Typography>
                                    <Typography className='yekan' sx={{my: 2}} variant='body2' component='q'>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                        گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                                        برای شرایط فعلی تکنولوژی مورد نیاز
                                    </Typography>

                                </div>
                            </Grid>

                            <Grid xs={4} sx={{py: 3, px: 4}}>
                                <div className='width100 yekan clrseven shadowone borderrad1' style={{padding: '1rem'}}>
                                    <Typography className='yekan' sx={{my: 2}} variant='subtitle1' component='p'>
                                        خانوم فلانی
                                        <img src="/assets/images/person.png" style={{float: 'left'}} alt=""/>

                                    </Typography>
                                    <Typography className='yekan' sx={{my: 2}} variant='body2' component='q'>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                        گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                                        برای شرایط فعلی تکنولوژی مورد نیاز
                                    </Typography>

                                </div>
                            </Grid>
                            <Grid xs={4} sx={{py: 3, px: 4}}>
                                <div className='width100 yekan clrseven shadowone borderrad1' style={{padding: '1rem'}}>
                                    <Typography className='yekan' sx={{my: 2}} variant='subtitle1' component='p'>
                                        خانوم فلانی
                                        <img src="/assets/images/person.png" style={{float: 'left'}} alt=""/>

                                    </Typography>
                                    <Typography className='yekan' sx={{my: 2}} variant='body2' component='q'>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                        گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                                        برای شرایط فعلی تکنولوژی مورد نیاز
                                    </Typography>

                                </div>
                            </Grid>


                        </Grid>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Grid container sx={{px: 5}}>


                            <Grid xs={4} sx={{py: 3, px: 4}}>
                                <div className='width100 yekan  borderrad1 clrseven shadowone borderrad1 '
                                     style={{padding: '1rem'}}>
                                    <Typography className='yekan' sx={{my: 2}} variant='subtitle1' component='p'>
                                        آقای فلانی
                                        <img src="/assets/images/person.png" style={{float: 'left'}} alt=""/>


                                    </Typography>
                                    <Typography className='yekan' sx={{my: 2}} variant='body2' component='q'>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                        گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                                        برای شرایط فعلی تکنولوژی مورد نیاز
                                    </Typography>

                                </div>
                            </Grid>

                            <Grid xs={4} sx={{py: 3, px: 4}}>
                                <div className='width100 yekan clrseven shadowone borderrad1' style={{padding: '1rem'}}>
                                    <Typography className='yekan' sx={{my: 2}} variant='subtitle1' component='p'>
                                        خانوم فلانی
                                        <img src="/assets/images/person.png" style={{float: 'left'}} alt=""/>

                                    </Typography>
                                    <Typography className='yekan' sx={{my: 2}} variant='body2' component='q'>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                        گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                                        برای شرایط فعلی تکنولوژی مورد نیاز
                                    </Typography>

                                </div>
                            </Grid>
                            <Grid xs={4} sx={{py: 3, px: 4}}>
                                <div className='width100 yekan clrseven shadowone borderrad1' style={{padding: '1rem'}}>
                                    <Typography className='yekan' sx={{my: 2}} variant='subtitle1' component='p'>
                                        خانوم فلانی
                                        <img src="/assets/images/person.png" style={{float: 'left'}} alt=""/>

                                    </Typography>
                                    <Typography className='yekan' sx={{my: 2}} variant='body2' component='q'>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                        گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                                        برای شرایط فعلی تکنولوژی مورد نیاز
                                    </Typography>

                                </div>
                            </Grid>


                        </Grid>
                    </SwiperSlide>




                </Swiper>

            </Grid>


        </>
    )
}
export default LandingSlider;
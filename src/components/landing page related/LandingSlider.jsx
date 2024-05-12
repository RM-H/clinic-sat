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

            <Grid container className='pad clrthree ' sx={{py: 5}}>


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
                    // autoplay={{
                    //     delay: 5000,
                    //     disableOnInteraction: false,
                    //     pauseOnMouseEnter: true
                    // }}
                    breakpoints={
                        {
                            200: {
                                slidesPerView: 1
                            },
                            900: {
                                slidesPerView: 2
                            } , 
                            1200: {
                                slidesPerView: 3
                            }
                        }
                    }


                    speed={1618}
                    loop={true}
                    navigation={true}

                    modules={[Navigation, Pagination, Autoplay]}
                    style={{height: '100%', width: '100%'}}

                >

                    <SwiperSlide>
                        <Grid container sx={{px: 5}}>
                            <Grid xs={12} sx={{py: 3 }}>
                                <div className='width100 yekan  borderrad1 clrseven shadowone borderrad1 '
                                     style={{padding: '1rem' , height:'100%'}}>
                                    <Typography className='yekan' sx={{my: 2}} variant='subtitle1' component='p'>
                                        مصطفی کهربا :
                                        <img src="/assets/images/person.png" style={{float: 'left'}} alt=""/>


                                    </Typography>
                                    <Typography color="text.secondary" className='yekan'
                                                sx={{my: 2, fontStyle: 'italic'}} variant='caption' component='q'>
                                        من برای تست آلرژی IgE توی شهر ارومیه هیچ آزمایشگاه تخصصی ای رو نتونستم پیدا کنم
                                        ولی کلینیک تخصصی ستارزاده تو این شهر مثل معجزه میمونه. تست آلرژی من رو انجام
                                        دادن و جواب رو در سریع ترین زمان به دستم رسوندن.
                                        دکتر فقط خودت. بقیه اداتو در میارن
                                    </Typography>

                                </div>
                            </Grid>
                        </Grid>

                    </SwiperSlide>


                    <SwiperSlide>
                        <Grid container sx={{px: 5}}>
                            <Grid xs={12} sx={{py: 3 }}>
                                <div className='width100 yekan clrseven shadowone borderrad1' style={{padding: '1rem', height:'100%'}}>
                                    <Typography className='yekan' sx={{my: 2}} variant='subtitle1' component='p'>
                                        سایناز جعفری :
                                        <img src="/assets/images/person.png" style={{float: 'left'}} alt=""/>

                                    </Typography>
                                    <Typography color="text.secondary" className='yekan'
                                                sx={{my: 2, fontStyle: 'italic'}} variant='caption' component='q'>
                                        من از اشنویه اومدم کلینیک تخصصی ستارزاده با تکمیل تمامی شاخه های مورد نیاز در
                                        حوزه خودش مثل آزمایشگاه، دندانپزشکی، داروخانه و… مراجعین رو از دغدغه این موارد
                                        دور میکنه و من دون اینکه با مشکل ترافیک شهری برخورد کنم تونستم خیلی راحت به
                                        آزمایشگاه، داروخانه و… دسترسی پیدا کنم.
                                    </Typography>

                                </div>
                            </Grid>
                        </Grid>
                    </SwiperSlide>


                    <SwiperSlide>
                        <Grid container sx={{px: 5}}>


                            <Grid xs={12} sx={{py: 3}}>
                                <div className='width100 yekan clrseven shadowone borderrad1' style={{padding: '1rem', height:'100%'}}>
                                    <Typography className='yekan' sx={{my: 2}} variant='subtitle1' component='p'>
                                        میترا رضایی :
                                        <img src="/assets/images/person.png" style={{float: 'left'}} alt=""/>

                                    </Typography>
                                    <Typography color="text.secondary" className='yekan'
                                                sx={{my: 2, fontStyle: 'italic'}} variant='caption' component='q'>
                                        آزمایش Patch یکی از حساس ترین آزمایش هاست که اکثر آزمایشگاه ها نتایج درستی رو به
                                        مراجعین ارائه نمیدن چند بار به کلینیک های مختلف توی ارومیه و تبریز رفتم ولی
                                        همیشه جوابای غلطی میگرفتم ولی این کلینیک با تجهیزاتی که داره خیلی دقیق میتونه
                                        دلیل حساسیت بیمار رو با آزمایش های مختلف بسنجه.
                                    </Typography>

                                </div>
                            </Grid>


                        </Grid>
                    </SwiperSlide>


                    <SwiperSlide>
                        <Grid container sx={{px: 5}}>
                            <Grid xs={12} sx={{py: 3}}>
                                <div className='width100 yekan clrseven shadowone borderrad1' style={{padding: '1rem', height:'100%'}}>
                                    <Typography className='yekan' sx={{my: 2}} variant='subtitle1' component='p'>
                                        مبین خدایی :
                                        <img src="/assets/images/person.png" style={{float: 'left'}} alt=""/>

                                    </Typography>
                                    <Typography color="text.secondary" className='yekan'
                                                sx={{my: 2, fontStyle: 'italic'}} variant='caption' component='q'>
                                        پزشکانی که در این کلینیک هستند خیلی تو کارشون حرفه ای هستن و رفتارشونم حرفه ایه.
                                        نتایج آزمایشات برخلاف آزمایشگاه های آلرژی دیگه که رفتم دقیق هست.
                                    </Typography>

                                </div>
                            </Grid>
                        </Grid>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Grid container sx={{px: 5}}>
                            <Grid xs={12} sx={{py: 3}}>
                                <div className='width100 yekan clrseven shadowone borderrad1' style={{padding: '1rem', height:'100%'}}>
                                    <Typography className='yekan' sx={{my: 2}} variant='subtitle1' component='p'>
                                        سارا رحیم زاده :
                                        <img src="/assets/images/person.png" style={{float: 'left'}} alt=""/>

                                    </Typography>
                                    <Typography color="text.secondary" className='yekan'
                                                sx={{my: 2, fontStyle: 'italic'}} variant='caption' component='q'>
                                        من برای اگزما به این کلینیک مراجعه کردم کادر درمانش رفتار حرفه ای داشتن، محیط
                                        خیلی تمیز بود و بدون معطلی و انتظار تونستم ازمایش خونم رو بدم.من خیلی راضی بودم
                                        به بقیه هم توصیه میکنم.
                                    </Typography>

                                </div>
                            </Grid>
                        </Grid>

                    </SwiperSlide>


                    <SwiperSlide>
                        <Grid container sx={{px: 5}}>


                            <Grid xs={12} sx={{py: 3,}}>
                                <div className='width100 yekan  borderrad1 clrseven shadowone borderrad1 '
                                     style={{padding: '1rem', height:'100%'}}>
                                    <Typography className='yekan' sx={{my: 2}} variant='subtitle1' component='p'>
                                        پیمان عظیمی :
                                        <img src="/assets/images/person.png" style={{float: 'left'}} alt=""/>


                                    </Typography>
                                    <Typography color="text.secondary" className='yekan'
                                                sx={{my: 2, fontStyle: 'italic'}} variant='caption' component='q'>
                                        مادر من به لبنیات حساسیت داشت کلینیک ستارزاده تونست این مورد رو تشخیص بده عالی
                                        بودن واقعا الان دو ماهه از مادرم از داروهایی که تجویز کردن استفاده میکنن خیلی
                                        جواب گرفتیم. خسته نباشید.
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
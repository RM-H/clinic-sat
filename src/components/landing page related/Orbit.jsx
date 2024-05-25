import Grid from '@mui/material/Unstable_Grid2'

import {Typography, Chip} from '@mui/material'
import {useEffect, useState} from "react";
import {getSplash} from "../../Services/services.js";
import {Link} from 'react-router-dom'

const Orbit = ({data}) => {



    return (
        <>
            <Grid container sx={{
                backgroundImage: `url("/assets/images/bg.svg")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                height: '100vh',
                justifyContent: 'center'
            }}>


                <Grid xs={12}>

                    <div className='orbit-container'>
                        <div className='orbit-head '>
                            <img src="/assets/images/logo-large.svg" draggable={false} alt=""/>
                            <Typography className='yekan' component={'h1'} sx={{
                                lineHeight: {xs: '3rem', sm: '4rem'},
                                textAlign: 'center',
                                fontSize: {xs: '2rem', sm: '3rem'},
                                padding: {xs: '1rem', sm: 0}

                            }}>
                                {
                                    data !== false ? data.info.h1 : '...'
                                }
                            </Typography>
                            <Typography className='yekan' sx={{mt:{xs:'0.3rem' , sm:'1rem'}, padding: {xs: '1rem 4rem', sm: 0}}}>
                                {
                                    data !== false ? data.info.subtitle : '...'
                                }
                            </Typography>


                        </div>

                        <div className='one'>


                            <Link to='/blogs/17'>
                                <div className='inner-one-one shadowone'>

                                    <img style={{marginBottom: '0.3rem'}} src="/assets/images/clinic.png" width={64}
                                         height={64} alt=""/>

                                    <Chip className='yekan' color='primary' label='کلینیک تخصصی آلرژی'/>


                                </div>
                            </Link>

                            <Link to='/blogs/17'>


                                <div className='inner-one-two shadowone'>
                                    <img style={{marginBottom: '0.3rem'}} src="/assets/images/pathology.png" width={64}
                                         height={64} alt=""/>
                                    <Chip className='yekan' color='secondary' label='آزمایشگاه تخصصی آلرژی'/>
                                </div>
                            </Link>


                            <Link to='/blogs/19'>


                                <div className='inner-two-one shadowone'>
                                    <img style={{marginBottom: '0.3rem'}} src="/assets/images/doctor.png" width={64}
                                         height={64} alt=""/>
                                    <Chip className='yekan' color='error' label='پزشکان مجرب'/>
                                </div>

                            </Link>


                            <Link to='/blogs/18'>


                                <div className='inner-two-two shadowone'>
                                    <img style={{marginBottom: '0.3rem'}} src="/assets/images/test.png" width={64}
                                         height={64} alt=""/>
                                    <Chip className='yekan' sx={{direction: 'rtl'}} color='info'
                                          label='تست IgE آلرژی '/>

                                </div>

                            </Link>


                            <Link to='/blogs/17'>


                                <div className='inner-two-three shadowone'>
                                    <img style={{marginBottom: '0.3rem'}} src="/assets/images/+.png" width={64}
                                         height={64}
                                         alt=""/>
                                    <Chip className='yekan' color='success' label='درمان با بهترین متدهای دنیا '/>
                                </div>
                            </Link>


                            <Link to='/blogs/20'>


                                <div className='inner-three-one shadowone'>
                                    <img style={{marginBottom: '0.3rem'}} src="/assets/images/test.png" width={64}
                                         height={64} alt=""/>
                                    <Chip className='yekan' color='success' label='تست Patch آلرژی '/>
                                </div>

                            </Link>

                            <Link to='/blogs/17'>


                                <div className='inner-three-two shadowone'>
                                    <img style={{marginBottom: '0.3rem'}} src="/assets/images/allergy.png" width={64}
                                         height={64} alt=""/>
                                    <Chip className='yekan' color='warning' label='ارائه انواع خدمات آلرژی'/>
                                </div>
                            </Link>


                            <Link to='/blogs/17'>


                                <div className='inner-three-four shadowone'>
                                    <img style={{marginBottom: '0.3rem'}} src="/assets/images/pathology2.png" width={64}
                                         height={64} alt=""/>
                                    <Chip className='yekan' color='primary' label='مجهزترین آزمایشگاه تشخیص آلرژی '/>


                                </div>
                            </Link>

                        </div>

                        <Grid container rowSpacing={3}
                              sx={{position: {xs: 'absolute'}, bottom: '7%', width: '100%', display: {lg: 'none'}}}>



                            <Grid xs={4} sx={{textAlign: 'center'}}>
                                <Link to='/blogs/17'>
                                <img style={{marginBottom: '0.3rem'}} src="/assets/images/clinic.png" width={64}
                                     height={64} alt=""/>
                                <Chip className='yekan' color='primary' label='کلینیک تخصیی آلرژی'/>

                                </Link>
                            </Grid>


                            <Grid xs={4} sx={{textAlign: 'center'}}>
                                <Link to='/blogs/17'>


                                <img style={{marginBottom: '0.3rem'}} src="/assets/images/pathology.png" width={64}
                                     height={64} alt=""/>
                                <Chip className='yekan' color='secondary' label='آزمایشگاه  آلرژی'/>
                                </Link>

                            </Grid>

                            <Grid xs={4} sx={{textAlign: 'center'}}>
                                <Link to='/blogs/19'>



                                <img style={{marginBottom: '0.3rem'}} src="/assets/images/doctor.png" width={64}
                                     height={64} alt=""/>
                                <Chip className='yekan' color='error' label='پزشکان مجرب'/>
                                </Link>

                            </Grid>


                            <Grid xs={4} sx={{textAlign: 'center'}}>
                                <Link to='/blogs/18'>



                                <img style={{marginBottom: '0.3rem'}} src="/assets/images/test.png" width={64}
                                     height={64} alt=""/>
                                <Chip className='yekan' sx={{direction: 'rtl'}} color='info' label='تست IgE آلرژی '/>
                                </Link>

                            </Grid>

                            <Grid xs={4} sx={{textAlign: 'center'}}>
                                <Link to='/blogs/20'>


                                <img style={{marginBottom: '0.3rem'}} src="/assets/images/test.png" width={64}
                                     height={64} alt=""/>
                                <Chip className='yekan' color='success' label='تست Patch آلرژی '/>
                                </Link>
                            </Grid>

                            <Grid xs={4} sx={{textAlign: 'center'}}>
                                <Link to='/blogs/17'>


                                <img style={{marginBottom: '0.3rem'}} src="/assets/images/allergy.png" width={64}
                                     height={64} alt=""/>
                                <Chip className='yekan' color='warning' label=' خدمات آلرژی'/>
                            </Link>

                            </Grid>
                        </Grid>


                    </div>

                </Grid>


            </Grid>


        </>
    )
}
export default Orbit;
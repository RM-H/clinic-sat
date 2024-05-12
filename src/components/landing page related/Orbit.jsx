import Grid from '@mui/material/Unstable_Grid2'

import {Typography , Chip} from '@mui/material'
import {useEffect, useState} from "react";
import {getSplash} from "../../Services/services.js";
import { Spinner} from '../index.js'

const Orbit = () => {


    const [data, setData] = useState(false)

    const getData = async () => {
        const response = await getSplash()
        if (response) {
            console.log(response)
            setData(response.data.info)


        } else {
            alert('مشکل در ارتباط با سرور')
        }
    }


    useEffect(() => {

        getData()
    }, []);
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
                                lineHeight: '4rem',
                                textAlign: 'center',
                                fontSize: {xs: '2rem', sm: '3rem'} ,
                                padding: {xs:'1rem' , sm:0}
                            }}>
                                {
                                    data !==false ? data.h1: '...'
                                }
                            </Typography>
                            <Typography className='yekan' sx={{mt: 3 , padding: {xs:'1rem 4rem' , sm:0}}}>
                                {
                                    data !==false ? data.subtitle: '...'
                                }
                            </Typography>


                        </div>

                        <div className='one'>


                            <div className='inner-one-one shadowone'>
                                <img style={{marginBottom: '0.3rem'}} src="/assets/images/clinic.png" width={64}
                                     height={64} alt=""/>
                                <Chip className='yekan' color='primary' label='کلینیک تخصصی آلرژی'/>
                            </div>

                            <div className='inner-one-two shadowone'>
                                <img style={{marginBottom: '0.3rem'}} src="/assets/images/pathology.png" width={64}
                                     height={64} alt=""/>
                                <Chip className='yekan' color='secondary' label='آزمایشگاه تخصصی آلرژی'/>
                            </div>

                            <div className='inner-two-one shadowone'>
                                <img style={{marginBottom: '0.3rem'}} src="/assets/images/doctor.png" width={64}
                                     height={64} alt=""/>
                                <Chip className='yekan' color='error' label='پزشکان مجرب'/>
                            </div>

                            <div className='inner-two-two shadowone'>
                                <img style={{marginBottom: '0.3rem'}} src="/assets/images/test.png" width={64}
                                     height={64} alt=""/>
                                <Chip className='yekan' sx={{direction: 'rtl'}} color='info' label='تست IgE آلرژی '/>

                            </div>

                            <div className='inner-two-three shadowone'>
                                <img style={{marginBottom: '0.3rem'}} src="/assets/images/+.png" width={64} height={64}
                                     alt=""/>
                                <Chip className='yekan' color='success' label='درمان با بهترین متدهای دنیا '/>
                            </div>

                            <div className='inner-three-one shadowone'>
                                <img style={{marginBottom: '0.3rem'}} src="/assets/images/test.png" width={64}
                                     height={64} alt=""/>
                                <Chip className='yekan' color='success' label='تست Patch آلرژی '/>
                            </div>

                            <div className='inner-three-two shadowone'>
                                <img style={{marginBottom: '0.3rem'}} src="/assets/images/allergy.png" width={64}
                                     height={64} alt=""/>
                                <Chip className='yekan' color='warning' label='ارائه انواع خدمات آلرژی'/>
                            </div>


                            <div className='inner-three-four shadowone'>
                                <img style={{marginBottom: '0.3rem'}} src="/assets/images/pathology2.png" width={64}
                                     height={64} alt=""/>
                                <Chip className='yekan' color='primary' label='مجهزترین آزمایشگاه تشخیص آلرژی '/>


                            </div>

                        </div>

                        <Grid container rowSpacing={3} sx={{position:{xs:'absolute'} , bottom:'7%' , width:'100%' , display:{lg:'none'}}}>
                            <Grid xs={4} sx={{textAlign:'center'}}>
                                <img style={{marginBottom: '0.3rem'}} src="/assets/images/clinic.png" width={64}
                                     height={64} alt=""/>
                                <Chip className='yekan' color='primary' label='کلینیک تخصیی آلرژی'/>

                            </Grid>

                            <Grid xs={4} sx={{textAlign:'center'}}>
                                <img style={{marginBottom: '0.3rem'}} src="/assets/images/pathology.png" width={64}
                                     height={64} alt=""/>
                                <Chip className='yekan' color='secondary' label='آزمایشگاه  آلرژی'/>

                            </Grid>

                            <Grid xs={4} sx={{textAlign:'center'}}>
                                <img style={{marginBottom: '0.3rem'}} src="/assets/images/doctor.png" width={64}
                                     height={64} alt=""/>
                                <Chip className='yekan' color='error' label='پزشکان مجرب'/>

                            </Grid>


                            <Grid xs={4} sx={{textAlign:'center'}}>
                                <img style={{marginBottom: '0.3rem'}} src="/assets/images/test.png" width={64}
                                     height={64} alt=""/>
                                <Chip className='yekan' sx={{direction: 'rtl'}} color='info' label='تست IgE آلرژی '/>

                            </Grid>

                            <Grid xs={4} sx={{textAlign:'center'}}>
                                <img style={{marginBottom: '0.3rem'}} src="/assets/images/test.png" width={64}
                                     height={64} alt=""/>
                                <Chip className='yekan' color='success' label='تست Patch آلرژی '/>

                            </Grid>

                            <Grid xs={4} sx={{textAlign:'center'}}>
                                <img style={{marginBottom: '0.3rem'}} src="/assets/images/allergy.png" width={64}
                                     height={64} alt=""/>
                                <Chip className='yekan' color='warning' label=' خدمات آلرژی'/>

                            </Grid>
                        </Grid>


                    </div>

                </Grid>




            </Grid>


        </>
    )
}
export default Orbit;
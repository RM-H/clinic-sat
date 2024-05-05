import Grid from '@mui/material/Unstable_Grid2'
import Chip from '@mui/material/Chip';
import {Typography} from '@mui/material'

const Orbit = () => {
  return(
      <>
          <Grid container sx={{backgroundImage:`url("/assets/images/bg.svg")`  , backgroundSize:'cover' , backgroundRepeat:'no-repeat' , backgroundAttachment:'fixed' , height:'100vh' }}>
              <Grid xs={2}>
                  1
              </Grid>

              <Grid xs={8}>

                  <div className='orbit-container'>
                      <div className='orbit-head '>
                          <img src="/assets/images/logo-large.svg"  alt=""/>
                          <Typography className='yekan' variant='h2' component={'h1'} sx={{ lineHeight:'6rem'}}>
                              آزمایشگاه تخصصی ایمونولوژی
                              <br/>
                              تشخیص پزشکی
                              <br/>
                              ستارزاده
                          </Typography>
                          <Typography className='yekan' sx={{mt:3}}>
                              مجهزترین آزمایشگاه تشخیص آلرژی ، درمان انواع آلرژی با بهترین متدهای دنیا
                          </Typography>

                      </div>

                      <div className='one'>




                          <div className='inner-one-one'>
                             <Chip className='yekan' color='primary' label='کلینیک تخصیی آلرژی' />
                          </div>

                          <div className='inner-one-two'>
                              <Chip className='yekan' color='secondary' label='آزمایشگاه تخصصی آلرژی' />
                          </div>



                      </div>

                      <div className='two'>
                          <div className='inner-two-one'>
                              <Chip className='yekan' color='error' label='پزشکان مجرب' />
                          </div>

                          <div className='inner-two-two'>
                              <Chip className='yekan' sx={{direction:'rtl'}} color='info' label='تست IgE آلرژی ' />

                          </div>

                          <div className='inner-two-three'>
                              <Chip className='yekan' color='success' label='درمان با بهترین متدهای دنیا ' />
                          </div>
                      </div>

                      <div className='three'>
                          <div className='inner-three-one'>
                              <Chip className='yekan' color='success' label='تست Patch آلرژی ' />
                          </div>

                          <div className='inner-three-two'>
                              <Chip className='yekan' color='warning' label='ارائه انواع خدمات آلرژی' />
                          </div>

                          <div className='inner-three-three'>
                              <Chip className='yekan' color='error' label='آزمایشگاه شبانه روزی آلرژی' />
                          </div>

                          <div className='inner-three-four'>
                              <Chip className='yekan' color='primary' label='مجهزترین آزمایشگاه تشخیص آلرژی ' />

                          </div>
                      </div>








                  </div>

              </Grid>
              <Grid xs={2}>

                  2
              </Grid>

          </Grid>





      </>
  )
}
export default Orbit;
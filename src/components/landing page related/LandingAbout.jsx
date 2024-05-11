import Grid from '@mui/material/Unstable_Grid2'
import {Typography} from '@mui/material'


const LandingAbout = () => {
  return(
      <>
          <Grid container  className='pad ' sx={{py:6}}>
              <Grid xs={12} md={5}>
                  <img src="https://decar.savisnet.ir/img/features/about_img.png" alt="" style={{maxWidth:'100%'}}/>

              </Grid>



              <Grid xs={12} md={7} sx={{display:'flex' , flexDirection:'column' , justifyContent:'center' , p:3}}>
                  <Typography className='yekan clronetext' variant='h6' component='p'>
                      درباره ما
                  </Typography>
                  <Typography className='yekan clronetext' variant='h3' component='h2' sx={{textAlign:'center'}}>
                      داستان شروع کلینیک ستارزاده
                  </Typography>

                  <Typography className='yekan ' variant='body1' component='article' sx={{textAlign:'justify' , my:5 }}>
                      کلینیک ایمونولوژِی ستارزاده در ارومیه، ارائه دهنده تمامی خدمات بیماری های خود ایمنی، انواع آلرژی، اختلالات

                      سیستم ایمنی، نقص ایمنی به همراه آزمایشگاه شبانه روزی.


                      کلینیک آلرژی ستارزاده به همراه آزمایشگاه تخصصی در سال …. در ارومیه افتتاح شد که با بکارگیری از تجهیزات روز دنیا یکی از بزرگترین و مجهزترین کلینیک های پزشکی به شمار می آید. این مجموعه با بهره گیری از دانش پزشکان مجرب در این حوزه، اقدام به تشخیص نوع بیماری و شروع پروسه درمان مراجعین می کنند.

                  </Typography>


              </Grid>





          </Grid>



      </>
  )
}
export default LandingAbout;
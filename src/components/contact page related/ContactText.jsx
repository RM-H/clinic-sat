import Grid from '@mui/material/Unstable_Grid2'
import {Typography , Divider} from '@mui/material'
const ContactText = () => {
  return(
      <>
          <Grid className='margintop' xs={12} sx={{mb:5}}>


              <Divider sx={{mb:4}}/>

              <Grid container spacing={6} className=''>

                  <Grid xs={7} sx={{display:'flex' , flexDirection:'column' , justifyContent:'center'}}>

                      <Typography className='yekan clronetext' variant='h3' component='h2' sx={{textAlign:'center'}}>
                          داستان شروع کلینیک ستارزاده
                      </Typography>

                      <Typography className='yekan ' variant='body1' component='article' sx={{textAlign:'justify' , my:5 }}>
                          کلینیک آلرژی ستارزاده به همراه آزمایشگاه تخصصی در سال …. در ارومیه افتتاح شد که با بکارگیری از تجهیزات روز دنیا یکی از بزرگترین و مجهزترین کلینیک های پزشکی به شمار می آید. این مجموعه با بهره گیری از دانش پزشکان مجرب در این حوزه، اقدام به تشخیص نوع بیماری و شروع پروسه درمان مراجعین می کنند.
                      </Typography>


                  </Grid>

              <Grid xs={5} sx={{pl:6}} >
                  <img src="https://decar.savisnet.ir/img/features/about_img.png" alt="" style={{float:'left'}}/>

              </Grid>






              </Grid>
              <Divider sx={{mt:4}}/>
          </Grid>



      </>
  )
}
export default ContactText;
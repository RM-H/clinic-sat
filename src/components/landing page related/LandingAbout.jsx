import Grid from '@mui/material/Unstable_Grid2'
import {Typography} from '@mui/material'


const LandingAbout = () => {
  return(
      <>
          <Grid container className='pad ' sx={{py:6}}>
              <Grid xs={5}>
                  <img src="https://decar.savisnet.ir/img/features/about_img.png" alt=""/>

              </Grid>



              <Grid xs={7} sx={{display:'flex' , flexDirection:'column' , justifyContent:'center'}}>
                  <Typography className='yekan clronetext' variant='h6' component='p'>
                      درباره ما
                  </Typography>
                  <Typography className='yekan clronetext' variant='h3' component='h2' sx={{textAlign:'center'}}>
                      داستان شروع کلینیک ستارزاده
                  </Typography>

                  <Typography className='yekan ' variant='body1' component='article' sx={{textAlign:'justify' , my:5 }}>
                      از آنجا که لورم ایپسوم، شباهت زیادی به متن های واقعی دارد، طراحان معمولا از لورم ایپسوم استفاده میکنند تا فقط به مشتری یا کار فرما نشان دهند که قالب

                      طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد.
                      <br/>
                      اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح به دنبال این

                      <br/>
                      است که پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند.
                  </Typography>


              </Grid>





          </Grid>



      </>
  )
}
export default LandingAbout;
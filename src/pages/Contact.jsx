import Grid from '@mui/material/Unstable_Grid2'
import {Contactmap ,ContactText,Contacticon} from '../components'
import {Typography} from '@mui/material'
import {useEffect} from "react";


const Contact = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
  return(
      <>
          <Grid container className='pad' sx={{pb:5}}>
              <Grid xs={12} className='borderrad1' sx={{backgroundImage:`url("/assets/images/about.jpg")`,backgroundSize:{xs:'cover' , md:'contain'} , backgroundRepeat:'no-repeat' , backgroundAttachment:'fixed' ,mt:'6rem' , minHeight:'16rem' , display:'flex' , alignItems:'center' ,justifyContent:'center' }}>



                      <Typography className='yekan width100 clrsix borderrad1' variant='h3' component='h1' sx={{height:'100%' , color:'white', display:'flex' , alignItems:'center' ,justifyContent:'center' , backdropFilter:'blur(0.1rem)'}}>
                          درباره ما
                      </Typography>



              </Grid>
              <Contacticon/>


              <ContactText/>
              <Contactmap/>



          </Grid>

      </>
  )
}
export default Contact;
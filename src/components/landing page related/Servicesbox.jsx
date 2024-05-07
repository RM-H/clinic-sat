import Grid from '@mui/material/Unstable_Grid2'
import {Box,Typography} from '@mui/material'
import {ServiceCard} from '../index.js'
import servicesCard from "./ServicesCard.jsx";

const Servicesbox = () => {
    const testimages=['https://img.freepik.com/free-vector/flat-national-doctor-s-day-illustration_23-2149437381.jpg?t=st=1714989377~exp=1714992977~hmac=cc1e29d2772673ddad6a1e3f4521ff2e50e1d6101d004e3afd0388059f386a4f','https://img.freepik.com/free-vector/female-healthcare-professional-medical-hero-character-vector_53876-140863.jpg?t=st=1714989447~exp=1714993047~hmac=4ebd495189a2471b8c0c14efd099db0a18714acf31ddc20d490d9e96b34ed60c','https://img.freepik.com/free-vector/hand-drawn-medical-icons_23-2147496938.jpg?t=st=1714989471~exp=1714993071~hmac=40d572e45249302bbb27d4fc5e40da0ffe5f5e260185a4be07f8c08818ef0ee5']

    let content
   content = testimages.map((l)=>(
       <ServiceCard img={l}/>
   ))

  return(
      <>
          <Grid id='services' className='pad' container sx={{minHeight:'50vh' , justifyContent:'center', py:15 , backgroundImage:`url("/assets/images/bg-1.svg")`  , backgroundSize:'cover' , backgroundRepeat:'no-repeat' , backgroundAttachment:'fixed'  }}>
              <Grid xs={12}>

                  <Box className='boxbglight shadowone ' sx={{height:'100%', p:3 , borderRadius:5}}>
                      <Typography className='yekan ' variant='h4' component={'h2'} sx={{textAlign:'center'}}>
                          خدمات کلینیک تخصصی آلرژی ستار زاده
                      </Typography>

                      <Grid container spacing={3} sx={{my:3}}>
                          {
                              content
                          }
                      </Grid>



                  </Box>



              </Grid>





          </Grid>

      </>
  )
}
export default Servicesbox;
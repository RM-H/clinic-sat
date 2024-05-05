import Grid from '@mui/material/Unstable_Grid2'
import {Box,Typography} from '@mui/material'
import {ServiceCard} from '../index.js'

const Servicesbox = () => {
  return(
      <>
          <Grid id='services' className='pad' container sx={{minHeight:'50vh' , justifyContent:'center', my:6  }}>
              <Grid xs={12}>

                  <Box className='boxbgdark shadowone' sx={{height:'100%', p:3 , borderRadius:5}}>
                      <Typography className='yekan' variant='h4' component={'h2'} sx={{textAlign:'center'}}>
                          خدمات کلینیک تخصصی آلرژی ستار زاده
                      </Typography>

                      <Grid container spacing={3} sx={{my:3}}>
                          <ServiceCard/>
                          <ServiceCard/>
                          <ServiceCard/>
                      </Grid>



                  </Box>



              </Grid>





          </Grid>

      </>
  )
}
export default Servicesbox;
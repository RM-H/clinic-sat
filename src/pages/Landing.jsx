import {Orbit , ServiceBox,Landingabout,CommentSlider,BlogsSlider} from '../components/index.js'
import Grid from '@mui/material/Unstable_Grid2'

import React from "react";
const Landing = () => {
  return(
      <>

          <Grid container sx={{mt:5}}>
              <Grid xs={12}>
                  <Orbit/>

              </Grid>


              <Grid xs={12}>
                 <ServiceBox/>

              </Grid>

              <Grid xs={12}>
                  <Landingabout/>



              </Grid>
              
              <Grid xs={12}>

                  <CommentSlider/>
              </Grid>

              <Grid xs={12}>

                  <BlogsSlider/>
              </Grid>










          </Grid>






      </>
  )
}
export default Landing;
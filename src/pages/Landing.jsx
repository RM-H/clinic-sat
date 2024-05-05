import {Orbit , ServiceBox} from '../components/index.js'
import Grid from '@mui/material/Unstable_Grid2'
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










          </Grid>






      </>
  )
}
export default Landing;
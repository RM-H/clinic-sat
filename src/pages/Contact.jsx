import Grid from '@mui/material/Unstable_Grid2'
import {Contactmap , Contactform} from '../components'


const Contact = () => {
  return(
      <>
          <Grid container className='pad'>

              <Contactmap/>

              <Contactform/>
          </Grid>

      </>
  )
}
export default Contact;
import Grid from '@mui/material/Unstable_Grid2'
import {Divider} from "@mui/material";




const Contacticons = () => {
  return(
      <>
          <Grid xs={12} sx={{py:5}}>

              <Grid container>

                  <Grid xs={3}>

                      <div className='width100' style={{height:'100%' , display:'flex' , flexDirection:'column'}}>

                          <div style={{width:'100%' , textAlign:'center'}}>
                              <img src="/assets/images/map.png" alt=""/>

                          </div>
                          <address className='yekan' style={{textAlign:'center'}}>
                              فلان جا
                          </address>


                      </div>
                  </Grid>




                  <Grid xs={3}>

                      <div className='width100' style={{height:'100%' , display:'flex' , flexDirection:'column'}}>

                          <div style={{width:'100%' , textAlign:'center'}}>
                              <img src="/assets/images/phone.png" alt=""/>

                          </div>
                          <span className='yekan' style={{textAlign:'center'}}>
                              12345678921212121
                          </span>


                      </div>

                  </Grid>





                  <Grid xs={3}>
                      <div className='width100' style={{height:'100%' , display:'flex' , flexDirection:'column'}}>

                          <div style={{width:'100%' , textAlign:'center'}}>
                              <img src="/assets/images/instagram.png" alt=""/>

                          </div>
                          <span className='yekan' style={{textAlign:'center'}}>
                             asdasd
                          </span>


                      </div>
                  </Grid>



                  <Grid xs={3}>

                      <div className='width100' style={{height:'100%' , display:'flex' , flexDirection:'column'}}>

                          <div style={{width:'100%' , textAlign:'center'}}>
                              <img src="/assets/images/email.png" alt=""/>

                          </div>
                          <span className='yekan' style={{textAlign:'center'}}>
                             this@that.com
                          </span>


                      </div>

                  </Grid>




              </Grid>


          </Grid>


      </>

  )
}
export default Contacticons;
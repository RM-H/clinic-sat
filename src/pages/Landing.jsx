import {Orbit , ServiceBox,Landingabout,CommentSlider,BlogsSlider} from '../components/index.js'
import Grid from '@mui/material/Unstable_Grid2'

import React, {useEffect, useState} from "react";
import {getSplash} from "../Services/services.js";
const Landing = () => {
    const [data, setData] = useState(false)

    const getData = async () => {
        const response = await getSplash()
        if (response) {

            setData(response.data)



        } else {
            alert('مشکل در ارتباط با سرور')
        }
    }


    useEffect(() => {

        getData()
    }, []);
  return(
      <>

          <Grid container sx={{mt:5}}>
              <Grid xs={12}>
                  <Orbit data={data}/>

              </Grid>


              <Grid xs={12}>
                 <ServiceBox/>

              </Grid>

              <Grid xs={12}>
                  <Landingabout data={data} />



              </Grid>
              
              <Grid xs={12}>

                  <CommentSlider />
              </Grid>

              <Grid xs={12}>

                  <BlogsSlider data={data}/>
              </Grid>










          </Grid>






      </>
  )
}
export default Landing;
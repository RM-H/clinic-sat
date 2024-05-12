import Grid from '@mui/material/Unstable_Grid2'
import {Typography, Divider} from '@mui/material'
import {useEffect, useState} from "react";
import {getSplash} from "../../Services/services.js";

const ContactText = () => {

    const [data, setData] = useState(false)

    const getData = async () => {
        const response = await getSplash()
        if (response) {
            console.log(response)
            setData(response.data.info)


        } else {
            alert('مشکل در ارتباط با سرور')
        }
    }


    useEffect(() => {

        getData()
    }, []);



    return (
        <>
            <Grid className='margintop' xs={12} sx={{mb: 5}}>


                <Divider sx={{mb: 4}}/>

                <Grid container rowSpacing={4}>

                    <Grid xs={12} md={7} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>

                        <Typography className='yekan clronetext' variant='h3' component='h2' sx={{textAlign: 'center'}}>
                            داستان شروع کلینیک ستارزاده
                        </Typography>

                        <Typography className='yekan ' variant='body1' component='article'
                                    sx={{textAlign: 'justify', my: 5}}>
                            {
                                data!==false ? data.about_text:"...."
                            }
                        </Typography>


                    </Grid>

                    <Grid xs={12} md={5} sx={{ pl: {md:6}}}>
                        <img src="/assets/images/banner1.png" alt="" style={{float: 'left' , maxWidth:'100%'}}/>

                    </Grid>


                </Grid>
                <Divider sx={{mt: 4}}/>
            </Grid>


        </>
    )
}
export default ContactText;
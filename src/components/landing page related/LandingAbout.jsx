import Grid from '@mui/material/Unstable_Grid2'
import {Typography} from '@mui/material'
import {useEffect, useState} from "react";
import {getSplash} from "../../Services/services.js";


const LandingAbout = () => {


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
            <Grid container className='pad ' sx={{py: 6}}>
                <Grid xs={12} md={5}>
                    <img src="/assets/images/banner2.png" alt="" style={{maxWidth: '100%'}}/>

                </Grid>


                <Grid xs={12} md={7} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 3}}>
                    <Typography className='yekan clronetext' variant='h6' component='p'>
                        درباره ما
                    </Typography>
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


            </Grid>


        </>
    )
}
export default LandingAbout;
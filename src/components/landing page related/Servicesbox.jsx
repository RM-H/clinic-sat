import Grid from '@mui/material/Unstable_Grid2'
import {Box, Typography} from '@mui/material'
import {ServiceCard} from '../index.js'
import servicesCard from "./ServicesCard.jsx";

const Servicesbox = () => {
    const testimages = [{
        link: '/assets/images/24.jpg',
        title: 'خدمات شبانه روزی',
        desc: 'کلینیک ستارزاده یکی از بزرگترین و مجهزترین کلینیک های پزشکی به صورت شبانه روزی آماده ارائه خدمات به مراجعین است. '
    },
        {
            link: '/assets/images/al.jpg',
            title: 'انواع تست آلرژی',
            desc: 'پزشکان  مجرب کلینیک ایمونولوژی ستار زاده با بررسی سوابق بیماری مراجعین و نتایج تست های IgE، Patch و… اقدام به درمان بیماری های آلرژیک می کنند.  '
        },

        {
            link: '/assets/images/ins.jpg',
            title: 'طرف قرار با اکثر بیمه ها ',
            desc: 'کلینیک ستارزاده با در نظر گرفتن رفاه حال مراجعین و با توجه به بالا بودن هزینه های درمانی طرف قرارداد با اکثریت بیمه ها می باشد.   '
        }]

    let content
    content = testimages.map((l) => (
        <ServiceCard img={l.link} title={l.title} desc={l.desc}/>
    ))

    return (
        <>
            <Grid id='services' className='pad' container sx={{
                minHeight: '50vh',
                justifyContent: 'center',
                py: 15,
                backgroundImage: `url("/assets/images/bg-1.svg")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}>
                <Grid xs={12}>

                    <Box className='boxbglight shadowone ' sx={{height: '100%', p: 3, borderRadius: 5}}>
                        <Typography className='yekan ' variant='h4' component={'h2'} sx={{textAlign: 'center'}}>
                            خدمات کلینیک تخصصی آلرژی ستار زاده
                        </Typography>

                        <Grid container spacing={3} sx={{my: 3}}>
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
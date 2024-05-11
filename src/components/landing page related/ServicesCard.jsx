import { Card, Divider, CardContent, CardMedia, Typography} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'

const ServicesCard = ({img,title,desc}) => {
    return (

        <Grid xs={12} sm={4} className='cardanimation'>
            <Card className='clrfive ' sx={{ width: '100%' , borderRadius: 9  }}>
                <CardMedia
                    sx={{ height: '29rem' , backgroundSize:'cover' }}
                    image={img}
                    title="about us"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h5" className='clronetext yekan' sx={{textAlign:'center'}}>
                        {title}
                    </Typography>
                    <Divider/>
                    <Typography variant="body1" className='yekan' color="text.secondary" sx={{lineHeight:'2rem' , textAlign:'justify'}}>
                        {desc}
                    </Typography>
                </CardContent>

            </Card>
        </Grid>

    );
}
export default ServicesCard;
import { Card, Divider, CardContent, CardMedia, Typography} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'

const ServicesCard = ({img}) => {
    return (

        <Grid xs={4} className='cardanimation'>
            <Card className='clrfive ' sx={{ width: '100%' , borderRadius: 9  }}>
                <CardMedia
                    sx={{ height: '25rem' , backgroundSize:'cover' }}
                    image={img}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h5" className='clronetext yekan' sx={{textAlign:'center'}}>
                        تشخیص مولکولی
                    </Typography>
                    <Divider/>
                    <Typography variant="body1" className='yekan' color="text.secondary" sx={{lineHeight:'2rem' , textAlign:'justify'}}>
                        نوارها یک مورد ضروری در تمام مراحل اپیلاسیون هستند. نوارها پس از پخش شدن موم روی پوست فشار داده می‌شوند. آن‌ها به موم می‌چسبند و هنگامی که آن‌ها .
                        نوارها یک مورد ضروری در تمام مراحل اپیلاسیون هستند. نوارها پس از پخش شدن موم روی پوست فشار داده می‌شوند. آن‌ها به موم می‌چسبند و هنگامی که آن‌ها .
                    </Typography>
                </CardContent>

            </Card>
        </Grid>

    );
}
export default ServicesCard;
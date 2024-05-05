import { Card, Divider, CardContent, CardMedia, Typography} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'

const ServicesCard = () => {
    return (

        <Grid xs={4}>
            <Card sx={{ width: '100%' , borderRadius: 9  }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h5" sx={{textAlign:'center'}}>
                        Lizard
                    </Typography>
                    <Divider/>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>

            </Card>
        </Grid>

    );
}
export default ServicesCard;
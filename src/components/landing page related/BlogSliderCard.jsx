import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Chip,
    Switch,
    FormLabel,
    FormControl, FormGroup, FormControlLabel, Tooltip, Divider
} from "@mui/material";
import {baseurl} from '../../Services/services.js'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {VisibilityOff, Visibility} from '@mui/icons-material'

const BlogSliderCard = ({date, id, img, title, text}) => {
    // to controll the show of sensitive images
    const [show, setShow] = useState(false)


    let txt = function stripTags(text) {
        const stripped = text.replace(/<[^>]+>/g, '');
        if (stripped.length <= 300) {
            return stripped;
        }
        return text.substr(0, 450) + '...';
    }
    return (
        <>
            <Card sx={{maxWidth: '100%'}} className='shadowone'>
                <FormControl className='clrwhitetp' component="fieldset" sx={{float: 'left', zIndex: 1000}}>

                    <FormGroup aria-label="position" row>
                        <Tooltip placement='top'  title={<span className='yekan'> ممکن است حاوی تصاویر ناخوشایند باشد.</span>}>
                            <FormControlLabel

                                sx={{ml: 0, pr: 3}}
                                control={<Switch onChange={() => setShow((p) => !p)} color="primary"/>}
                                label={

                                    <span style={{display: 'flex', alignItems: 'center', fontSize: '0.6rem'}}>
                              {
                                  show === true ? <Visibility/> : <VisibilityOff/>
                              }

                      </span>

                                }
                                labelPlacement="start"
                            />
                        </Tooltip>

                    </FormGroup>
                </FormControl>

                <CardMedia
                    sx={{height: '23rem', filter: show === true ? 'none' : 'blur(0.4rem)'}}
                    image={`${baseurl}/${img}`}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom className='yekan' variant="h6" component="div" sx={{textAlign:'justify'}}>
                        {title}

                    </Typography>
                    <Divider/>

                    <Typography variant="caption" color="text.secondary" component='div' className='yekan-regular'
                                dangerouslySetInnerHTML={{__html: txt(text)}}/>


                </CardContent>
                <Chip className='yekan' label={date}/>
                <CardActions sx={{justifyContent: 'left'}}>

                    <Link to={`/blogs/${id}`}>
                        <Button className='yekan' variant='contained'>ادامه</Button>
                    </Link>


                </CardActions>
            </Card>


        </>
    )
}
export default BlogSliderCard;
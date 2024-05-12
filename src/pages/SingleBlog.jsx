import Grid from '@mui/material/Unstable_Grid2'
import {
    Avatar,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
    Paper,
    FormControl, FormGroup, Tooltip, FormControlLabel, Switch
} from '@mui/material'
import {getBlog, getSplash, baseurl} from '../Services/services.js'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Spinner} from '../components/index.js'
import {Link} from 'react-router-dom'
import {Visibility, VisibilityOff} from "@mui/icons-material";

const SingleBlog = () => {
    // to controll the show of sensitive images
    const [show, setShow] = useState(false)


    // shorten the text
    let txt = function stripTags(text) {
        const stripped = text.replace(/<[^>]+>/g, '');
        if (stripped.length <= 60) {
            return stripped;
        }
        return text.substr(0, 60) + '...';
    }

    let {blogID} = useParams()

    const [data, setData] = useState(false)
    const [splash, setSplash] = useState(false)

    const getdata = async () => {
        const options = {


            params: {id: blogID}
        };
        setData(false)
        setShow(false)
        const res = await getBlog(options)
        if (res) {
            if (res.data.blog.hide == 0) {
                setShow(true)


            }
            setData(res.data)


            console.log(res.data)
        }
    }


    // using splash data to show right side menu
    const getSplashinfo = async () => {
        const response = await getSplash()
        if (response) {
            setSplash(response.data.blogs)
            console.log(response.data)


        } else {
            alert('مشکل در ارتباط با سرور')
        }
    }

    useEffect(() => {
        getdata().then()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        getSplashinfo().then()

    }, [blogID]);


    let content
    if (data !== false) {
        let imgs = document.getElementById(blogID)

        if (imgs) {
            if (show === false) {
                imgs.style.filter = 'blur(0.3rem)'
            } else {
                imgs.style.filter = 'none'
            }

        }


        content =


            <Grid className={show === false && 'blur'} container
                  sx={{height: '100%', flexDirection: 'column', flexWrap: 'nowrap'}}>


                <Grid xs={12}>

                    <Typography component='h1' className='yekan'>
                        {data.blog.title}


                    </Typography>
                    <Typography variant='caption' className='yekan-regular'>
                        {data.blog.date_text}
                    </Typography>
                    {
                        data.blog.hide === 1 ?
                            <FormControl className='clrwhitetp' component="fieldset" sx={{float: 'left', zIndex: 1000}}>

                                <FormGroup aria-label="position" row>
                                    <Tooltip placement='top' title={<span className='yekan'>
                                ممکن است حاوی تصاویر ناخوشایند باشد.

                                </span>}>
                                        <FormControlLabel

                                            sx={{ml: 0, pr: 3}}
                                            control={<Switch onChange={() => setShow((p) => !p)} color="info"/>}
                                            label={

                                                <span
                                                    style={{display: 'flex', alignItems: 'center', fontSize: '0.6rem'}}>
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
                            : null
                    }


                </Grid>

                <Grid xs={12} sx={{height: '100%', p: 3}}>
                    <Paper elevation={9} className='width100 ' sx={{height: '100%', p: 2, textAlign: 'center'}}>
                        <img src={`${baseurl}/${data.blog.img}`} id={data.blog.id} alt={data.blog.title}
                             style={{maxWidth: '100%'}}/>

                        <Typography dangerouslySetInnerHTML={{__html: data.blog.txt}} className='yekan-regular'
                                    variant='body2' component='article' sx={{textAlign: 'justify', my: 3}}/>
                    </Paper>

                </Grid>

            </Grid>


    } else {
        content = <Grid xs={12}>
            <Spinner/>
        </Grid>
    }

    let side
    if (splash !== false) {

        side =
            splash.map((i) => (

                <>


                    <Link key={i.id} to={`/blogs/${i.id}`}  style={{color: 'inherit', textDecoration: 'none'}}>


                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="P" src={`${baseurl}/${i.img}`}/>
                            </ListItemAvatar>
                            <ListItemText sx={{textAlign: 'right'}}
                                          primary={
                                              <span className='yekan'>
                                {i.title}
                                </span>
                                          }
                                          secondary={
                                              <>
                                                  <Typography
                                                      sx={{display: 'inline'}}
                                                      className='yekan'
                                                      component="div"
                                                      variant="caption"
                                                      color="text.secondary"

                                                  >

                                                      {i.date_text}
                                                  </Typography>

                                              </>
                                          }
                            />
                        </ListItem>
                    </Link>
                    <Divider variant="inset" component="li"/>

                </>
            ))


    }


    return (
        <>
            <Grid container className='pad' sx={{
                minHeight: '100vh',
                py: 9,
                // backgroundImage: `url("https://img.freepik.com/free-vector/creative-pencil-design-illustration-concept-creative-process_460848-14810.jpg?w=1060&t=st=1715164146~exp=1715164746~hmac=753f14f0452aae7f3a12286a0b1b299bb425a79fbc25885e8105556a45fc3603")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}>
                <Grid xs={12} md={9} sx={{p: 4, overflow: 'auto'}}>
                    {
                        content
                    }
                </Grid>
                <Grid xs={12} md={3} sx={{
                    position: 'sticky', top: '20vh',
                    height: ' 100%'
                }}>
                    <List sx={{width: '100%', bgcolor: 'background.paper'}}>

                        <ListItem alignItems="center" sx={{justifyContent: 'center'}}>

                            <Typography className='yekan clronetext' component='h3'>
                                جدیدترین های بلاگ
                            </Typography>
                        </ListItem>
                        <Divider variant="inset" component="li"/>

                        {side}
                    </List>


                </Grid>


            </Grid>


        </>
    )
}
export default SingleBlog;
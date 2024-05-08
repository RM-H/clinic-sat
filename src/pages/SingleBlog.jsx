import Grid from '@mui/material/Unstable_Grid2'
import {Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography} from '@mui/material'
import {getBlog,getSplash,baseurl} from '../Services/services.js'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Spinner} from '../components/index.js'

const SingleBlog = () => {
    let {blogID} = useParams()

    const [data, setData] = useState(false)
    const [splash, setSplash] = useState(false)

    const getdata = async () => {
        const options = {


            params: {id: blogID}
        };
        const res = await getBlog(options)
        if (res) {

            setData(res.data)
            console.log(res.data)
        }
    }


    // using splash data to show right side menu
    const getSplashinfo = async () => {
        const response = await getSplash()
        if (response) {
            setSplash(response.data.safiran_blogs)
            console.log(response.data.safiran_blogs)


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
    }, []);


    let content
    if (data !== false ) {
        content =


            <Grid container>


                <Grid xs={12}>
                    <Typography component='h1'>
                        {data.blog.title}

                    </Typography>
                </Grid>

                <Grid xs={12}>
                    <Typography dangerouslySetInnerHTML={{__html:data.blog.txt}} component='div'/>
                </Grid>

            </Grid>


    } else {
        content = <Grid xs={12}>
            <Spinner/>
        </Grid>
    }

    let side
    if (splash!==false) {

        side =
            splash.map((i)=>(

                <>

                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="P" src={`${baseurl}/${i.img}`} />
                        </ListItemAvatar>
                        <ListItemText sx={{textAlign:'right'}}
                            primary={
                                <span className='yekan' >
                                { i.title}
                                </span>
                           }
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {i.title}
                                    </Typography>

                                </>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />

                </>
            ))



    }



    return (
        <>
            <Grid container className='pad' sx={{
                minHeight: '100vh',
                pt: 9,
                // backgroundImage: `url("https://img.freepik.com/free-vector/creative-pencil-design-illustration-concept-creative-process_460848-14810.jpg?w=1060&t=st=1715164146~exp=1715164746~hmac=753f14f0452aae7f3a12286a0b1b299bb425a79fbc25885e8105556a45fc3603")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}>
                <Grid xs={9} sx={{p: 4, overflow: 'auto'}}>
                    {
                        content
                    }
                </Grid>
                <Grid xs={3}  sx={{
                    position: 'sticky', top: '20vh',
                    height: ' 100%'
                }}>
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>

                        <ListItem alignItems="center" sx={{justifyContent:'center'}}>

                           <Typography className='yekan clronetext' component='h3' >
                               جدیدترین های بلاگ
                           </Typography>
                        </ListItem>
                        <Divider variant="inset" component="li" />

                        {side}
                    </List>


                </Grid>


            </Grid>


        </>
    )
}
export default SingleBlog;
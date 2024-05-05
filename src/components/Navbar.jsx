import * as React from 'react';
import {
    AppBar, Avatar,
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    Toolbar,
    Typography
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import {useState } from "react";
import {Menu} from '@mui/icons-material'
import {Link,useNavigate} from 'react-router-dom'

const Navbar = (props) => {
    const [activePage, setActivePage] = useState(0)
    const handleActivePage = (page) => {
        setActivePage(page)
    }
    const drawerWidth = 240;
    const {window} = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setTimeout(() => setMobileOpen((prevState) => !prevState), 300)

    };

    const nav = useNavigate()
    const drawer = (
        <Box sx={{textAlign: 'center'}}>
            <Typography onClick={() => {
                nav('/');
                handleActivePage(0)
            }} className='kook' variant="h6" sx={{my: 2}}>
                سفیران نوآوری و اندیشه
            </Typography>

            <Divider sx={{my: 1}}/>


            <List sx={{
                '& .Mui-selected': {
                    border: '0.15rem dashed #00A651',
                    borderRadius: '0.5rem',
                    backgroundColor: '#ffffff',
                    mx: 1,
                    justifyContent: 'start',
                    pr: '2rem'
                }
            }}>

                <ListItem onClick={handleDrawerToggle} disablePadding>
                    <ListItemButton selected={activePage === 0} onClick={() => {
                        nav('/');
                        handleActivePage(0)
                    }}
                                    sx={{textAlign: 'center', height: '3rem'}}>
                        <Typography className='kook' variant="h6" sx={{my: 2}}>
                            صفحه اصلی
                        </Typography>
                    </ListItemButton>
                </ListItem>

                <ListItem onClick={handleDrawerToggle} disablePadding>
                    <ListItemButton selected={activePage === 1} onClick={() => {
                        nav('/courses');
                        handleActivePage(1)
                    }}
                                    sx={{textAlign: 'center', height: '3rem'}}>
                        <Typography className='kook' variant="h6" sx={{my: 2}}>
                            همایش / دوره
                        </Typography>
                    </ListItemButton>
                </ListItem>

                <ListItem onClick={handleDrawerToggle} disablePadding>
                    <ListItemButton selected={activePage === 2} onClick={() => {
                        nav('/blog');
                        handleActivePage(2)
                    }} sx={{textAlign: 'center', height: '3rem'}}>
                        <Typography className='kook' variant="h6" sx={{my: 2}}>
                            بلاگ
                        </Typography>
                    </ListItemButton>
                </ListItem>


                <ListItem onClick={handleDrawerToggle} disablePadding>
                    <ListItemButton selected={activePage === 4} onClick={() => {
                        nav('/contact');
                        handleActivePage(4)
                    }} sx={{textAlign: 'center', height: '3rem'}}>
                        <Typography className='kook' variant="h6" sx={{my: 2}}>
                            تماس با ما
                        </Typography>
                    </ListItemButton>
                </ListItem>

                <ListItem onClick={handleDrawerToggle} disablePadding>
                    <ListItemButton selected={activePage === 3} onClick={() => {
                        nav('/faq');
                        handleActivePage(3)
                    }} sx={{textAlign: 'center', height: '3rem'}}>
                        <Typography className='kook' variant="h6" sx={{my: 2}}>
                            سوالات متداول
                        </Typography>
                    </ListItemButton>
                </ListItem>


                <a href="https://ofoghiranian.com/work-with-us/" target={'_blank'}>
                    <ListItem disablePadding>
                        <ListItemButton sx={{textAlign: 'center', height: '3rem'}}>
                            <Typography className='kook' variant="h6" sx={{my: 2}}>
                                فرصت های شغلی
                            </Typography>
                        </ListItemButton>
                    </ListItem>

                </a>
                <a href="https://bilitim.net/login" target={'_blank'}>
                    <ListItem disablePadding>
                        <ListItemButton sx={{textAlign: 'center', height: '3rem'}}>
                            <Typography className='kook' variant="h6" sx={{my: 2}}>
                                ورود/ثبت نام
                            </Typography>
                        </ListItemButton>
                    </ListItem>

                </a>


            </List>
        </Box>
    );
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <>


            {/*Responsive Drawer*/}
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    anchor='right'
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'block', md: 'block'},
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            backgroundColor: 'rgba(255, 255, 255, 0.93)',
                            backdropFilter: 'blur(3px)',
                            borderLeft: '0.3rem solid #00A651'
                        },

                    }}
                >

                    {drawer}
                </Drawer>
            </nav>

            {/*Responsive Drawer*/}
            <Box sx={{flexGrow: 1 , direction:'rtl'}}>
                <AppBar position="fixed" sx={{
                    '&.MuiAppBar-root': {
                        backgroundColor:'rgba(255,255,255,0.36)' ,
                        backdropFilter: 'blur(1rem)'

                    }
                }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ml: 1, display: {lg: 'none'}}}

                        >
                            <Menu/>
                        </IconButton>

                        <Grid container  sx={{width:'100%' }}>
                            <Grid xs={5} sx={{display:'flex', justifyContent:'end'}}>
                                <Button  onClick={()=>nav('/')} className='underline yekan clrblack' color="primary">صفحه اصلی</Button>

                                    <Button onClick={()=>{
                                        let el = document.getElementById('services');
                                        el.scrollIntoView({behavior:"smooth"})

                                    }}  className='underline yekan clrblack' color="primary">خدمات کلینیک</Button>




                            </Grid>

                            <Grid  xs={2} sx={{display:'flex', justifyContent:'center'}}>

                                <img src="/assets/images/logo.svg"  alt="logo" style={{ borderRadius:'50%' }} width={50} height={50}/>
                            </Grid>

                            <Grid xs={5} sx={{display:'flex', justifyContent:'start'}}>
                                <Button className='underline yekan clrblack' color="primary">بلاگ</Button>
                                <Button onClick={()=>nav('/contact/')} className='underline yekan clrblack' color="primary">تماس با ما</Button>
                            </Grid>

                        </Grid>

                    </Toolbar>
                </AppBar>
            </Box>

        </>
    );
}
export default Navbar;
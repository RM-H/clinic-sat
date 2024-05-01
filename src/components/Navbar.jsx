import * as React from 'react';
import {Box, Divider, Drawer, List, ListItem, ListItemButton, Typography} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import {useState} from "react";

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
                    <ListItem  disablePadding>
                        <ListItemButton  sx={{textAlign: 'center', height: '3rem'}}>
                            <Typography className='kook' variant="h6" sx={{my: 2}}>
                                فرصت های شغلی
                            </Typography>
                        </ListItemButton>
                    </ListItem>

                </a>
                <a href="https://bilitim.net/login" target={'_blank'}>
                    <ListItem  disablePadding>
                        <ListItemButton  sx={{textAlign: 'center', height: '3rem'}}>
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
      <nav className='nav'>

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
                      '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth , backgroundColor:'rgba(255, 255, 255, 0.93)' , backdropFilter:'blur(3px)' , borderLeft:'0.3rem solid #00A651' },

                  }}
              >

                  {drawer}
              </Drawer>
          </nav>

          {/*Responsive Drawer*/}
          <Grid container>
              <Grid xs={12}>
                  asd
              </Grid>



          </Grid>

      </nav>
    );
}
export default Navbar;
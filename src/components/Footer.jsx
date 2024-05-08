import Grid from '@mui/material/Unstable_Grid2'
import {ListItem, ListItemButton, ListItemIcon, Typography, List, ListItemText,Divider} from '@mui/material'
import {PhoneOutlined,Instagram,PlaceOutlined} from '@mui/icons-material'
import {Tips} from './index.js'

const Footer = () => {
  return(
      <>
          <Grid container className='clrthree pad' component={'footer'} sx={{minHeight:'15rem' , pt:4  }}>

              <Grid xs={4} sx={{p:2}}>
                  <Typography className='yekan clronetext' component='h4' variant='subtitle1'>
                      آزمایشگاه تخصصی ایمونولوژی و تشخیص پزشکی ستار زاده
                  </Typography>
                  <Typography className='yekan' component='article' variant='subtitle2' sx={{mt:2}}>
                      کلینیک ایمونولوژِی ستارزاده در ارومیه، ارائه دهنده تمامی خدمات بیماری های خود ایمنی، انواع آلرژی، اختلالات سیستم ایمنی، نقص ایمنی به همراه آزمایشگاه شبانه روزی.
                  </Typography>
              </Grid>




              <Grid xs={3} sx={{p:2}}>

                  <Typography className='yekan clronetext' component='h4' variant='subtitle1'>
                     ارتباط با ما
                  </Typography>

                  <List sx={{mt:2}}>
                      <ListItem disablePadding>
                          <ListItemButton>
                              <ListItemIcon>
                                  <PhoneOutlined />
                              </ListItemIcon>
                              <ListItemText sx={{textAlign:'right'}}  primary="123456789" />
                          </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                          <ListItemButton>
                              <ListItemIcon>
                                  <PlaceOutlined />
                              </ListItemIcon>
                              <ListItemText sx={{textAlign:'right'}}  primary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae praesentium rem repudiandae voluptatem. " />
                          </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                          <ListItemButton>
                              <ListItemIcon>
                                  <Instagram />
                              </ListItemIcon>
                              <ListItemText sx={{textAlign:'right'}} primary="placeholder" />
                          </ListItemButton>
                      </ListItem>
                  </List>
              </Grid>


              <Grid xs={3} sx={{p:2}}>

                  <Typography className='yekan clronetext' component='h4' variant='subtitle1'>
                      مجوز ها
                  </Typography>
              </Grid>


              <Grid xs={2} sx={{p:2}}>

                  <Typography className='yekan clronetext' component='h4' variant='subtitle1'>
                      لینک های سریع
                  </Typography>

                  <List sx={{mt:2}}>
                      <ListItem disablePadding>
                          <ListItemButton>
                              <ListItemText sx={{textAlign:'right'}} primary="Trash" />
                          </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                          <ListItemButton component="a" href="#simple-list">
                              <ListItemText sx={{textAlign:'right'}} primary="Spam" />
                          </ListItemButton>
                      </ListItem>
                  </List>
              </Grid>

              <Grid xs={12} sx={{p:2}}>
                  <Divider/>
                  <Typography className='yekan' component='p'>
                      
                      طراحی و توسعه توسط
                      {' '}
                      <a href="https://ofoghiranian.com/" rel='nofollow' target='_blank' style={{color:'inherit' , textDecoration:'none'}}>
                          آژانس تبلیغاتی و برندینگ افق ایرانیان
                      </a>



                     
                  </Typography>
              </Grid>








          </Grid>



      </>
  )
}
export default Footer;
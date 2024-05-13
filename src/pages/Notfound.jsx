import {Button,Typography} from '@mui/material'
import {Link} from 'react-router-dom'


const Notfound = () => {
  return(
      <>
          <div  style={{  backgroundImage: `url("/assets/images/404.jpg")`,
              backgroundSize: 'contain' , backgroundPosition:'center' , backgroundRepeat:'no-repeat' , backgroundColor:'#00adef',height:'100vh' , display:'flex' , flexDirection:'column' , justifyContent:'space-between' , alignItems:'center'}}>



              <Link to={'/'}>


                  <Button variant='contained' color='warning' size='large' className='yekan shadowone' sx={{mt:26 , width:'20rem' }}>
                      خانه
                  </Button>
              </Link>

              <Typography variant='h5'  className='yekan-regular' >
                  صفحه مورد نظر یافت نشد...
              </Typography>







          </div>



      </>
  )
}
export default Notfound;
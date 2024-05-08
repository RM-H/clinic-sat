import {LinearProgress} from "@mui/material";


const Spinner = () => {
  return(
      <>

          <LinearProgress variant='indeterminate' color='primary' sx={{
              '&.MuiLinearProgress-root':{
                  backgroundColor:'rgb(253 234 121)'
              } ,
              my:5

          }}/>



      </>


  )
}
export default Spinner;
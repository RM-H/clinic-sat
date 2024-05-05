import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useState} from "react";
import Grid from '@mui/material/Unstable_Grid2'

const Contactform = () => {
    const [sent,setSent] = useState()


    const handlesubmit = () => {

    }
  return(
      <>
          <Grid xs={12} sx={{p:4 , my:3}} className='blackborder borderrad1 shadowone'>


          <Formik initialValues={{
              name: '',
              phone: '',
              text: ''
          }} onSubmit={(values) => handlesubmit(values)}
                  validationSchema={Yup.object().shape({
                      name: Yup.string()
                          .max(50, 'باید کمتر از 50 کاراکتر باشد')
                          .required('*ضروری'),
                      phone: Yup.string()
                          .matches(/^[0-9]+$/, 'فقط عدد')
                          .length(11, 'شماره درست وارد نشده است')
                          .required('*ضروری'),
                      text: Yup.string()
                          .max(400, 'باید کمتر از 400 کاراکتر باشد')
                          .required('*ضروری'),
                  })}


          >
              {({errors, touched}) => (

                  <Form className=' '>

                      <Grid container spacing={3}>
                          <Grid  xs={6}>
                              <Field
                                  className='width100 yekan '
                                  id="name" name="name"
                                  placeholder=" نام و نام خانوادگی" style={{height: '3rem'}}/>


                              <ErrorMessage  component='span' className='yekan '
                                            name='name'/>


                          </Grid>


                          <Grid xs={6}>

                              <Field
                                  className='width100 yekan '
                                  type='tel' id="phone" name="phone"
                                  placeholder="شماره تماس" style={{height: '3rem'}}/>
                              <ErrorMessage  component='span' className=' yekan'
                                            name='phone'/>


                          </Grid>


                          <Grid xs={12} >
                              <Field
                                  id="text"
                                  name="text"
                                  placeholder="متن پیام "
                                  type="text"
                                  as='textarea'
                                  rows='10'
                                  className='width100 yekan '
                              />
                              <ErrorMessage  component='span' className='yekan'
                                            name='text'/>


                          </Grid>


                          <div  style={{width: '100%' , textAlign:'center'}} >

                              {

                                  sent ? <p className=' yekan' > پیام شما دریافت شد !</p> :
                                      <button
                                      className='clrone   borderrad1  yekan'
                                      type="submit" style={{backgroundColor: '#414042' , padding:'1rem' , color:'white' }}>ارسال پیغام
                                  </button>


                              }

                          </div>
                      </Grid>




                  </Form>
              )}

          </Formik>

          </Grid>

      </>


  )
}
export default Contactform;
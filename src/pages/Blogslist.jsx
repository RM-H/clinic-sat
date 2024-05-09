import Grid from '@mui/material/Unstable_Grid2'
import {TextField,Button} from "@mui/material";
import {NavigateBefore, NavigateNext, SearchRounded} from '@mui/icons-material'
import {useEffect, useState} from "react";
import {getBlogs} from '../Services/services.js'
import {Spinner,BlogCard} from '../components'



const blogslist = () => {
    const [data, setData] = useState(false)
    const [search, setSearch] = useState('')

    const getdata = async (page)=>{
        const options = {


            params: {page: page, take: 6, search: search}
        };
        const res = await getBlogs(options)
        if (res){

            setData(res.data)
            console.log(res.data)
        }
    }

    useEffect(() => {
        getdata().then()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    useEffect(() => {
        getdata().then()
    }, [search]);


    let content
    if (data!==false) {



        if (data.items.length > 0) {

            content = data.items.map((item) => (
                <Grid xs={4} key={item.id}>
                    <BlogCard key={item.id} id={item.id} text={item.txt} img={item.img} title={item.title} date={item.date_text} />
                </Grid>



                







            ))
        } else {
            content = <Grid xs={12}>
                <p className=' yekan-regular'>
                    چیزی جهت نمایش وجود ندارد.
                </p>
            </Grid>
        }


    } else {
        content = <Grid xs={12}>
            <Spinner/>
        </Grid>
    }


    return (

        <>
            <Grid container className='pad' sx={{py: 9}} spacing={3}>
                <Grid xs={12} sx={{py: 4, direction: 'rtl', textAlign: 'center'}}>

                    <TextField onChange={(e)=> setTimeout(() => setSearch(e.target.value), 1000)} id="outlined-basic" className='width100 ' placeholder='جستجو بین مطالب'
                               label={<SearchRounded/>} variant="outlined" sx={{}}/>
                </Grid>

                {
                    content
                }



                {data &&
                    <Grid xs={12} sx={{textAlign:'center' , my:3}}>


                        {/*before page with tick*/}
                        {
                            data.paginator.beforePage < data.paginator.currentPage && (

                                <Button variant='text' onClick={() => {
                                    setData(false);
                                    getdata(data.paginator.beforePage);
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth'
                                    });
                                }}>
                                    <NavigateNext/>
                                </Button>
                            )


                        }


                        {/*map beforePages*/}
                        {data.paginator.beforePages.length > 0 &&

                            <>
                                {data.paginator.beforePages.map((item, index) =>
                                    <Button variant='text' onClick={() => {
                                        setData(false);
                                        getdata(item);
                                        window.scrollTo({
                                            top: 0,
                                            behavior: 'smooth'
                                        });
                                    }} key={index}>
                                        {item}
                                    </Button>
                                )}
                            </>

                        }


                        {/*active*/}

                        {
                            data.paginator.total > 0 &&
                            <Button variant='contained' >{data.paginator.currentPage}</Button>


                        }


                        {/*map nextPages*/}
                        {data.paginator.nextPages.length > 0 &&
                            <>
                                {data.paginator.nextPages.map((item, index) =>
                                    <Button variant='text' onClick={() => {
                                        setData(false);
                                        getdata(item);
                                        window.scrollTo({
                                            top: 0,
                                            behavior: 'smooth'
                                        });
                                    }} key={index}>
                                        {item}
                                    </Button>
                                )}
                            </>

                        }


                        {/*next page with tick*/}
                        {

                            data.paginator.nextPage > data.paginator.currentPage && (

                                <Button variant='text' onClick={() => getdata(data.paginator.nextPage)} >
                                    <NavigateBefore/>
                                </Button>
                            )


                        }


                    </Grid>
                }

            </Grid>


        </>
    )
}
export default blogslist;
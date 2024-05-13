import React, {useEffect, useRef, useState} from 'react';

import { MapContainer, TileLayer,Popup,Marker } from 'react-leaflet'
import Grid from '@mui/material/Unstable_Grid2'
import {getSplash} from "../../Services/services.js";
import {Spinner} from '../index.js'

const Contactmap = () => {
    const mapRef = useRef();
    // let data = [37.5244, 49.0552]
    // const position = [37.5244, 45.0552];

    const [data, setData] = useState(false)

    const getData = async () => {
        const response = await getSplash()
        if (response) {

            setData(response.data.info)


        } else {
            alert('مشکل در ارتباط با سرور')
        }
    }


    useEffect(() => {

        getData()
    }, []);


    let content
    if (data !==false){
        content =  <MapContainer ref={mapRef} className='shadowtwo' center={[data.lat,data.lng]} zoom={14} scrollWheelZoom={false} style={{height:'100%' , borderRadius:'0.9rem'}}>
            <TileLayer

                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[data.lat,data.lng]} >
                <Popup className='pinar'>
                    {data}
                </Popup>
            </Marker>

        </MapContainer>
    } else {
        content = <Spinner/>
    }





  return(



      <>
          <Grid xs={12} sx={{minHeight:'20rem'}}>

              {content}

          </Grid>






      </>
  )
}
export default Contactmap;


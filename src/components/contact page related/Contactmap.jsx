import React, {useEffect, useRef, useState} from 'react';

import { MapContainer, TileLayer,Popup,Marker } from 'react-leaflet'
import Grid from '@mui/material/Unstable_Grid2'

const Contactmap = () => {
    const mapRef = useRef();
    let data = [37.5244, 49.0552]
    const position = [37.5244, 45.0552];

    // if (dataNeeded!==false) {
    //     data =[Number(dataNeeded.lat) , Number(dataNeeded.lng)]
    //
    //
    // } else {
    //     data = [37.5244, 49.0552];
    // }
  return(



      <>
          <Grid xs={12} sx={{minHeight:'20rem'}}>

              <MapContainer ref={mapRef} className='shadowtwo' center={position} zoom={11.6} scrollWheelZoom={false} style={{height:'100%' , borderRadius:'0.9rem'}}>
                  <TileLayer

                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position} >
                      <Popup className='pinar'>
                          {data}
                      </Popup>
                  </Marker>

              </MapContainer>

          </Grid>






      </>
  )
}
export default Contactmap;


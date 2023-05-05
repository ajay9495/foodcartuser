import Wrapper from '../BaseComponents/Wrapper/Wrapper'
import Grid from '../BaseComponents/Grid/Grid'
import GridItem from '../BaseComponents/GridItem/GridItem'
import Row from '../BaseComponents/Row/Row'
import Col from '../BaseComponents/Col/Col'
import Section from '../BaseComponents/Section/Section'
import { Typography,Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import useMapLogic from './useMapLogic'
import './Map.css' 
import Header from './Header/Main/Header'
import HeaderOffset from './Header/HeaderOffset/HeaderOffset'
import React, {setState, useState} from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {lat: 9.9312328, lng: 76.3476287};

export default function Map() {

  const {   isButtonActive, centerLocation, locationState, change, mapRef,  
  zoomLevel, setZoomLevel, config, isLoaded, map, setMap, onLoad, onUnmount    } = useMapLogic();

  return (
    
    <Wrapper>

      <Header />
      <HeaderOffset />

      <div className={'ca-main-wrapper'}>
        
        <div className='map-content'>
          <HeaderOffset />
          <div>
          
            {(isLoaded)?
                
              <GoogleMap
                ref={mapRef}
                mapContainerStyle={containerStyle}
                center={locationState}
                zoom={zoomLevel}
                onLoad={onLoad}
                onUnmount={onUnmount}
                onClick={(e)=>{
                  change.changeLocation(e)
                }}
              >
                <Marker position={locationState} />
              </GoogleMap>                

              :
                <div></div>
            }          
          
          </div>
        </div>

        <div className='p-3 map-select-button'>
            
          <Button 
                fullWidth 
                disableElevation 
                sx={{padding:'1rem'}}
                variant='contained' 
                color='success' 
                onClick={(e)=>{ change.selectlocation() }}
                disabled={!isButtonActive}
                >
                  Select 
          </Button>
          
        </div>
      </div>

    </Wrapper>
    
  )
}

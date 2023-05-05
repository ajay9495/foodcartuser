import { useEffect } from "react";
import { useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useSharedConfig from '../../SharedModules/SharedConfig/SharedConfig';
import { useRef } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';


 
export default function useMapLogic(){ 

    let location = useLocation();
    let nearbyLocation = {lat: location.state.nearbyLocation.lat, lng: location.state.nearbyLocation.lng}

    
    const [locationState,setLocationState] = useState(nearbyLocation);
    const [centerLocation,setCenterLocation] = useState(nearbyLocation);
    const [isButtonActive,setIsButtonActive] = useState(false);
    const [map, setMap] = useState(null);

    const mapRef = useRef();
    const navigateTo = useNavigate();
    const {config} = useSharedConfig();
    const [zoomLevel,setZoomLevel] = useState(0);


 
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: config.API_Key
    });

    const onLoad = useCallback(function callback(map) {

        const bounds = new window.google.maps.LatLngBounds(locationState);
        map.fitBounds(bounds);
        setMap(map);
    
        setTimeout(()=>{
    
          setZoomLevel(15);
    
        },1000);
    
    }, []);

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, []);

    function changeLocation(e){  
        
      setLocationState({lat: e.latLng.lat(),lng: e.latLng.lng()});
      setIsButtonActive(true);
    }

    function selectlocation(){

        navigateTo(config.ROOT_PATH+'/Address',{state:{selectedLocation: locationState }}); 

    }
 
 


    const change ={
        selectlocation: selectlocation,
        changeLocation: changeLocation
    }


    return{
        setZoomLevel,
        zoomLevel,
        mapRef,
        change,
        locationState,
        centerLocation,
        isButtonActive,
        config,
        isLoaded,
        map,
        setMap,
        onLoad,
        onUnmount
    }

}
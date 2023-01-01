import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useSharedConfig from '../../SharedModules/SharedConfig/SharedConfig';
import { useRef } from 'react';


 
export default function useMapLogic(){ 


    const mapRef = useRef();

 
    let location = useLocation();
    let nearbyLocation = {lat: location.state.nearbyLocation.lat, lng: location.state.nearbyLocation.lng}
    const [locationState,setLocationState] = useState(nearbyLocation);
    const [centerLocation,setCenterLocation] = useState(nearbyLocation);
    const [isButtonActive,setIsButtonActive] = useState(false);
    const navigateTo = useNavigate();
    const {config} = useSharedConfig();
    const [zoomLevel,setZoomLevel] = useState(0);

 


    function changeLocation(e){  
        
      setLocationState({lat: e.latLng.lat(),lng: e.latLng.lng()});
      setIsButtonActive(true);
    }

    function selectlocation(){

        //uncomment
        // navigateTo(config.ROOT_PATH+'/Address',{state:{selectedLocation: locationState }}); 

        // mapRef.current.setZoom(0)
        console.log("selectlocation");
        console.log("hello");

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
        isButtonActive
    }

}
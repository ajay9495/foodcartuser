import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function useMapLogic(){ 


    let location = useLocation();
    let nearbyLocation = {lat: location.state.nearbyLocation.lat, lng: location.state.nearbyLocation.lng}
    const [locationState,setLocationState] = useState(nearbyLocation);
    const [centerLocation,setCenterLocation] = useState(nearbyLocation);
    const [isButtonActive,setIsButtonActive] = useState(false);
    const navigateTo = useNavigate();


    function changeLocation(e){  
        
      setLocationState({lat: e.latLng.lat(),lng: e.latLng.lng()});
      setIsButtonActive(true);
    }

    function selectlocation(){
        navigateTo('/Address',{state:{selectedLocation: locationState }});
    }




    const change ={
        selectlocation: selectlocation,
        changeLocation: changeLocation
    }


    return{
        change,
        locationState,
        centerLocation,
        isButtonActive
    }

}
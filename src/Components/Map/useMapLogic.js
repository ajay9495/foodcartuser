import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useSharedConfig from '../../SharedModules/SharedConfig/SharedConfig';



export default function useMapLogic(){ 

 
    let location = useLocation();
    let nearbyLocation = {lat: location.state.nearbyLocation.lat, lng: location.state.nearbyLocation.lng}
    const [locationState,setLocationState] = useState(nearbyLocation);
    const [centerLocation,setCenterLocation] = useState(nearbyLocation);
    const [isButtonActive,setIsButtonActive] = useState(false);
    const navigateTo = useNavigate();
    const {config} = useSharedConfig();




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
        change,
        locationState,
        centerLocation,
        isButtonActive
    }

}
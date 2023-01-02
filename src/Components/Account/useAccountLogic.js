import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {UserStore} from "../../Redux/UserSlice";
import useLocalStorage from "../../SharedModules/LocalStorage/useLocalStorage";
import useSharedConfig from "../../SharedModules/SharedConfig/SharedConfig";
import useAccountApi from "./useAccountApi";
import { useEffect,useState } from "react";
import useSharedLibrary from "../../SharedModules/SharedLibrary/useSharedLibrary";

export default function useAccountLogic(){

    const navigateTo = useNavigate();
    const dispatch = useDispatch();
    const {setLocalUserData,getLocalUserData} = useLocalStorage();
    const {config} = useSharedConfig();
    const { getUserData, processGetError } = useAccountApi();
    const {sharedLibrary} = useSharedLibrary();
    const [state,setState] = useState({user_name:""});

    let userData = {};
    let localUserData = {};
    function logoutUser(){

        localUserData = getLocalUserData();

        userData = {
            status: "loggedOut",
            store_id: "", 
            user_id: "",
            address: "",
            landmark: "",
            location: ""
        };

        
        setLocalUserData(userData);
        dispatch(UserStore.getAction_setUserData(userData));
        navigateTo(config.ROOT_PATH, { replace: true });

        document.location.href= config.ROOT_PATH;

    }

    function processUserData(data){
       
        if(data.status == "success"){

            console.log("success");

            setState({user_name: data.payload.name});

        }
        else{
            sharedLibrary.openDialogue("Failed to get the user data from the server.")
        }

    }

    useEffect(()=>{

        localUserData = getLocalUserData();

        getUserData(localUserData.user_id)
        .then((data)=>{

            processUserData(data);

        })
        .catch((err)=>{
            processGetError(err);
        });

    },[]);

    return{
        state,
        logoutUser
    }




}


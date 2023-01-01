import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {UserStore} from "../../Redux/UserSlice";
import useLocalStorage from "../../SharedModules/LocalStorage/useLocalStorage";
import useSharedConfig from "../../SharedModules/SharedConfig/SharedConfig";
import useAccountApi from "./useAccountApi";
import { useEffect } from "react";

export default function useAccountLogic(){

    const navigateTo = useNavigate();
    const dispatch = useDispatch();
    const {setLocalUserData,getLocalUserData} = useLocalStorage();
    const {config} = useSharedConfig();
    const { getUserData, processGetError } = useAccountApi();

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

        document.location.href= config.ROOT_PATH;

    }

    useEffect(()=>{

        localUserData = getLocalUserData();

        getUserData(localUserData.user_id)
        .then((data)=>{
            
            console.log("useEffect");
            console.log("hello daata");
            console.log(data);
        })
        .catch((err)=>{
            processGetError(err);
        });

    },[]);

    return{
        logoutUser
    }




}


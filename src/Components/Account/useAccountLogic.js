import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {UserStore} from "../../Redux/UserSlice";
import useLocalStorage from "../../SharedModules/LocalStorage/useLocalStorage";

export default function useAccountLogic(){

    const navigateTo = useNavigate();
    const dispatch = useDispatch();
    const {setLocalUserData,getLocalUserData} = useLocalStorage();

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

        document.location.href="/";

    }

    return{
        logoutUser
    }
}


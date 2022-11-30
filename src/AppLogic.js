import {UserStore} from './Redux/UserSlice';
import { useSelector,useDispatch } from 'react-redux';
import useLocalStorage from './SharedModules/LocalStorage/useLocalStorage';
import { useEffect } from 'react';

export default function AppLogic(){

    function setUserState(){
        console.log("hello userState");
        console.log(userState);
    }

    const userState = useSelector(UserStore.getUserState);
    const dispatch = useDispatch();
    const {getLocalUserData} = useLocalStorage();

    let localUserData  = {};
    let localUserState = {};


    useEffect(()=>{

        localUserData  = getLocalUserData();

        if(localUserData != null){

            localUserState = {data:localUserData}
            dispatch(UserStore.getAction_setUserData(localUserState));
        } 
        else{
            localUserState = {data:{status:'toRegister',user_id:'',store_id:''}}
            dispatch(UserStore.getAction_setUserData(localUserState));
        }

    },[])

    return{
        setUserState,
        userState
    }


}
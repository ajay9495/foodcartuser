import { useState } from "react";

export default function useLocalStorage(){

    let userDataStr = "";
    let isFirstLoad = true;
    let INITIAL_CURRENT_USER = {status:"",store_id:"",user_id:"",address:"",landmark:"",location:{lat:"",lng:""}};
    const [currentLocalUserData, setCurrentLocalUserData] = useState(INITIAL_CURRENT_USER);



    function setLocalUserData(data){

        window.localStorage.setItem("userData",JSON.stringify(data))
    }

    function getLocalUserData(){

        userDataStr = window.localStorage.getItem("userData");

        if(userDataStr){
            return JSON.parse(userDataStr);
        }
        else{
            return {status:"toRegister",user_id:"",store_id:""};
        }
        
    }


    return{
        setLocalUserData,
        getLocalUserData,
        currentLocalUserData
    }


}

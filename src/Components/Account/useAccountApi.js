import useSharedLibrary from "../../SharedModules/SharedLibrary/useSharedLibrary";
import useSharedConfig from "../../SharedModules/SharedConfig/SharedConfig";
  

export default function useAccountApi(){

    const {config} = useSharedConfig();
    const {sharedLibrary} = useSharedLibrary();

    let request;
    let REQUEST_OPTIONS;
    let END_POINT;
    let BASE_URL = config.CURRENT_BASE_URL;



    function getUserData(userID){

        END_POINT = BASE_URL+'getUserData?user_id='+userID;

        REQUEST_OPTIONS = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };

        request = new Request(END_POINT,REQUEST_OPTIONS);

        return fetch(request)
        .then((response) => response.json());

    }

    function processGetError(err){

        sharedLibrary.openDialogue("Could not connect to the server. Check the internet connection.");
    }

    return{
        getUserData,
        processGetError
    }


}
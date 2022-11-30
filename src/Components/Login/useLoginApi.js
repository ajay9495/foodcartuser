import useSharedLibrary from "../../SharedModules/SharedLibrary/useSharedLibrary";
import useSharedConfig from  "../../SharedModules/SharedConfig/SharedConfig"
  
export default function useLoginApi(){

    const {config} = useSharedConfig();
    const {sharedLibrary} = useSharedLibrary();

    let request;
    let REQUEST_OPTIONS;
    let END_POINT;
    let BASE_URL = config.CURRENT_BASE_URL;



    function sendLoginData(payload){

        END_POINT = BASE_URL+'LoginUser';

        REQUEST_OPTIONS = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(payload)
        };
 
        request = new Request(END_POINT,REQUEST_OPTIONS);

        return fetch(request)
        .then((response) => response.json());

    }

    function processApiError(err){

        sharedLibrary.openDialogue("Could not connect to the server. Check the internet connection.");
    }

    return{
        sendLoginData,
        processApiError
    }
}
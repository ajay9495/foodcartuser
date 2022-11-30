import useSharedConfig from "../../SharedModules/SharedConfig/SharedConfig";
import useSharedLibrary from "../../SharedModules/SharedLibrary/useSharedLibrary";


export default function useOrdersApi(){

    const {config} = useSharedConfig();
    const {sharedLibrary} = useSharedLibrary();

    let request;
    let REQUEST_OPTIONS;
    let END_POINT;
    let BASE_URL = config.CURRENT_BASE_URL;

    function getOrdersData(USER_ID){

        END_POINT = BASE_URL+'getOrdersData?user_id='+USER_ID;

        REQUEST_OPTIONS = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };

        request = new Request(END_POINT,REQUEST_OPTIONS);

        return fetch(request)
                .then((response) => response.json());

    }

    function processApiError(err){
        
        sharedLibrary.openDialogue("Could not connect to the server. Check the internet connection.");

    }

    return{
        getOrdersData,
        processApiError
    }


}
import useSharedLibrary from "../../SharedModules/SharedLibrary/useSharedLibrary";
import useSharedConfig from  "../../SharedModules/SharedConfig/SharedConfig"
  

export default function useCategoryApi(){

    const {config} = useSharedConfig();
    const {sharedLibrary} = useSharedLibrary();

    let request;
    let REQUEST_OPTIONS;
    let END_POINT;
    let BASE_URL = config.CURRENT_BASE_URL;

    function loadCategoryData(STORE_ID){

        END_POINT = BASE_URL+'getCategoryDataByStoreId?store_id='+STORE_ID;

        REQUEST_OPTIONS = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };

        request = new Request(END_POINT,REQUEST_OPTIONS);

        return fetch(request)
        .then((response) => response.json());

    }

    function sendVisitorData(payload){

        END_POINT = BASE_URL+'postVisitorData';

        REQUEST_OPTIONS = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(payload)
        };
 
        request = new Request(END_POINT,REQUEST_OPTIONS);

        return fetch(request)
        .then((response) => response.json());

    }

    function processGetError(err){

        sharedLibrary.openDialogue("Could not connect to the server. Check the internet connection.");
    }

    return{
        sendVisitorData,
        loadCategoryData,
        processGetError
    }


}
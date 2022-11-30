import useSharedLibrary from "../../SharedModules/SharedLibrary/useSharedLibrary";
import useSharedConfig from  "../../SharedModules/SharedConfig/SharedConfig"

export default function useCategoryApi(){

    const {config} = useSharedConfig();
    const {sharedLibrary} = useSharedLibrary();

    let request;
    let REQUEST_OPTIONS;
    let END_POINT; 
    let BASE_URL = config.CURRENT_BASE_URL;

 

 
    function getProductListData(STORE_ID,CATEGORY_ID){

        END_POINT = BASE_URL+'getProductDataByStoreId?store_id='+STORE_ID+'&category_id='+CATEGORY_ID;

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
        getProductListData,
        processApiError
    }


}
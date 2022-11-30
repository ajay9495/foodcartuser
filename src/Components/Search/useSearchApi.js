import useSharedLibrary from "../../SharedModules/SharedLibrary/useSharedLibrary";
import useSharedConfig from  "../../SharedModules/SharedConfig/SharedConfig"


export default function useSearchApi(){

    const {config} = useSharedConfig();
    const {sharedLibrary} = useSharedLibrary();

    let request;
    let REQUEST_OPTIONS;
    let END_POINT;
    let BASE_URL = config.CURRENT_BASE_URL;

    function getSearchData(keyword,storeId){

        END_POINT = BASE_URL+'searchProduct?search='+keyword+'&store_id='+storeId;

        REQUEST_OPTIONS = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };

        request = new Request(END_POINT,REQUEST_OPTIONS);

        return fetch(request)
        .then((response) => response.json());

    }

    function processApiError(err){
        console.log("there was an error !");
        console.log(err);
    }

    return{
        getSearchData,
        processApiError
    }


}
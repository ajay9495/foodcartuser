
export default function useSharedConfig(){
 
    // //remote service worker settings
    // const ROOT_PATH = "/apps/restaurant/restaurant-user";    
    // const SERVICE_WORKER_PATH = "https://www.homeshope.shop/apps/restaurant/restaurant-user/ServiceWorker.js";
    // const SERVICE_WORKER_SCOPE = "https://www.homeshope.shop/apps/restaurant/restaurant-user/";

    const ROOT_PATH = "/apps/restaurant/restaurant-user";    
    const SERVICE_WORKER_PATH = "http://localhost:3000/apps/restaurant/restaurant-user/ServiceWorker.js";
    const SERVICE_WORKER_SCOPE = "http://localhost:3000/apps/restaurant/restaurant-user/";

    // const ROOT_PATH = "/apps/restaurant/restaurant-user";    
    // const SERVICE_WORKER_PATH = "http://localhost/apps/restaurant/restaurant-user/ServiceWorker.js";
    // const SERVICE_WORKER_SCOPE = "http://localhost/apps/restaurant/restaurant-user/";


    const LOCAL_BASE_URL = 'http://localhost/projects/food-cart-api/public/api/';
    const REMOTE_BASE_URL = 'https://homeshope.xyz/public/api/';
    const REMOTE_BASE_URL_TWO = 'http://139.59.93.2/public/api/';

    const LOCAL_CATEGORY_IMAGE_BASE = "http://localhost/projects/food-cart-api/storage/app/public/categories/";
    const REMOTE_CATEGORY_IMAGE_BASE = "https://homeshope.xyz/storage/app/public/categories/";
    const REMOTE_CATEGORY_IMAGE_BASE_TWO = "http://139.59.93.2/storage/app/public/categories/";
 
    const LOCAL_PRODUCT_IMAGE_BASE = "http://localhost/projects/food-cart-api/storage/app/public/products/";
    const REMOTE_PRODUCT_IMAGE_BASE = "https://homeshope.xyz/storage/app/public/products/";
    const REMOTE_PRODUCT_IMAGE_BASE_TWO = "http://139.59.93.2/storage/app/public/products/";

    //remote settings
    const CURRENT_BASE_URL = LOCAL_BASE_URL;
    const CURRENT_CATEGORY_IMAGE_BASE = LOCAL_CATEGORY_IMAGE_BASE;
    const CURRENT_PRODUCT_IMAGE_BASE = LOCAL_PRODUCT_IMAGE_BASE;
  
    // //local settings
    // const CURRENT_BASE_URL = LOCAL_BASE_URL;
    // const CURRENT_CATEGORY_IMAGE_BASE = LOCAL_CATEGORY_IMAGE_BASE;
    // const CURRENT_PRODUCT_IMAGE_BASE = LOCAL_PRODUCT_IMAGE_BASE;

    const ORDER_ID_MASK = 1111;
    const STORE_ID = 1;
    const API_Key = "AIzaSyCz5Unp7Cl4v-Q9ax43vokOK6ovfO5ykSg";
    const RAZORPAY_API_KEY = "rzp_test_EaHecCOig7TTPg";

    const config = {
        CURRENT_BASE_URL: CURRENT_BASE_URL,
        CURRENT_CATEGORY_IMAGE_BASE: CURRENT_CATEGORY_IMAGE_BASE,
        CURRENT_PRODUCT_IMAGE_BASE: CURRENT_PRODUCT_IMAGE_BASE,
        ORDER_ID_MASK: ORDER_ID_MASK,
        STORE_ID: STORE_ID,
        ROOT_PATH: ROOT_PATH,
        SERVICE_WORKER_PATH: SERVICE_WORKER_PATH,
        SERVICE_WORKER_SCOPE: SERVICE_WORKER_SCOPE,
        API_Key: API_Key,
        RAZORPAY_API_KEY: RAZORPAY_API_KEY
    }


    return{config}

}











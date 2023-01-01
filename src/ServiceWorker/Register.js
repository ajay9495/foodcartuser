import useSharedConfig from "../SharedModules/SharedConfig/SharedConfig";


export default function TestRegister(){


    const {config} = useSharedConfig();

    window.addEventListener('load',()=>{  
        
       
        if('serviceWorker' in navigator){


            navigator.serviceWorker
            .register(config.SERVICE_WORKER_PATH,{scope: config.SERVICE_WORKER_SCOPE})
            .then( reg=>    {

                console.log("sw scope");
                console.log(reg.scope);
            })
            .catch(err =>   console.log(`error ${err}`)     );
            


        }
        else{

            console.log("The device does not support this application");
        }
    
    });

}


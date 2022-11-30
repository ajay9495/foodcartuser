

export default function TestRegister(){


    if('serviceWorker' in navigator){
    
        window.addEventListener('load',()=>{    

            navigator.serviceWorker
            .register('./ServiceWorker.js')
            .then( reg=>    console.log("sw registered")    )
            .catch(err =>   console.log(`error ${err}`)     )
        
        })
    }
    

}


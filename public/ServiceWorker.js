


const cacheName = 'v-1-1-5';
const APP_HOST_NAME = "www.homeshope.shop";
let fetch_url = "";
let url = {};


this.addEventListener('install', function(event) {

    console.log("sw installed");

});


this.addEventListener('activate',(event)=>{
    console.log("sw activated");

    event.waitUntil(
        caches.keys()
        .then((existingCacheList)=>{

            return Promise.all(
                existingCacheList.map((existingCacheName)=>{
                    
                    if(existingCacheName != cacheName){
                        
                        return caches.delete(existingCacheName);

                    }
                })
            )
           
        })
    )


});


this.addEventListener('fetch',(event)=>{


    fetch_url = event.request.url;

    url =  new URL(fetch_url);

    if(url.hostname == APP_HOST_NAME){

        event.respondWith(

            caches.match(event.request)
            .then((response)=>{


                if (response) {

                    return response;
                }
                else{

                    caches.open(cacheName)
                    .then((cache)=>{

                        cache.add(event.request);
                    })
                    .catch((err)=>{
                        console.log(err);
                    });

                    return fetch(event.request);

                }


            })
            .catch((err)=>{

                return(err);
            })

        )
        
    }

});




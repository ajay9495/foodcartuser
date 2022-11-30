



const cacheName = 'v2';


this.addEventListener('install', function(event) {

    console.log("sw installed");

})


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


})


this.addEventListener('fetch',(event)=>{

    console.log("----------addEventListener triggered---------------");

    event.respondWith(

        caches.match(event.request)
        .then((response)=>{

            if (response) return response;

            caches.open(cacheName)
            .then((cache)=>{

                cache.add(event.request);
                console.log("caches added from fetch");
            })

            console.log("----------responce triggered from fetch---------------");
            return fetch(event.request);

        })
    )
})




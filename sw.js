self.addEventListener("install", (event) => {
    console.log("installed", event)
    self.skipWaiting();
})
self.addEventListener("activate", (event) => {
    console.log("activated", event)
})
self.addEventListener("fetch", (event) => {
    console.log("fetch", event)
})
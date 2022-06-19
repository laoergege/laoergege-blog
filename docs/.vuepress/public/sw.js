self.addEventListener('fetch', function (event) {
    const { request } = event;
    if (request.url.includes('github.com')) {
        console.log(request)
        event.waitUntil(Promise.reject(123))
    }
})
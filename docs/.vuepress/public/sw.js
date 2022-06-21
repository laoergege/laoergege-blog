self.addEventListener('fetch', function (event) {
    const { request } = event;
    if (request.url.includes('github.com/login/oauth/access_token')) {
        console.log(request, request.body)
        const _request = new Request("https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token", {
            ...request
        })
        event.waitUntil(fetch(_request))
    }
})
self.addEventListener('fetch', function (event) {
    console.log(event)

    const request = { ...event.request }

})
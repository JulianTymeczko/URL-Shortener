

let shorteningURL = `https://api.shrtco.de/v2/shorten?url=${userInput.value}`
    fetch(shorteningURL)
        .then(function (response) {
            return response.json()
        })
        .then (function (data){
            console.log(data)
            console.log(data.result.short_link)  
        })


        
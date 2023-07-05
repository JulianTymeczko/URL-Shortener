// for the mobile navigation, note* if you decide to change it make it clear the image and replace it with a div containing all of the items.
let mobileNavigationButton = document.getElementById("dropdownButton")
let replacedImage = document.getElementById("replaced-image")
let dropdownList = document.getElementsByClassName("dropdownMenu")


mobileNavigationButton.addEventListener("click", function (){
    let dataNumber = replacedImage.getAttribute("data-number")
    if (dataNumber === "2"){
       
        replacedImage.setAttribute("data-number", "1")
        replacedImage.setAttribute("style", "display:inline-block;")
        dropdownList[0].setAttribute("style", "display: none;")
    }
    else if (dataNumber === "1"){
      
        replacedImage.setAttribute("data-number", "2")
        replacedImage.setAttribute("style", "display:none;")
        dropdownList[0].setAttribute("style", "display: inline-block;")}

   
    

})
  
// starting to work on mobile navigation again



let errorMessage = document.getElementById("error-message")
let shortenIt = document.getElementById("search-bar-button")
let userInput = document.querySelector("input")
let pastSearchesTop = document.getElementById("statistics-top")


shortenIt.addEventListener("click", function () {
    if (userInput.value == ""){
        userInput.setAttribute("style", "border: 2px solid hsl(0, 87%, 67%); ")
       userInput.classList.add("error-placeholder-text")
        errorMessage.setAttribute("style", "display: inline-block")
        return;
    }
   
    userInput.setAttribute("style", "border: none; ")
    userInput.classList.remove("error-placeholder-text")
    errorMessage.setAttribute("style", "display: none")

    let pastSearches = document.createElement("div")
    pastSearches.setAttribute("class", "past-searches")
    pastSearchesTop.insertAdjacentElement("afterend", pastSearches)
    let fullURL = document.createElement("h1")
    fullURL.setAttribute("id", "full-URL")
    let shortURL = document.createElement("h2")
    shortURL.setAttribute("id", "short-URL")
    let copyButton = document.createElement("button")
    copyButton.setAttribute("id", "copy-button")
    copyButton.textContent = "Copy"


    pastSearches.appendChild(fullURL)
    pastSearches.appendChild(shortURL)
    pastSearches.appendChild(copyButton)

    let shorteningURL = `https://api.shrtco.de/v2/shorten?url=${userInput.value}`
    fetch(shorteningURL)
        .then(function (response) {
            return response.json()
           
        })
        .then(function (data) {
            fullURL.textContent = userInput.value
            shortURL.textContent = data.result.short_link
            
            copyButton.addEventListener("click", function () {
              
                let shortURLText = shortURL.textContent
                navigator.clipboard.writeText(shortURLText)
                 copyButton.textContent = "Copied!"
                copyButton.setAttribute("style", "background-color: hsl(257, 27%, 26%);")

                setTimeout(function () {
                    copyButton.textContent = "Copy"
                    copyButton.setAttribute("style", "background-color: hsl(180, 66%, 49%);")
                }, 1000)
            })
        })
        

})





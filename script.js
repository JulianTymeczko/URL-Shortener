// for the mobile navigation
function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.style.display = dropdownMenu.style.display === "none" ? "block" : "none";
  }
  




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





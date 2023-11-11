let login = document.querySelector(".dropdown article header p a")
console.log(login)

let popUp = document.querySelector('#loginPopUp')
console.log(popUp)

let cancel = document.querySelector('#loginBg span h1')
console.log(cancel)

let bg = document.querySelector('#loginBg')
console.log(bg)

login.onclick = function()
{
    bg.style.display = 'block';
}

cancel.onclick = function()
{
    bg.style.display = 'none'
}
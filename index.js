document.querySelector('.burger').addEventListener("click", toggleOpen)

function toggleOpen() {
    const list = document.querySelector(".nav-links")
    list.classList.add("active")
    console.log("active")
}

document.querySelector('.close').addEventListener("click", toggleClosed)

function toggleClosed() {
    const listClose = document.querySelector(".nav-links")
    listClose.classList.remove("active")
    console.log("closed")
}
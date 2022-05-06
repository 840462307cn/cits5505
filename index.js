$(document).ready(function(){
    $("#hint-button").click(function(){
        $("p").toggle(1000);
    })
});


document.getElementById("key").addEventListener("click", (e) => {
    const target = e.target
    
    if (!target.classList.contains("key")) {
        return
    }
    let key = target.textContent

    if (key === "Del") {
        key = "Backspace"
    } 

    document.dispatchEvent(new KeyboardEvent("keyup", {'key': key}))
})

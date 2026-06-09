const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        toggleBtn.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme","light");
    }else{
        toggleBtn.textContent = "☀️ Light Mode";
        localStorage.setItem("theme","dark");
    }

});

if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
    toggleBtn.textContent = "🌙 Dark Mode";
}

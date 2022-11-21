document.addEventListener('DOMContentLoaded', () => {
    for (const el of document.querySelectorAll("[placeholder][data-slots]")) {
        const pattern = el.getAttribute("placeholder"),
            slots = new Set(el.dataset.slots || "_"),
            prev = (j => Array.from(pattern, (c, i) => slots.has(c) ? j = i + 1 : j))(0),
            first = [...pattern].findIndex(c => slots.has(c)),
            accept = new RegExp(el.dataset.accept || "\\d", "g"),
            clean = input => {
                input = input.match(accept) || [];
                return Array.from(pattern, c =>
                    input[0] === c || slots.has(c) ? input.shift() || c : c
                );
            },
            format = () => {
                const [i, j] = [el.selectionStart, el.selectionEnd].map(i => {
                    i = clean(el.value.slice(0, i)).findIndex(c => slots.has(c));
                    return i < 0 ? prev[prev.length - 1] : back ? prev[i - 1] || first : i;
                });
                el.value = clean(el.value).join``;
                el.setSelectionRange(i, j);
                back = false;
            };
        let back = false;
        el.addEventListener("keydown", (e) => back = e.key === "Backspace");
        el.addEventListener("input", format);
        el.addEventListener("focus", format);
        el.addEventListener("blur", () => el.value === pattern && (el.value = ""));
    }
});

let input = document.getElementById('promo')



input.addEventListener('change', function(){
    let promo = document.getElementById('promo-btn')
    let value = input.value.trim()
    if(value.length > 0){
        promo.removeAttribute("disabled")  
    }else{
       return false 
    }
    console.log(value);
})

var menuBtn = document.getElementById("menuBtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")
sideNav.style.right == "-250px";
menuBtn.onclick = function () {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src = "https://i.postimg.cc/cJRss6PP/close.png";
        sideNav.style.float = "right"
    } else {
        sideNav.style.right = "-250px";
        menu.src = "../../assets/icons/hamurger.png";
    }
}

$(document).ready(function () {

    $("a").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

let offline = document.getElementById("offline");
let online = document.getElementById("online")

offline.addEventListener("click", toggle)
online.addEventListener("click", toggle)
let deliveryType = null
function toggle(e) {
    deliveryType = e.target.textContent
    if (deliveryType === "Онлайн") {
        online.classList.add("payActive")
        offline.classList.remove("payActive");
    } else {
        offline.classList.add("payActive")
        online.classList.remove("payActive");
    }
}






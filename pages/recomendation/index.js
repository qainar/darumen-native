window.onscroll = function() {ScrollHead()}

function ScrollHead(){
    let header = document.getElementById('header')
    let headOncroll = header.offsetTop
    let head = document.getElementById('head')
    if(window.pageYOffset > headOncroll){
        header.classList.add('header_onScroll')
        head.classList.add('haed_onScroll')
    }else{
        header.classList.remove('header_onScroll')
        head.classList.remove('head_onScroll')
    }
    console.log(header);
}



let modal = document.getElementById('myModal');
let btn = document.getElementById("recCat");
let span = document.getElementsByClassName("close")[0];


// btn.onclick = function () {
//     modal.style.display = "block";
// }


span.onclick = function () {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function OpenModal() {
    modal.style.display = 'block'
}

const CloseModal = () => {
    modal.style.display = 'none'
}

let Dose = document.getElementById('Dose')
let doseBtn = document.getElementById('dose-btn')
let close = document.getElementsByClassName('close-d')[0]



doseBtn.onclick = function () {
    Dose.style.display = "block";
}


close.onclick = function () {
    Dose.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == Dose) {
        Dose.style.display = "none";
    }
}




let mDoseBtn = document.getElementById('m-doseBtn')

mDoseBtn.onclick = () => {
    Dose.style.display = 'block'
    modal.style.display = 'none'
}



// function Fc (params) {
//     let dose = document.querySelectorAll('.modalD')
//     let doseBtn = document.querySelectorAll('.card_button')
//     let close = document.querySelectorAll('.close-d')
    
//     // doseBtn.forEach((dos, idx) => {
//     //     if(params === idx){
//     //         // if(dos.style.display === 'none'){
//     //         //     dos.style.display = 'block'
//     //         // } else{
//     //         //     dos.style.display = 'none'
//     //         // }
//     //         if(dose.style.display === 'none'){
//     //             dose.style.display = 'block'
//     //         }
//     //     }
//     // })

//     Array.from(dose).forEach((x, idx) => {
//         if(params === idx){
//             if(x.style.display === 'none'){
//                 x.style.display = 'block'
//             }
//         }
        
//     })
//     console.log('heelo' + params);
// }


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


function Lol (num){
    let dots = document.querySelectorAll('.dots')
    let more = document.querySelectorAll('.more')
    let myLink = document.querySelectorAll('.desc_link')

    dots.forEach((dot,idx)=>{
        if(num === idx){
            if(dot.style.display === 'none'){
                dot.style.display = 'inline'
                myLink[idx].innerHTML = 'еще'
                more[idx].style.display = 'none'
            } else{
                dot.style.display = 'none'
                myLink[idx].innerHTML = 'скрыть'
                more[idx].style.display = 'inline'
            }    
        }
    })
}


function Reset(num){
    let closeCard = document.querySelectorAll('.fa-xmark')
    let cards = document.querySelectorAll('.cards')
    let rotate = document.querySelectorAll('.fa-rotate-left')
    let count = 0
    rotate.forEach((key,idx) => {
        if(num === idx){
            if(key.style.display === 'none'){
                key.style.display = 'block'
                closeCard[idx].style.display = 'none'
                cards[idx].classList.toggle('day')
            }
            else{
                key.style.display = 'none'
                closeCard[idx].style.display = 'block'
                cards[idx].classList.toggle('day')
            }
        }
    })
}



window.onscroll = function() {ScrollHead()}

function ScrollHead(){
    let header = document.getElementById('header')
    let headOncroll = header.offsetTop
    let head = document.getElementById('head')
    if(window.pageYOffset > headOncroll){
        header.classList.add('header_onScroll')
        head.classList.add('haed_onScroll')
    }else{
        header.classList.remove('header_onScroll')
        head.classList.remove('head_onScroll')
    }
    console.log(header);
}





let divs = document.querySelectorAll('article'), i = 0;
let btn = document.getElementById('up')
let back = document.getElementById('back')
let step = 1
let progress = document.getElementById('progress')
let circles = document.querySelectorAll('.circle')
let conf = document.getElementById('conf')
let currentActive = 1
up.onclick = function () {
    divs[i].style.display = "none";
    if (i < divs.length - 1) {
        i++;
    } else {
        i = 0
    }
    setTextNext(i)

    divs[i].style.display = "";
    currentActive++
    if(currentActive> circles.length){
        currentActive = circles.length
    }
    update()
}

function setTextNext(i) {
    if (i === 0) {
        btn.textContent = 'Пройти опрос'
        conf.style.display = 'block'
    } else {
        btn.textContent = 'Продолжить'
        conf.style.display = 'none'
    }
}
back.onclick = function () {
    if (i > 0) {
        back.removeAttribute('href')
        divs[i].style.display = "none";
        i--;
        setTextNext(i)
        divs[i].style.display = "";
        
    } else {
        back.setAttribute('href', '../main-page/index.html')
    }
    currentActive--
    if(currentActive < 1) currentActive = 1
    update()
}


let female = document.getElementById("female")
let male = document.getElementById("male")
female.addEventListener("click", toggle)
male.addEventListener("click", toggle)
let type = null
function toggle(e) {
    type = e.target.textContent
    if (type === "female") {
        female.classList.add("genderHover")
        male.classList.remove("genderHover")
    }
    else {
        male.classList.add("genderHover")
        female.classList.remove("genderHover")
    }
}


// btn.addEventListener('click', function(){
//     currentActive++
//     if(currentActive> circles.length){
//         currentActive = circles.length
//     }
//     update()
// })
// back.addEventListener('click', function(){
//     currentActive--
//     if(currentActive < 1) currentActive = 1
//     update()
// })

function update(){
    circles.forEach((circ, idx) => {
        if(idx < currentActive){
            circ.classList.add('active')
        }else {
            circ.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active');
    progress.style.width=((actives.length -1) / (circles.length-1))*100 + '%';
    
    let percent = progress.style.width
}

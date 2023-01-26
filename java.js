const rasm = document.querySelector(".rasm")
const big__box4 = document.querySelector(".big__box4")
const box__item = document.querySelector(".box__item")
// const icon1 = document.querySelector(".icon1")
// const icon2 = document.querySelector(".icon2")
// const icon3 = document.querySelector(".icon3")
const icon4 = document.querySelector(".icon4")



rasm.addEventListener("click", function () {
    big__box4.classList.add('active')
})
// icon1.addEventListener("click", function () {
//     big__box4.classList.add('active')
// })
// icon2.addEventListener("click", function () {
//     big__box4.classList.add('active')
// })
// icon3.addEventListener("click", function () {
//     big__box4.classList.add('active')
// })
icon4.addEventListener("click", function () {
    big__box4.classList.add('active')
})
box__item.addEventListener("click", function () {
    big__box4.classList.remove('active')
})
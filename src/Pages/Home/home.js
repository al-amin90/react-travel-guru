const handleSlider = () => {
    const value = document.getElementsByClassName("swiper-pagination-current")[0].innerText;
    console.log(value);
}

const element = document.getElementsByClassName("swiper-button-prev");
// console.log(element);
// element.addEventListener("click", () => {
//     console.log("object");
// })

export default handleSlider;
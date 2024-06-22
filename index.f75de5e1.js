"use strict";
const list = document.querySelector("ul");
const largeImg = document.getElementById("largeImg");
list.addEventListener("click", (e)=>{
    e.preventDefault();
    const img = e.target.closest(".list-item__link");
    if (!img) return;
    const link = img.closest("a");
    largeImg.src = link.href;
});

//# sourceMappingURL=index.f75de5e1.js.map

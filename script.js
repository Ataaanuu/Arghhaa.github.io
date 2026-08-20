const categories =
    document.querySelectorAll(".category");

categories.forEach(category => {

    category.addEventListener("click", () => {

        const children =
            category.parentElement
            .querySelector(".children");

        children.classList.toggle("hidden");

    });

});

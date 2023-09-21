const stars = document.querySelectorAll(".rating_box i");

stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
        const isActive = star.classList.contains("active");
        stars.forEach((star) => star.classList.remove("active"));
        if (!isActive) {
            stars.forEach((star, index2) => {
                index1 >= index2 ? star.classList.add("active") : null;
            });
        }
    });
});

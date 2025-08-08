document.addEventListener("DOMContentLoaded", function () {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach((question, index) => {
        const answer = question.nextElementSibling;

        if (index === 0) {
            question.classList.add("active");
            answer.style.display = "block";
        }

        question.addEventListener("click", function () {
            this.classList.toggle("active");

            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});
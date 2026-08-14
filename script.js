/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const mobileNavigation =
    document.getElementById("mobileNavigation");


menuButton.addEventListener("click", () => {

    mobileNavigation.classList.toggle("active");

});


document
    .querySelectorAll(".mobile-navigation a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileNavigation.classList.remove("active");

        });

    });



/* =====================================================
   PROJECT INFORMATION
===================================================== */

const projects = {

    recruitment: {

        category: "AI • NLP • WEB APPLICATION",

        title: "AI Recruitment System",

        description:
            "A web-based recruitment platform that helps recruiters analyze resumes and identify candidates who best match a job description.",

        details:
            "The system uses TF-IDF and cosine similarity for resume-job matching, combined with skill and experience scoring. The final score combines these signals to rank candidates. The platform includes recruiter, candidate and admin functionality and uses Python, Flask, SQL and frontend technologies."

    },


    sales: {

        category: "DATA ANALYSIS",

        title: "Sales & Profit Analysis",

        description:
            "An exploratory data analysis project using retail sales data to understand sales, profit, discounts and business performance.",

        details:
            "The analysis explores relationships between sales, profit, discounts, product categories and other variables using Python, Pandas, NumPy, Matplotlib and Seaborn. The goal is to turn raw business data into understandable insights."

    },


    prediction: {

        category: "MACHINE LEARNING",

        title: "Profit Margin Prediction",

        description:
            "A machine learning project focused on predicting profit margin and comparing regression models.",

        details:
            "The project compares Linear Regression and Random Forest Regression models. The workflow includes feature preparation, model training and evaluation using R² and MAE. The analysis also explores which variables have the greatest influence on profit margin."

    },


    wistie: {

        category: "WEB DEVELOPMENT",

        title: "Wistie",

        description:
            "A web development project focused on creating an engaging and user-friendly digital experience.",

        details:
            "Wistie demonstrates frontend development using HTML, CSS and JavaScript, with an emphasis on creating an interactive and visually engaging web experience."

    },


    powerbi: {

        category: "BUSINESS INTELLIGENCE",

        title: "Power BI Dashboard",

        description:
            "An interactive dashboard that transforms raw data into useful visual insights.",

        details:
            "The dashboard demonstrates data cleaning, visualization and business intelligence using Power BI and DAX measures. It focuses on presenting important metrics in an accessible and interactive way."

    }

};



/* =====================================================
   PROJECT MODAL
===================================================== */

const projectButtons =
    document.querySelectorAll(".project-button");

const modal =
    document.getElementById("projectModal");

const modalClose =
    document.getElementById("modalClose");

const modalCategory =
    document.getElementById("modalCategory");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalDetails =
    document.getElementById("modalDetails");



projectButtons.forEach(button => {

    button.addEventListener("click", () => {

        const project =
            projects[button.dataset.project];

        if (!project) return;


        modalCategory.textContent =
            project.category;

        modalTitle.textContent =
            project.title;

        modalDescription.textContent =
            project.description;

        modalDetails.textContent =
            project.details;


        modal.classList.add("active");


        document.body.style.overflow =
            "hidden";

    });

});



/* =====================================================
   CLOSE MODAL
===================================================== */

function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


modalClose.addEventListener(
    "click",
    closeModal
);


modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {

            closeModal();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);
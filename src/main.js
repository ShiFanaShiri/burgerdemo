const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeIcon = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");


navLink.forEach(link => link.addEventListener ("click", () => {
    navMenu.classList.add('hidden')
})
);

closeIcon.addEventListener("click", () => {
    navMenu.classList.add('hidden');
}) 

hamburger.addEventListener("click", () => {
    navMenu.classList.remove('hidden')
}) 


const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll('.item_wrap');
const food = document.querySelectorAll('.food');
const snack = document.querySelectorAll('.snack');
const beverage = document.querySelectorAll('.beverage');


tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => {
            tab.classList.remove("active")
        })
        tab.classList.add('active')

        const tabval = tab.getAttribute('data-tabs')

        all.forEach(item => {
            item.style.display = 'none'
        })

        if (tabval == 'food') {
            food.forEach(item => {
                item.style.display = 'block'
            })
     
        }
        else if (tabval == 'snack') {
            snack.forEach(item => {
                item.style.display = 'block'
            })
     
        }
        else if (tabval == 'beverage') {
            beverage.forEach(item => {
                item.style.display = 'block'
            })
     
        }
        else {
            all.forEach(item => {
                item.style.display = 'block'
            })
        }
    })
})


const scrollup = () => {
    const scrollupbtn = document.getElementById("scroll-up");

    if(window.scrollY >=250) {
        scrollupbtn.classList.remove("-bottom-1/2");
        scrollupbtn.classList.add("bottom-4");
    } else {
        scrollupbtn.classList.add("-bottom-1/2");
        scrollupbtn.classList.remove("bottom-4");
    }
}
window.addEventListener('scroll', scrollup)


const scrollhead = () => {
    const header = document.getElementById("header")

    if(this.scrollY >=50) {
        header.classList.add("border-b", "border-secondarycolor")
    } else {
        header.classList.remove("border-b", "border-secondarycolor")
    }
}
window.addEventListener('scroll', scrollhead)



const html = document.querySelector("html");
const themebtn = document.getElementById("theme-toggle");

if(localStorage.getItem("mode") == "dark"){
darkmode();
} else {
    lightmode();
}

themebtn.addEventListener('click', (e) => {
    if(localStorage.getItem("mode") == "light") {
        darkmode();
    } else {
        lightmode();
    }
})

function darkmode ()  {
    html.classList.add("dark");
    themebtn.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("mode", "dark");
}

function lightmode () {
    html.classList.remove("dark");
    themebtn.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("mode", "light");
}




const activelink = () => {
    const sections = document.querySelectorAll("section");
    const navlinks = document.querySelectorAll(".nav__link");

let current = "home";

sections.forEach((section) => {
    const sectiontop = section.offsetTop;

    if (this.scrollY >= sectiontop - 60) {
        current = section.getAttribute("id");
    }
});

navlinks.forEach((item) => {
    item.classList.remove("text-secondarycolor");
    if (item.href.includes(current)) {
        item.classList.add("text-secondarycolor");
    }
});

};

window.addEventListener('scroll', activelink)



const sr = ScrollReveal ({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400
});

sr.reveal(".home_image");
sr.reveal(".home_content", { origin: "bottom"});
sr.reveal(".catagory_card", { interval: 300});
sr.reveal(".promo_card-1", {origin: "left" });
sr.reveal(".promo_card-2", {origin: "right" });

sr.reveal(".about_img", { origin: "bottom"});
sr.reveal(".about_content", { origin: "top"});

sr.reveal(".menu_items", {origin: "left" });

sr.reveal(".customer_review", {origin: "right" });

sr.reveal(".footer");

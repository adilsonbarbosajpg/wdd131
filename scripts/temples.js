const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", function () {
    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        menuButton.textContent = "X";
    } else {
        menuButton.textContent = "☰";
    }
});

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    document.lastModified;


// Temple data
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },

    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },

    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },

    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },

    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },

    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },

    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Porto Alegre Brazil",
        location: "Porto Alegre, Brazil",
        dedicated: "2022, May, 8",
        area: 36900,
        imageUrl: "images/porto-alegre.webp"
    },

    {
        templeName: "São Paulo Brazil",
        location: "São Paulo, Brazil",
        dedicated: "1978, October, 30",
        area: 59256,
        imageUrl: "images/sao-paulo.webp"
    },

    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "images/salt-lake.webp"
    }
];


const templeGrid = document.querySelector(".temple-grid");


function displayTemples(templeList) {

    templeGrid.innerHTML = "";

    templeList.forEach(function (temple) {

        templeGrid.innerHTML += `
            <figure>
                <img src="${temple.imageUrl}" 
                     alt="${temple.templeName}" 
                     loading="lazy">

                <figcaption>
                    <h2>${temple.templeName}</h2>
                    <p>${temple.location}</p>
                    <p>Dedicated: ${temple.dedicated}</p>
                    <p>Area: ${temple.area} sq ft</p>
                </figcaption>
            </figure>
        `;
    });
}


function filterTemples(filter) {

    let filteredTemples = temples;

    if (filter === "old") {

        filteredTemples = temples.filter(function (temple) {
            const year = Number(temple.dedicated.split(",")[0]);
            return year < 1900;
        });

    } else if (filter === "new") {

        filteredTemples = temples.filter(function (temple) {
            const year = Number(temple.dedicated.split(",")[0]);
            return year > 2000;
        });

    } else if (filter === "large") {

        filteredTemples = temples.filter(function (temple) {
            return temple.area > 90000;
        });

    } else if (filter === "small") {

        filteredTemples = temples.filter(function (temple) {
            return temple.area < 10000;
        });

    } else if (filter === "home") {

        filteredTemples = temples;
    }

    displayTemples(filteredTemples);
}


const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const filter = link.textContent.toLowerCase();

        filterTemples(filter);
    });
});


displayTemples(temples);
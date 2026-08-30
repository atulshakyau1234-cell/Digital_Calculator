 const galleryImages = document.querySelectorAll(".gallery-item img");
 const lightbox = document.getElementById("lightbox");
 const lightboxImg = document.getElementById("lightbox-img");
 const caption = document.getElementById("caption");
 const closeBtn = document.getElementById("close");
 const nextBtn = document.getElementById("next");
 const prevBtn = document.getElementById("prev");

 const images =[
    {
    src:"nature.jpg",
    title:"Beautiful Nature"
    },
    {
        src:"city.jpg",
        title:"Modern City"
    },
    {
        src:"animals.jpeg",
        title:"Wild Animals"
    },
    {
        src:"nature2.jpg",
        title:"Mountain view"
    },
    {
        src:"city2.jpg",
        title:"City lights"
    },
    {
        src:"animal2.jpeg",
        title:"Beautiful Animals"
    },
    {
        src:"nature3.jpg",
        title:"Freash Environment"
    },
    {
        src:"nature4.jpg",
        title:"Freash Air"
    },

 ];

 let currentIndex = 0;

 galleryImages.forEach((Image) =>{
    images.addEventListener("click",() =>)
 })
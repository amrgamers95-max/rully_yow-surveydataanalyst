// 1. Generate Twinkling Stars Background
const starsContainer = document.getElementById('stars-container');
const starCount = 150;
 
if (starsContainer) {
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 3 + 1;
        const delay = Math.random() * 5;
        const duration = Math.random() * 3 + 2;
 
        star.style.left = `${x}vw`;
        star.style.top = `${y}vh`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${delay}s`;
        star.style.animationDuration = `${duration}s`;
 
        starsContainer.appendChild(star);
    }
}
 
// 2. Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};
 
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);
 
document.querySelectorAll('.hidden').forEach(el => observer.observe(el));
 
// 3. Render Survey Data Analyst Portfolio Dynamically
const surveyData = {
    "survey-1": [ // Section 1: 16:9 Images (2 per row)
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1775395180/51f55bdc-c592-4072-a30e-ebba9c4cc9a0.png",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1775395204/cf419ff8-31f5-41eb-850d-2d54c3cf9eee.png",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1775395221/8220e566-015a-48a1-b839-e5e27e890889.png",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1775395251/2eff8daf-8555-4879-bb76-86409b278cfd.png"
    ],
    "survey-2": [ // Section 2: 1:1 Images (6 per row)
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1775398459/3_yvtxn2.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1775398459/2_kmnckg.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1775398458/1_f7yxuo.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1775398459/7_ibwic4.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1775398458/6_scnfoj.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1775398458/4_wfusbf.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1775398457/5_ishlpp.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1775398456/8_ycfo6p.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1775398456/11_p8lutt.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1775398456/13_bczjyc.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1775398455/12_tcg3is.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1775398456/10_hoy1o1.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1775398456/9_smnqth.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1775398453/17_zsi3e7.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1775398454/14_xgpgaj.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1775398454/15_atn88q.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1775398454/16_yccfjp.jpg",
        "https://res.cloudinary.com/drxc5e7gf/image/upload/v1775398453/18_sibygl.jpg"
    ]
};
 
// Fungsi untuk mengisi data survey ke dalam grid HTML
function loadSurveyData() {
    for (const category in surveyData) {
        const container = document.getElementById(`grid-${category}`);
        if (container) {
            let imagesHTML = '';
            surveyData[category].forEach(imageUrl => {
                imagesHTML += `<img src="${imageUrl}" alt="Survey Chart Data" loading="lazy">`;
            });
            container.innerHTML = imagesHTML;
        }
    }
}
 
// Jalankan fungsi saat web dimuat
document.addEventListener('DOMContentLoaded', loadSurveyData);
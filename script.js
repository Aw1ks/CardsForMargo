const cards = [
    { 
        img: "margo_img1.jpg", 
        text: "Посвящается моей самой любимой девочке." 
    },
    { 
        img: "margo_img2.jpg", 
        text: "Я скучаю по нашим веселым моментам, по твоему смеху и по тому как нам легко вместе)" 
    },
    { 
        img: "margo_img4.jpg", 
        text: "Жду момента когда мф будем вместе бурмалдить и отхватывать на парах." 
    },
    { 
        img: "margo_img5.jpg",
        text: "И в любом составе я вижу только тебя. Ты мой самый любимый человек. Скучаю по нашим тусовкам и по времени, проведенному только вдвоем." 
    },
    { 
        img: "margo_img6.jpg", 
        text: "Просто быть рядом с тобой это лучшее, что со мной случается. Мне очень тебя не хватает." 
    },
    { 
        img: "margo_img7.jpg", 
        text: "Мы с тобой отлично смотримся вместе. Мой любимый человек) Я очень сильно люблю тебя и жду нашей встречи, чтобы крепко обнять!" 
    }
];

let current = 0;
const cardEl = document.getElementById("card");
const imgEl = document.getElementById("cardImg");
const textEl = document.getElementById("cardText");
function render() {
    imgEl.src = cards[current].img;
    textEl.textContent = cards[current].text;
}


function nextCard() {
    if (current === cards.length - 1) {
        current = 0;
    } else {
        current++;
    }
    
    cardEl.style.transform = "translateX(-30px)";
    cardEl.style.opacity = "0";
    setTimeout(() => {
        render();
        cardEl.style.transform = "translateX(30px)";
        requestAnimationFrame(() => {
            cardEl.style.transform = "translateX(0)";
            cardEl.style.opacity = "1";
        });
    }, 200);
}


function prevCard() {
    if (current === 0) {
        current = cards.length - 1;
    } else {
        current--;
    }

    cardEl.style.transform = "translateX(30px)";
    cardEl.style.opacity = "0";
    setTimeout(() => {
        render();
        cardEl.style.transform = "translateX(-30px)";
        requestAnimationFrame(() => {
            cardEl.style.transform = "translateX(0)";
            cardEl.style.opacity = "1";
        });
    }, 200);
}

let touchStartX = 0;
let touchEndX = 0;
cardEl.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

cardEl.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});


function handleSwipe() {
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
        nextCard();
    } 

    else if (diff < -50) {
        prevCard();
    }
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextCard();
    if (e.key === "ArrowLeft") prevCard();
});

render();
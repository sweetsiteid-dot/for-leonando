/* =========================
   PASSWORD
========================= */

function checkPassword(){

    const password =
    document.getElementById("passwordInput").value;

    if(password === "1108"){

        document.getElementById("passwordScreen")
        .style.display="none";

        document.getElementById("websiteContent")
        .style.display="block";

    }else{

        alert("Wrong Password 🖤");

    }

}


/* =========================
   OPEN GIFT
========================= */

function openGift(){

    const music =
    document.getElementById("music");

    music.play().catch(()=>{});

    document.getElementById("giftSection")
    .scrollIntoView({
        behavior:"smooth"
    });

}


/* =========================
   FLOATING HEARTS
========================= */

function createHeart(){

    const heart =
    document.createElement("div");

    heart.innerHTML="🖤";

    heart.style.position="absolute";

    heart.style.left =
    Math.random()*100+"vw";

    heart.style.top="-30px";

    heart.style.fontSize =
    (Math.random()*20+15)+"px";

    heart.style.opacity =
    Math.random()*0.7+0.3;

    heart.style.animation =
    `fall ${Math.random()*4+6}s linear`;

    document.getElementById("hearts")
    .appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,500);


/* =========================
   HEART ANIMATION
========================= */

const style =
document.createElement("style");

style.innerHTML=`

@keyframes fall{

    0%{
        transform:
        translateY(0)
        rotate(0deg);

        opacity:1;
    }

    100%{
        transform:
        translateY(110vh)
        rotate(360deg);

        opacity:0;
    }

}

.fade-in{

    opacity:0;

    transform:
    translateY(40px);

    transition:
    all 1s ease;

}

.fade-in.show{

    opacity:1;

    transform:
    translateY(0);

}

`;

document.head.appendChild(style);


/* =========================
   SCROLL ANIMATION
========================= */

const observer =
new IntersectionObserver(

    entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target
                .classList
                .add("show");

            }

        });

    },

    {
        threshold:0.15
    }

);


/* 
   Tidak ada .polaroid
   karena foto = 0
*/

document.querySelectorAll(
    ".section,.reason-card,.final-section,.ending"
).forEach(el=>{

    el.classList.add("fade-in");

    observer.observe(el);

});


/* =========================
   PARALLAX HERO
========================= */

window.addEventListener("scroll",()=>{

    const hero =
    document.querySelector(".hero");

    if(!hero) return;

    const scroll =
    window.pageYOffset;

    hero.style.backgroundPositionY =
    scroll*0.4+"px";

});


/* =========================
   RANDOM QUOTES
========================= */

const quotes=[

    "Happy 18th Birthday, Leonando 🖤",

    "May every dream find its way to you ✨",

    "You deserve all the happiness in the world.",

    "I hope this chapter becomes beautiful for you.",

    "The best chapters are still ahead 📖",

    "You are loved more than you know 🖤",

    "I hope I can still be beside you in every chapter.",

    "Keep being the wonderful person that you are."

];


const quoteElement =
document.createElement("div");

quoteElement.className =
"floating-quote";

quoteElement.innerText =
quotes[0];

document.body.appendChild(
quoteElement
);


let currentQuote=0;


setInterval(()=>{

    currentQuote++;

    if(currentQuote >= quotes.length){

        currentQuote=0;

    }

    quoteElement.style.opacity=0;

    setTimeout(()=>{

        quoteElement.innerText =
        quotes[currentQuote];

        quoteElement.style.opacity=1;

    },500);

},5000);


/* =========================
   QUOTE STYLE
========================= */

const quoteStyle =
document.createElement("style");

quoteStyle.innerHTML=`

.floating-quote{

    position:fixed;

    bottom:20px;

    left:50%;

    transform:
    translateX(-50%);

    background:
    rgba(255,255,255,.08);

    border:
    1px solid
    rgba(255,255,255,.12);

    backdrop-filter:
    blur(12px);

    -webkit-backdrop-filter:
    blur(12px);

    padding:
    12px 20px;

    border-radius:50px;

    font-size:13px;

    color:#fff;

    text-align:center;

    z-index:999;

    transition:
    opacity .5s ease;

    max-width:
    80%;

    white-space:
    nowrap;

}

@media(max-width:600px){

    .floating-quote{

        font-size:11px;

        padding:
        10px 16px;

        max-width:85%;

    }

}

`;

document.head.appendChild(
quoteStyle
);


/* =========================
   ENTER KEY
========================= */

document.getElementById(
    "passwordInput"
).addEventListener(
    "keypress",
    function(event){

        if(event.key === "Enter"){

            checkPassword();

        }

    }
);

const MyNavigation = () =>{
    const placeNav = document.querySelector("nav ul .nav-line");
    const navSpan = document.querySelector("nav ul");

    placeNav.addEventListener("click", function(){
        navSpan.classList.toggle("swapEffectNav");

        if(navSpan.classList.contains("swapEffectNav")){
            placeNav.classList.add("line-three");
        
        }else{
            placeNav.classList.remove("line-three");
        }
    });
};

MyNavigation();


const allNavBar = () =>{
    const getAllNav = document.querySelectorAll(".link-nav li a");
    
    const getMore = document.querySelector(".trumble .tombol-1 h3 a");

    getAllNav.forEach(nav =>{
        nav.addEventListener("click", function(e){
            const getHref = this.getAttribute("href");
            const placeHref = document.querySelector(`${getHref}`);

            $("html, body").animate({
                scrollTop: placeHref.offsetTop - 50
            }, 800);
        })
    })

    getMore.addEventListener("click", function(){
        const getHref = this.getAttribute("href");
        const placeHref = document.querySelector(`${getHref}`);

        $("html, body").animate({
            scrollTop: placeHref.offsetTop - 50
        }, 800);
        
    })


};

allNavBar();

const particular = () => {
    const particle4 = document.querySelector(".particle-4");
    const particle2 = document.querySelector(".particle-2");
    const particle3 = document.querySelector(".particle-3");
    const particle5 = document.querySelector(".particle-5");
    const particle6 = document.querySelector("#content article .text-wedo .cartoon-1 .particle-6");

    const arrow = document.querySelector(".arrow");
    const textArrow = document.querySelector(".cartoon-1 h2");
    const textChose = document.querySelector(".text-wedo .chose");
    const textSwap = document.querySelector("aside .cartoon-2 .my-self .text-self");

    const imgAnimat = document.querySelector("aside .cartoon-2 .animat");
    const line1 = document.querySelector("aside .cartoon-2 .my-self .line-1");


    const mainBox = document.querySelector("aside .cartoon-2 .my-self .self .main-box");
    const panah2 = document.querySelector("aside .cartoon-2 .my-self .self .arrow-2");
    const square = document.querySelector(".bio-me .square");


    $(window).scroll(function(){
        const wScroll = $(this).scrollTop();
        // console.log(wScroll);


        if(wScroll >= $(particle4).offset().top - -10){
            particle4.classList.add("lingkaran-4");
            particle2.classList.add("lingkaran-2");
            particle5.classList.add("lingkaran-5");


            if(particle2.classList.contains("lingkaran-2")){
                setTimeout(() =>{
                    particle3.classList.add("lingkaran-3");
                }, 600);
            };
        };

        if(wScroll >= $(arrow).offset().top - -80){
            // console.log('okok');
            particle6.classList.add("lingkaran-6");

        };

        if(wScroll >= $(arrow).offset().top - -100){
            // console.log("Panah");
            // arrow.classList.add("panah");

            setTimeout(() =>{
                arrow.classList.add("panah");

            }, 600);

            textArrow.classList.add("swap")
            textChose.classList.add("select");
        }

        if(wScroll >= $(imgAnimat).offset().top - 450){
            // console.log("yahop");
            imgAnimat.classList.add("lingkaran-7");

            textSwap.classList.add("swapText-1");
            mainBox.classList.add("swapBox");

            if(mainBox.classList.contains("swapBox")){
                setTimeout(() =>{
                    panah2.classList.add("panah-2");
                }, 800)
            }

            if(imgAnimat.classList.contains("lingkaran-7")){
                setTimeout(() =>{
                    line1.classList.add("garis-1"); 
                }, 900)
            }
        }

        if(wScroll >= $(square).offset().top - 750){
            // console.log("hayuk");
            square.classList.add("swapKotak");
        };
    
    });

}

particular();



const myProfil = () =>{
    const propil = document.querySelector("aside .cartoon-2 .my-self .self .main-box .oval-1 .irfin");
    const imagee = document.querySelector("aside .darknest .all-profil");
    const placeDark = document.querySelector("aside .darknest");
    const close = document.querySelector("aside .darknest .all-profil .close");
    
    propil.addEventListener("click", function(){
        // console.log("OK");
        placeDark.classList.add("darkfull");
        imagee.classList.add("see");
    })

    close.addEventListener("click", function(){
        console.log("closerr");
        placeDark.classList.remove("darkfull");
        imagee.classList.remove("see");
    });
}

myProfil();


// Button Tombol

const myButton = () =>{
    const getTombol1 = document.querySelector(".tombol-1");

    let count = 0;

    setInterval(() =>{
        count++;

        if(count % 2 == 0){
            $(getTombol1).css({
                "transition": "0.50s ease",
                "background-color": "salmon"
            })
    
        }else{
            $(getTombol1).css({
                "background-color": "rosybrown"
            })
        }

    }, 1500);


};

myButton();

// Button Tombol ENd



// Responsive

const myResponsive = () =>{

    const textSwap = document.querySelector("aside .cartoon-2 .my-self .text-self");
    const line1 = document.querySelector("aside .cartoon-2 .my-self .line-1");

    $(window).scroll(function(){
        const wScroll = $(this).scrollTop();
        console.log(wScroll);


        if(window.matchMedia("(max-width: 564px)").matches){
            // console.log("hello");
            if(wScroll >= $(textSwap).offset().top - 450){
                console.log("okoko");
                // textSwap.style.backgroundColor = "red";
                textSwap.classList.add("effectText");
                
                setTimeout(() =>{
                    line1.classList.add("effectLine1");
                }, 400)
            };

        };
    

    });


};

myResponsive();

// Responsive End












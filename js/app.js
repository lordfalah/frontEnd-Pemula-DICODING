
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
            // console.log(getHref)

            $("html, body").animate({
                scrollTop: placeHref.offsetTop - 100
            }, 800);
        })
    })

    getMore.addEventListener("click", function(){
        const getHref = this.getAttribute("href");
        const placeHref = document.querySelector(`${getHref}`);

        $("html, body").animate({
            scrollTop: placeHref.offsetTop - 80
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
    const getImg = document.querySelector("aside .darknest .all-profil img");
    const placeDark = document.querySelector("aside .darknest");
    const close = document.querySelector("aside .darknest .all-profil .close");
    const getScroll = document.querySelector("body");
    
    propil.addEventListener("click", function(e){
        // console.log("OK");
        const dark = placeDark.classList.toggle("darkfull");
        imagee.classList.add("see");
        
        setTimeout(() =>{
            getImg.classList.add("fadeImg");

            if(getImg.classList.contains("fadeImg")){
                setTimeout(() =>{
                    close.classList.add("fadeClose");
                }, 600)
            }
        }, 100);

        console.log(dark);
        // I have e Problem

        if(dark == true){
            getScroll.classList.add("scrolling");
        
        }
    })

    close.addEventListener("click", function(){
        console.log("closerr");
        placeDark.classList.remove("darkfull");
        imagee.classList.remove("see");
        getScroll.classList.remove("scrolling");
        close.classList.remove("fadeClose");
        getImg.classList.remove("fadeImg");

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
    const textAwal = document.querySelector("main .ground .img-animation .text-awal");


    if(window.matchMedia("screen and (max-width: 480px)").matches){
        // console.log("hello");
        const allNav = document.querySelectorAll("header nav ul li a");
        const navLine = document.querySelector(".nav-line");
        const tromble = document.querySelector(".text-awal .trumble .tombol-1 h3 a");

        
        clickTromble(tromble);
        navigation(allNav);


        navLine.addEventListener("click", function(){
            // const myNav = navigation(th)
           

            allNav.forEach((nav, idx) =>{

                if(nav.classList.contains("effectNav")){
                    setTimeout(() =>{
                        nav.classList.remove("effectNav");
                    }, 500);
                    // console.log("remove");
                    
                    nav.style.animation = `reverseSense 0.80s ease-in ${idx / 7}s`
                    
                }else{
   
                    setTimeout(() =>{
                        nav.classList.add("effectNav");
                    }, 500)
    
                    nav.style.animation = `sense 0.80s ease-in ${idx / 7 }s`;
                }


            })
        })





        // Effect Main
        $(window).scroll(function(){
            const wScroll = $(this).scrollTop();
            // console.log(wScroll);
     
            if(wScroll >= $(textSwap).offset().top - 450){
                // console.log("okoko");
                // textSwap.style.backgroundColor = "red";
                textSwap.classList.add("effectText");
                
                setTimeout(() =>{
                    line1.classList.add("effectLine1");
                }, 400)
            };
            
            if(wScroll >= $(textAwal).offset().top - 100){
                // console.log("hello");

                setTimeout(() =>{
                    textAwal.classList.add("textPerl");
                }, 500);
                
            }
    
        });
        
        // Effect Main
    };


   


};
myResponsive();


// navigation Click

function navigation(nav){   
    
    nav.forEach(allNav =>{
        allNav.addEventListener("click", function(){
            const getTag = this.getAttribute("href");
            const placeTag = document.querySelector(`${getTag}`);
            const navUl = document.querySelector("nav .link-nav");
            const navLine = document.querySelector("nav ul .nav-line");            

            $("html, body").animate({
                scrollTop: placeTag.offsetTop - 350
            }, 500);

            if(navUl.classList.contains("swapEffectNav")){
                // console.log("yaha");
                navUl.classList.remove("swapEffectNav")
            }

            if(navLine.classList.contains("line-three")){
                // console.log("ntap")
                navLine.classList.remove("line-three")
            }



        })
    })


}

function clickTromble(trumb){
    trumb.addEventListener("click", function(){
        const btnTrumb = this.getAttribute("href");
        const placeBtn = document.querySelector(`${btnTrumb}`);

        $("html, body").animate({
            scrollTop: placeBtn.offsetTop - 295
        })
        
    })
}


// navigation Click


// Responsive End



const responsiveWeb = () =>{
    if(window.matchMedia("(max-width: 600px)").matches){
        const getParentSpan = document.querySelector("nav ul .nav-line");
        const getNavLine = document.querySelector("nav ul");

        getParentSpan.addEventListener("click", function(){
            getNavLine.classList.toggle("navbarSwap");
        })

    }
}


responsiveWeb();





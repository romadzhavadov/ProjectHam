//================== part 1 ourServices ================================================================================
const tabsBtn = document.querySelectorAll('.ourServices__title');
const tabsContent = document.querySelectorAll('.ourServices__tab');

const showContent = () => {
    for (const tab of tabsBtn) {
        tab.addEventListener('click', (e) => {
            tabsBtn.forEach((element) => {
                element.classList.remove("ourServices__active");
            });
            e.target.classList.add("ourServices__active");
           
            let tabName = e.target.dataset.name;

            tabsContent.forEach((elem) => {
    
                if (tabName === elem.dataset.name) {
                    elem.classList.add("js-tabactive");
                } else {
                    elem.classList.remove("js-tabactive")
                }
            })
        })
    }
}

showContent()


//================== part 2 amazingWork ================================================================================

const data = [
    {
        name: 'image-1',
        alt: 'Wordpress',
    },
    {
        name: 'image-2',
        alt: 'Graphic Design',
    },
    {
        name: 'image-3',
        alt: 'Web Design',
    },
    {
        name: 'image-4',
        alt: 'Graphic Design',
    },
    {
        name: 'image-5',
        alt: 'Landing Pages',
    },
    {
        name: 'image-6',
        alt: 'Landing Pages',
    },
    {
        name: 'image-7',
        alt: 'Graphic Design',
    },
    {
        name: 'image-8',
        alt: 'Wordpress',
    },
    {
        name: 'image-9',
        alt: 'Graphic Design',
    },
    {
        name: 'image-10',
        alt: 'Web Design',
    },
    {
        name: 'image-11',
        alt: 'Landing Pages',
    },
    {
        name: 'image-12',
        alt: 'Web Design',
    },
    {
        name: 'image-13',
        alt: 'Web Design',
    },
    {
        name: 'image-14',
        alt: 'Landing Pages',
    },
    {
        name: 'image-15',
        alt: 'Graphic Design',
    },
    {
        name: 'image-16',
        alt: 'Wordpress',
    },
    {
        name: 'image-17',
        alt: 'Wordpress',
    },
    {
        name: 'image-18',
        alt: 'Graphic Design',
    },
    {
        name: 'image-19',
        alt: 'Web Design',
    },
    {
        name: 'image-20',
        alt: 'Graphic Design',
    },
    {
        name: 'image-21',
        alt: 'Landing Pages',
    },
    {
        name: 'image-22',
        alt: 'Landing Pages',
    },
    {
        name: 'image-23',
        alt: 'Graphic Design',
    },
    {
        name: 'image-24',
        alt: 'Wordpress',
    },
    {
        name: 'image-25',
        alt: 'Graphic Design',
    },
    {
        name: 'image-26',
        alt: 'Web Design',
    },
    {
        name: 'image-27',
        alt: 'Landing Pages',
    },
    {
        name: 'image-28',
        alt: 'Web Design',
    },

    {
        name: 'image-29',
        alt: 'Wordpress',
    },
    {
        name: 'image-30',
        alt: 'Graphic Design',
    },
    {
        name: 'image-31',
        alt: 'Web Design',
    },
    {
        name: 'image-32',
        alt: 'Graphic Design',
    },
    {
        name: 'image-33',
        alt: 'Landing Pages',
    },
    {
        name: 'image-34',
        alt: 'Landing Pages',
    },
    {
        name: 'image-35',
        alt: 'Graphic Design',
    },
    {
        name: 'image-36',
        alt: 'Wordpress',
    },
];

const imgHtml = data.map((el, index) => `
    <div class='amazingWork__card' data-alt="${el.alt}">
        <div class='amazingWork__card-wrap'>
            <div class='amazingWork__card-front'>
                <img src="./img/graphicDesign/graphic-design${index + 1}.jpg" alt="${el.name}">
            </div>
            <div class='amazingWork__card-back'>
                <a class="amazingWork__info" href="#">
                    <img class="amazingWork__img"src="./img/graphicDesign/icon.png" alt="icon">
                    <h1 class='amazingWork__caption'>creative design</h1>
                    <p class='amazingWork__text'>Web Design</p>
                </a>
            </div>
        </div>
    </div>
`)

const amazingWorkContent = document.querySelector('.amazingWork__content');
amazingWorkContent.insertAdjacentHTML('beforeend', [...imgHtml].splice(0, 12).join(''));

const btnAmazingWork = document.querySelector('.btn--amazingWork');
const load = document.querySelector('#preloader');

const amazingWorkTabs = document.querySelectorAll('.amazingWork__title');
const amazingWorkBtn = document.querySelector('.btn--amazingWork');

let quantity = 12;

const showAmazingWorkContent = () => {
    amazingWorkTabs.forEach((elem) => {
        elem.addEventListener('click', (e) => {
            const amazingWorkTabsContent = document.querySelectorAll('.amazingWork__card');

            amazingWorkTabs.forEach((element) => {
                element.classList.remove("amazingWork__active");
            });
            e.target.classList.add("amazingWork__active");

            const amazingWorkName = e.target.dataset.alt;

            const amazingWorkBtn = document.querySelector('.btn--amazingWork');

            if (amazingWorkName === "All") {
                amazingWorkBtn.style.display = "block";
            } else {
                amazingWorkBtn.style.display = "none";
            }

            if (amazingWorkTabsContent.length === 36) {
                amazingWorkBtn.style.display = "none";
            }

            amazingWorkTabsContent.forEach((el) => {
                if (amazingWorkName === el.dataset.alt || amazingWorkName === "All") {
                    el.style.display = "block";
                } else {
                    el.style.display = "none";
                }
            })
        })
    })
}

showAmazingWorkContent()

btnAmazingWork.addEventListener('click', () => {
    btnAmazingWork.style.display = 'none';
    load.style.display = 'block'

    setTimeout (() =>{

    btnAmazingWork.style.display = 'block';
    load.style.display = 'none'
    
    amazingWorkContent.insertAdjacentHTML('beforeend', [...imgHtml].splice(quantity, 12).join(''));
    quantity += 12;
        if (data.length <= quantity) {
            btnAmazingWork.style.display = 'none';
        }
    }, 2000)
})


//================== part 3 peopleSay ================================================================================

const person = [
    {
        name: 'Hasan Ali',
        work: 'UI/UX Designer',
        description: 'Integer dignissim, augue tempus ultricies luctus,',
        image: '1.png',
    },
    {
        name: 'Sam',
        work: 'Developer',
        description: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui',
        image: '2.png',
    },
    {
        name: 'Helen',
        work: 'Developer',
        description: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui',
        image: '3.png',
    },
    {
        name: 'Ann',
        work: 'UI/UX Designer',
        description: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui',
        image: '4.png',
    },    
]

const card = document.querySelector('.peopleSay__wrapper');
const wrapper = document.querySelector('.slider__img-wrapper');
const btnPrev = document.querySelector('.js-prev');
const btnNext = document.querySelector('.js-next');

const imagesHTML = person.map(el => `
<div class="peopleSay__card">
    <p class="peopleSay__desc">${el.description}</p>
    <h3 class="peopleSay__name">${el.name}</h3>
    <p class="peopleSay__info">${el.work}</p>
    <img class="peopleSay__img" src="./img/peopleSay/${el.image}" alt="person">
</div>

`); 


card.innerHTML = imagesHTML.join('')
// card.insertAdjacentHTML('beforeend', imagesHTML.join(''));

const imgHTML = person.map((el, index) => `<img class="peopleSay__slider-img" data-slide="${index}" src="./img/peopleSay/${el.image}">`);
wrapper.innerHTML = imgHTML.join('');

let slide = 0;

const imgSlide = document.querySelectorAll('.peopleSay__slider-img')
console.log(imgSlide)



btnNext.addEventListener('click', () => {

    if (slide === person.length - 1) {
        slide = 0;
    } else {
        slide++;
    }

    // card.style.transform = `translateY(-${320 * slide}px)`
    card.style.transform = `translateX(-${1160 * slide}px)`

    // imgSlide.forEach((elem) => {
    //     if (slide == elem.dataset.slide) {
    //         elem.style.cssText = `    
    //         transform: translateY(-15px);  `
    //     } else {
    //         elem.style.cssText = `    
    //         transform: none;  `
    //     }
    // })

    // если раскоментировать imgSlide.forEach, будет выезжать  картинка при клике, сейчас переделано  по  ховеру
})

btnPrev.addEventListener('click', () => {

    if (slide === 0) {
        slide = person.length - 1;
    } else {
        slide--;
    }

    // card.style.transform = `translateY(-${320 * slide}px)`
    card.style.transform = `translateX(-${1160 * slide}px)`

    // imgSlide.forEach((elem) => {
    //     if (slide == elem.dataset.slide) {
    //         elem.style.cssText = `    
    //         transform: translateY(-15px);  `
    //     } else {
    //         elem.style.cssText = `    
    //         transform: none;  `
    //     }
    // })

        // если раскоментировать imgSlide.forEach, будет выезжать  картинка при клике, сейчас переделано  по  ховеру
})

imgSlide.forEach((img) => {
    img.addEventListener('click', (e) => {
        // for(let image of imgSlide) {
        //     image.style.cssText = `    
        //     transform: none;  `
        // }

        const clickSlide = e.target.dataset.slide

        if (e.target.dataset.slide === clickSlide) {
            card.style.transform = `translateX(-${1160 * clickSlide}px)`
           
            // e.target.style.cssText = `    
            // transform: translateY(-15px);  `
        } 


            // если раскоментировать for и e.target.style.cssText, будет выезжать  картинка при клике, сейчас переделано  по  ховеру
    })
})
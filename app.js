

const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
          "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
          "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
      },
      {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
          "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
      },
      {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
          "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
      },
];

//get element for dom
const img = document.querySelector('#person-img');
const name = document.querySelector('#name');
const job = document.querySelector('#job');
const text = document.querySelector('#text');

const prevbtn = document.querySelector('#prevbtn');
const nextbtn = document.querySelector('#nextbtn');
const randombtn = document.querySelector('#randombtn');

let currentreview = 0; //start value

//default value when the browser load
window.addEventListener('DOMContentLoaded', function(){
    const item = reviews[currentreview];
    // img.src = item.img;
    // name.innerHTML = item.name;
    // job.textContent = item.job;
    // text.innerHTML = item.text;
    getreview(currentreview);
});

//PREVIOUS REVIEW
prevbtn.addEventListener('click', function(){
    currentreview--;
    if(currentreview < 0){
        currentreview = reviews.length -1;
    }
    getreview(currentreview);
})
//creating a function for not repeating code
function getreview(review){    
    name.textContent = reviews[review].name;
    job.textContent = reviews[review].job;
    text.textContent = reviews[review].text;
    img.src = reviews[review].img;
}

//NEXT REVIEW
nextbtn.addEventListener("click", () => {
       currentreview++;
       if(currentreview > reviews.length -1){
        currentreview = 0;
       }
       getreview(currentreview);

});

//random reviews
randombtn.addEventListener('click', function(){
    const item = Math.floor(Math.random() * reviews.length);
    getreview(item);
})

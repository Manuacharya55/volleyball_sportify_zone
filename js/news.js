const API_KEY = '5ae0ea12ac414a46a02796c200104ae1';
const url = 'https://newsapi.org/v2/everything?q=';


window.addEventListener('load', () => fetchNews('football'));

function reload(){
    window.location.reload();
}

async function fetchNews(query) {
    // &from=2023-07-1
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    // console.log(data)
    bindData(data.articles);
}

function bindData(articles) {
    const cardContainer = document.getElementById('Football');

    const newscardtemplates = document.querySelector('#card-template');
    // console.log(newscardtemplates);
    cardContainer.innerHTML = " ";

    articles.forEach(article => {

        if (!article.urlToImage) return;


        const cardClone = newscardtemplates.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardclone, article) {
    const newsimage = cardclone.querySelector('.news-image');

    const newsTitle = cardclone.querySelector('#title');

    const newsDescription = cardclone.querySelector('#description');

    newsimage.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDescription.innerHTML = article.description;

    cardclone.firstElementChild.addEventListener('click', () => {
        window.open(article.url, "_blank");
    })
}

let curSelectedNav = null;
function onNavItemClick(id){
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = navItem;
    curSelectedNav?.classList.remove("active");
}


// buttons manager
const button = document.querySelectorAll('.direction-button');
const content = document.querySelectorAll('.content');

button.forEach((btn, indx) => {

    btn.addEventListener('click', () => {
       
        button.forEach((indx)=>{
            indx.classList.remove('btn-active')
        })
        // content.forEach((indx) =>{
        //     indx.classList.remove('active');
        // })

        btn.classList.add('btn-active');
        content[indx].classList.add('active');
    })
})
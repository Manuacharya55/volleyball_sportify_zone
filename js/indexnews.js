const API_KEY = '5ae0ea12ac414a46a02796c200104ae1';
const url = 'https://newsapi.org/v2/everything?q=';

window.addEventListener('load', () => fetchNews('sport'));

function reload(){
    window.location.reload();
}

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
}

function bindData(articles) {
    const cardContainer = document.getElementById('sports-news');

    const newscardtemplates = document.querySelector('#card-template');
    // console.log(newscardtemplates);
    cardContainer.innerHTML = " ";

    let count=0;
    // articles.forEach(article => {
    //     // if(count>=10){
    //     //     break;
    //     // }
        for(let i=0; i<12;i++){
        if (!articles[i].urlToImage) return;


        const cardClone = newscardtemplates.content.cloneNode(true);
        fillDataInCard(cardClone, articles[i]);
        cardContainer.appendChild(cardClone);

        count++}
    // });
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
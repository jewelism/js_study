import { foo } from './foo.js'

let cur = 0;

document.addEventListener("DOMContentLoaded", async () => {
    //do something..
    const myFoo = new foo("hello developer!");
    console.log(myFoo.fooPrint());


    const data = await myFoo.getData();
    // console.log(data);
    const newsNavigation = document.getElementsByClassName('newsNavigation')[0];
    // console.log(newsNavigation);


    data.forEach((d, index) => {
        const node = document.createElement("LI");
        node.setAttribute("id", index);
        const textnode = document.createTextNode(d.company);         // Create a text node
        node.appendChild(textnode);
        node.addEventListener('click', () => {
            onClickCompany(index);
            setContents(data[index]);
        });
        newsNavigation.appendChild(node);
    });


    const forwardButton = document.getElementsByClassName('right')[0];
    const backwardButton = document.getElementsByClassName('left')[0];

    forwardButton.addEventListener('click', () => {
        const companyId = (cur + 1) % data.length;
        onClickCompany(companyId);
        setContents(data[companyId]);
    });

    backwardButton.addEventListener('click', () => {
        const companyId = cur == 0 ? data.length - 1 : cur - 1;
        onClickCompany(companyId);
        setContents(data[companyId]);
    });

    init(data[cur]);
});

function init(data) {
    onClickCompany(cur);
    setContents(data);
}

function onClickCompany(companyId) {
    const curCompany = document.getElementById(companyId);
    const preCompany = document.getElementById(cur);
    preCompany.setAttribute("class", '');
    curCompany.setAttribute("class", 'selectedLI');
    cur = companyId;
}

function setContents(data) {
    setTitleEl(data.logoImgUrl);
    setThumbnailEl(data.thumbnews.imageUrl);
    setTitleDescEl(data.thumbnews.text);
    setContentsListEl(data.newslist);
}

function setTitleEl(logoImgUrl) {
    const titleEl = document.querySelector('.company');
    titleEl.setAttribute('src', logoImgUrl); 
}

function setThumbnailEl(thumbnailImgUrl) {
    const thumbnailEl = document.querySelector('.thumbnail');
    thumbnailEl.setAttribute('src', '../img/' + thumbnailImgUrl); //////
}

function setTitleDescEl(desc) {
    const titleDescEl = document.querySelector('.title-desc');
    titleDescEl.innerHTML = desc;
}

function setContentsListEl(newslist) {
    const contentsListEl = document.getElementById('company');
    while (contentsListEl.firstChild) {
        contentsListEl.removeChild(contentsListEl.firstChild);
    }
    newslist.forEach((d, index) => {
        const node = document.createElement("LI");
        node.setAttribute("id", index);
        var textnode = document.createTextNode(d);         // Create a text node
        node.appendChild(textnode);
        contentsListEl.appendChild(node);
    });
}
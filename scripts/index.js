// Ude Import export (MANDATORY)

import nav from "../components/import.js"

document.querySelector('#navbar').innerHTML=nav


async function news(id){
    event.preventDefault();

    try{
        let res = await fetch (`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${id}`);

        const data = await res.json();

        console.log(data, id);
        outdata(data.articles);
        console.log(data.articles);
    }
    catch (err){
        console.log("err");
    }
}

var show = document.querySelector('#results');

document.querySelector('#in').addEventListener('click', function(){news('in')});
document.querySelector('#ch').addEventListener('click', function(){news('ch')});
document.querySelector('#us').addEventListener('click', function(){news('us')});
document.querySelector('#uk').addEventListener('click', function(){news('uk')});
document.querySelector('#nz').addEventListener('click', function(){news('nz')});

function outdata(data){
    show.innerHTML = "";
    data.map(function(e){

        let img = document.createElement('img');
        let title = document.createElement('h3');
        let dtl = document.createElement('p');
        
        img.src = `${e.urlToImage}`
        title.innerText = `Title : ${e.title}`
        dtl.innerText=e.description


        let cont = document.createElement('div');
        cont.setAttribute('id','news');
        cont.append(img, title, dtl)
       
        show.append(cont)
    })
}

// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

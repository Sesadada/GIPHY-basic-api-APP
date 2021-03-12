import css from './style.css'
const container = document.querySelector('.container')
const myApi = 'xSYIvnpbzo1GuH35BCqWNLHzG3PRKzQ6'
const img = document.querySelector('img');  
const btn = document.querySelector('.btn')
const inputFromClient = document.querySelector('input')
const look = document.querySelector('.look')
let search = "cats"
let flag;

const updateLink = (newLink) => {
  let linkJson = `https://api.giphy.com/v1/gifs/translate?api_key=${myApi}&s=${newLink}`
  return linkJson
}
let defaultCat = updateLink(search)

const fetching = (fromClient) => {
fetch(fromClient, {mode: 'cors'}).then((response) =>{ 
   return response.json()//this is a promise
}).then(response => {
    img.src = response.data.images.original.url
}).catch((err)=> {
   console.log('rejected', err)
})
}

fetching(defaultCat)

 
look.addEventListener('click', (e) => {
   flag = inputFromClient.value
   const newSearch = inputFromClient.value
   search = newSearch
   let newLink = updateLink(search)
   fetching(newLink)

})

btn.addEventListener('click', (e) => {
  if(flag){
   search = flag
   let newLink = updateLink(search)
   fetching(newLink)
  } else {
    fetching(defaultCat)
  }
  
})














/* 


const linkJson = 'https://jsonplaceholder.typicode.com/todos/'

//NETWORK REQUEST WITH PROMISES
const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()
        request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status == 200){
           const data = JSON.parse(request.responseText)
           resolve(data) //here resolves
        } else if(request.readyState === 4){
           reject('Could not fetch data') //here rejects
        }
       })
        request.open('GET', resource)
        request.send()
    })

}

getTodos(linkJson).then((data) => {
    console.log('promise resolve', data)
    container.textContent = data[1]["userId"]
}).catch((err) => {
    console.log('promise rejected', err)
})

--------------------------------------------------------------------
NETWORK REQUEST WITH CALLBACKS

const getTodos = (callback) => {
//1 make request object
const container = document.querySelector('.container')
const request = new XMLHttpRequest()

// this reads the request state
request.addEventListener('readystatechange', () => {
    //console.log(request, request.readyState)
    if(request.readyState === 4 && request.status == 200){
        const data = JSON.parse(request.responseText)
      callback(undefined, data)
    } else if(request.readyState === 4){
      callback('Could not fetch data', undefined)
    }

})

//2 open a request with the kind of request (GET) and where to get it (api endpoint)
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')

//3 sends the request
request.send()
}

getTodos((err, data) => {
    console.log('callback fired')
    if(err){
        console.log(err)
    } else {
        console.log(data)
    }

})

-----------------------------------------------------------
const header = document.querySelector('header');
const section = document.querySelector('section');

const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

const request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    const superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
  }

  function populateHeader(jsonObj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);
  
    const myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
  }

  function showHeroes(jsonObj) {
    const heroes = jsonObj['members'];
  
    for (var i = 0; i < heroes.length; i++) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');
  
      myH2.textContent = heroes[i].name;
      myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
      myPara2.textContent = 'Age: ' + heroes[i].age;
      myPara3.textContent = 'Superpowers:';
  
      const superPowers = heroes[i].powers;
      for (var j = 0; j < superPowers.length; j++) {
        const listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }

*/

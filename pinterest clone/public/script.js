const container = document.querySelector(".imgContainer");
const type = window.location.search === '' ? "normal" : window.location.search.split("?")[1].split("=")[1];

let query = `https://api.unsplash.com/photos/?query=${type}&order_by=latest&per_page=9&client_id=81hXPHx20UzFb1gZNiuHFbmWjX9Sq-hozQmQi0vtR5Y`;
fetch(query).then(resp => resp.json()).then(res =>{
    console.log(query)
    console.log(res)
    for (let i = 0; i < res.length; i++) {
        let url = res[i].links.download;
        let alt = res[i].alt_description;
        let imgTag = document.createElement("img");
        imgTag.src = url;
        imgTag.alt = alt;
        container.appendChild(imgTag);
    }
})
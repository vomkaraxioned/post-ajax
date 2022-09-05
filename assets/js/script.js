/* Author: 

*/
const url = "https://jsonplaceholder.typicode.com/posts";
const addBtn = document.querySelector(".btn-add");
const posts = document.querySelector(".posts");
let fetchedData;
let initial = 0;
let limit = 10;

addBtn.addEventListener("click", addData);

function addData() {
    console.log(fetchedData);
    for (initial; initial < limit; initial++) {
        let index = initial + 1;
        posts.innerHTML += "<li class=\"post\"><h2>" + index + "." + fetchedData[initial].title + "</h2><p>" + fetchedData[initial].body + "</p></li>";
        if (initial == fetchedData.length - 1) {
            addBtn.style.display = "none";
        }
    }
    limit += 10;
}
fetch(url).then(response => response.json()).then(data => fetchedData = data);
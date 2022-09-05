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
    if (limit <= fetchedData.length) {
        for (initial; initial < limit; initial++) {
            let index = initial + 1;
            posts.innerHTML += "<li class=\"product\"><h2>" + index + "." + fetchedData[initial].title + "</h2><p>" + fetchedData[initial].body + "</p></li>";
        }
        limit += 10;
    } else {
        alert("No more Data To Fetch");
        addBtn.style.display = "none";
    }
}
fetch(url).then(response => response.json()).then(data => fetchedData = data);
const searchParams = new URLSearchParams(window.location.search);
const articleID = searchParams.get("articleId");

fetch("https://kea21s-3790.restdb.io/rest/posts/" + articleID, {
    method: "GET",
    headers: {
        "x-apikey": "606d5f8cf553500431007514",
    },
})
    .then((res) => res.json())
    .then((response) => {
        showPost(response); //console.log(response);
    })
    .catch((err) => {
        console.error(err);
    });

function showPost(data) {
    console.log(data);
    document.querySelector("h1").textContent = data.title;
    document.querySelector("h2 span").textContent = data.username;
    document.querySelector("p").textContent = data.content;
}

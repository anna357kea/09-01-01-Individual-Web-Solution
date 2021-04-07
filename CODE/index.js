//fetched data from database with posts
function getdata() {
    //below weird stuff is copied fro Insomnia GET "generate the code"-javascript,fetch using database from rest.db collection "posts"
    fetch("https://kea21s-3790.restdb.io/rest/posts", {
        method: "GET",
        headers: {
            "x-apikey": "606d5f8cf553500431007514",
        },
    })
        .then((res) => res.json()) //this line is written by me so that the fetched data can be edited and used in my code afterwards
        .then((response) => {
            showPosts(response); //console.log(response); - this was originaly here but I changed it to the function so it would be obious that this is from where data is being showed on site
        })
        .catch((err) => {
            console.error(err);
        });
}
getdata();

function showPosts(posts) {
    console.log(posts);
    //grab the template
    const template = document.querySelector("template.frontpageList").content;

    posts.forEach((post) => {
        //clone the template
        const copy = template.cloneNode(true);
        //adjusting template
        template.querySelector("h3").textContent = post.title;
        template.querySelector("h4 span").textContent = post.username;
        template.querySelector(
            "a.readmore"
        ).href = `article.html?articleId=${post._id}`;
        //appending it, putting it somewhere on the site (in <main>)
        document.querySelector("main").appendChild(copy);
    });
}

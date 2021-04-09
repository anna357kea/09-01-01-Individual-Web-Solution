const searchParams = new URLSearchParams(window.location.search);
const articleID = searchParams.get("articleId");

fetch(
    "https://kea21s-3790.restdb.io/rest/posts/" +
        articleID +
        "?fetchchildren=true",
    {
        method: "GET",
        headers: {
            "x-apikey": "606d5f8cf553500431007514",
        },
    }
)
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

    //grab the template
    const comment_template = document.querySelector("template.commentOnArticle")
        .content;

    //forEach comment
    data.comments.forEach((comment) => {
        console.log(comment);
        //clone the template
        const copy = comment_template.cloneNode(true);
        //adjusting template
        copy.querySelector("div h5.comment_date").textContent = comment.date;
        copy.querySelector("div h4.comment_username").textContent =
            comment.username;
        // comment_template.querySelector("div h4 span.comment_mail").textContent =
        //     data.email;
        copy.querySelector("div h4.comment_content").textContent =
            comment.content;
        //appending it, putting it somewhere on the site (in <main>)
        document.querySelector("main").appendChild(copy);
    });
    if (data.comments.length == 0) {
        const copy = comment_template.cloneNode(true);
        copy.querySelector("div h5.comment_date").textContent = "No date";
        copy.querySelector("div h4.comment_username").textContent = "No name";
        copy.querySelector("div h4.comment_content").textContent =
            "No comments yet, be the first one!";
        document.querySelector("main").appendChild(copy);
    }
}

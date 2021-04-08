// const form = document.querySelector("form");

// form.elements.title.value = "With that I set the value of input to that text";

//These two are the same
// document.querySelector("input[type=submit]").disabled = true;
// document.querySelector("input[type=submit]").setAttribute("disabled", true);

//check out JS methods- blur, click, focus, etc
//form.elements.title.focus();

//check out JS events - reset, submit, animation, clipboard, etc

// form.elements.title.addEventListener("focus", () => {
//     form.elements.title.value=""
// });

// form.elements.title.addEventListener("keyup", () => {
//     console.log("user typed something");
// });

// form.elements.title.addEventListener("keyup", (e) => {
//     console.log(e.target.value);
// });

// document.querySelector("input[type=submit]").setAttribute("disabled", true);

// form.elements.title.addEventListener("keyup", (e) => {
//     if (e.target.value.length > 4) {
//         console.log("long enough");
//         form.elements.username.focus();
//     }
// });

//submit button is disabled to send the form content into the database
// const form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
// });

//exercise from zrzut 5572
const form = document.querySelector("form");

form.addEventListener("submit", userSubmitted);

function userSubmitted(evt) {
    evt.preventDefault(); //stops the site to refresh
    console.log(form.elements.title.value);
    console.log(form.elements.username.value);
    console.log(form.elements.content.value);

    const payload = {
        title: form.elements.title.value,
        username: form.elements.username.value,
        content: form.elements.content.value,
    };

    document.querySelector("input[type=submit]").disabled = true; //makes the button disable to send again the content

    fetch("https://kea21s-3790.restdb.io/rest/posts", {
        method: "POST",
        headers: {
            "x-apikey": "606d5f8cf553500431007514",
            "Content-Type": "application/json",
        },
        // '{"username":"ABC","content":"zxzxzxzxzx","approved":false,"title":"RANDOM POST FROM INSOMNIA"}',
        //to change the type of the content from javascript to JSON
        body: JSON.stringify(payload),
    })
        .then((response) => {
            console.log(response);
            document.querySelector("input[type=submit]").disabled = false; //makes the button able again to send the content
            form.elements.title.value = "";
            form.elements.username.value = "";
            form.elements.content.value = "";

            document.querySelector("p.hidden").classList.remove("hidden");
        })
        .catch((err) => {
            console.error(err);
        });
}

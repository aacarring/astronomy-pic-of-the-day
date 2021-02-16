const section = document.querySelector('section');
const pic = document.querySelector('section .pic');
const date = document.querySelector('section .date');
const description = document.querySelector('section .description');

window.onload = () => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response => response.json())
        .then(data => {
            let picDate = data.date;
            let picDescription = data.explanation;
            let imgSrc = data.url;
            let mediaType = data.media_type;

            date.innerText = picDate;
            description.innerText = picDescription;

            if (mediaType === "image") {
                let img = document.createElement("img");
                img.setAttribute("src", imgSrc);
                pic.appendChild(img);
            }
            if (mediaType === "video") {
                let vid = document.createElement("iframe");
                vid.setAttribute("src", imgSrc);
                pic.appendChild(vid);
            }
        });
}
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    let request = document.querySelector('#textField').value;
    let requestURL = `https://www.google.com/search?q=${request.replace(/\s/g, "+")}`;

    location.href = requestURL;
});
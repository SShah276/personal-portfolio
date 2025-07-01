const api_url = "https://api.api-ninjas.com/v1/quotes";
const api_key = "43K+NsYXACiOwRqZfxsKwg==YAG0IMvtkCbGrSQR";

async function getQuote() {
    const response = await fetch(api_url, {
    headers: {
        'X-Api-Key': api_key
    }
    });

    var data = await response.json();
    console.log(data); // See the structure of the response
    const quoteObj = data[0]; // API returns an array with 1 quote

    document.getElementById("quote").innerText = `"${quoteObj.quote}"`;
    document.getElementById("author").innerText = `— ${quoteObj.author}`;
}

getQuote();
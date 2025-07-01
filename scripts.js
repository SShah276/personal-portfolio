function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}
// Show the 'About Me' section by default
document.addEventListener('DOMContentLoaded', () => {
    showSection('about');
});

const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

function toggleContent(link) {
    const fullContent = link.previousElementSibling;
    if (fullContent.style.display === 'none') {
        fullContent.style.display = 'block';
        link.textContent = 'Read Less';
    } else {
        fullContent.style.display = 'none';
        link.textContent = 'Read More';
    }
}

const quote = document.getElementById("quote") 
const author = document.getElementById("author");
const api_url = "https://api.realinspire.live/v1/quotes/random";
async function getQuote(url) {
    const response = await fetch(url)
    var data = await response.json()
    const quoteObj = data[0];
    console.log(data);
    quote.innerHTML = `"${quoteObj.content}"`;
    author.innerHTML = `— ${quoteObj.author}`;
}
getQuote(api_url);


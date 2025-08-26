let initialLoad = true;

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
        if (!initialLoad) {
            activeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}
// Show the 'About Me' section by default
document.addEventListener('DOMContentLoaded', () => {
    showSection('about');
    initialLoad = false;
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

const api_url = "https://dummyjson.com/quotes/random";

async function getQuote() {
  try {
    const res = await fetch(api_url);
    const data = await res.json();

    // Fix capitalization
    const fixedQuote = toSentenceCase(data.quote);
    const fixedAuthor = toTitleCase(data.author);

    document.getElementById("quote").innerHTML = `"${fixedQuote}"`;
    document.getElementById("author").innerHTML = `— ${fixedAuthor}`;
  } catch (err) {
    console.error("Fetch failed:", err);
  }
}

// Convert string to sentence case
function toSentenceCase(str) {
  return str
    .toLowerCase()
    .replace(/(^\w)|([.!?]\s+\w)/g, c => c.toUpperCase());
}

// Convert string to title case + remove extra spaces
function toTitleCase(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ") // remove double spaces
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

getQuote();



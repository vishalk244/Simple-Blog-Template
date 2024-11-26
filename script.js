// Sample articles data
const articles = [
  {
    title: "Getting Started with JavaScript",
    summary: "Learn the basics of JavaScript in this beginner-friendly tutorial.",
    content: "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn.",
    category: "JavaScript",
  },
  {
    title: "Understanding CSS Flexbox",
    summary: "A comprehensive guide to CSS Flexbox.",
    content: "The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning. The Flexbox Layout (Flexible Box) module aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic.",
    category: "CSS",
  },
  {
    title: "HTML Basics for Beginners",
    summary: "Everything you need to know about HTML to get started.",
    content: "HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn - You will enjoy it!",
    category: "HTML",
  },
];

// Function to display articles
function displayArticles(filteredArticles) {
  const articlesDiv = document.getElementById("articles");
  articlesDiv.innerHTML = ""; // Clear previous content

  filteredArticles.forEach((article, index) => {
    const articleElement = document.createElement("div");
    articleElement.classList.add("article");
    articleElement.innerHTML = `
      <h2>${article.title}</h2>
      <p>${article.summary}</p>
      <a href="#" onclick="viewArticle(${index})">Read More</a>
    `;
    articlesDiv.appendChild(articleElement);
  });
}

// Function to handle "Read More" click
function viewArticle(index) {
  const article = articles[index];
  const articlesDiv = document.getElementById("articles");
  articlesDiv.innerHTML = `
    <h2>${article.title}</h2>
    <p>${article.content}</p>
    <a href="index.html">Back to homepage</a>
  `;
}

// Search functionality
document.getElementById("searchBar").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query)
  );
  displayArticles(filteredArticles);
});

// Display all articles on page load
displayArticles(articles);

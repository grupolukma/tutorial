function searchTutorial() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const items = document.querySelectorAll(".tutorial-link");

  items.forEach(item => {
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(input) ? "block" : "none";
  });
}

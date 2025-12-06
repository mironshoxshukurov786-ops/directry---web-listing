const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
    const header = dropdown.querySelector("h2");
    const list = dropdown.querySelector("ul");

    header.addEventListener("click", () => {
        // Close other dropdowns
        dropdowns.forEach(d => {
            if (d !== dropdown) d.querySelector("ul").classList.add("hidden");
        });
        list.classList.toggle("hidden");
    });

    // Select an item
    list.querySelectorAll("li").forEach(item => {
        item.addEventListener("click", () => {
            header.innerHTML = item.textContent + ' <span class="ml-2">^</span>';
            list.classList.add("hidden");
        });
    });
});

// Close dropdown if clicked outside
document.addEventListener("click", (e) => {
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(e.target)) {
            dropdown.querySelector("ul").classList.add("hidden");
        }
    });
});

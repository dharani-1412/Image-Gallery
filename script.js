const apiKey = "quBkEKlICyx8BY3DF8QQcT9YuNa9CimIvNcmiAmNg7676nNNEkFdm7Sn";  // Replace with your API key
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input input");

async function fetchImages(query = "nature") {
    const url = `https://api.pexels.com/v1/search?query=${query}&per_page=100`;
    
    const response = await fetch(url, {
        headers: {
            Authorization: apiKey
        }
    });

    const data = await response.json();
    displayImages(data.photos);
}

function displayImages(images) {
    gallery.innerHTML = "";  // Clear previous images

    images.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image.src.large;
        imgElement.alt = image.photographer;
        gallery.appendChild(imgElement);
    });
}

// Fetch default images on page load
fetchImages();

// Event listener for search functionality
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        fetchImages(searchInput.value);
    }
});

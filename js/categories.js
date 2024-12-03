const categories = document.querySelectorAll('.category');

categories.forEach(category => {
    category.addEventListener('click', (event) => {
        const selectedCategory = event.currentTarget.id;
        
        localStorage.setItem('selectedCategory', selectedCategory);

        window.location.href = "../gamePage.html";
    });
});
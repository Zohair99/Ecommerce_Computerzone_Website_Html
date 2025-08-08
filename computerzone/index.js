let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);
}

// dots.forEach((li, key) => {
//     li.addEventListener('click', ()=>{
//          active = key;
//          reloadSlider();
//     })
// })
// window.onresize = function(event) {
//     reloadSlider();
// };


// searchbar

// document.addEventListener("DOMContentLoaded", function () {
//     const searchBar = document.getElementById("searchbar");
//     const searchIcon = document.getElementById("search-icon");
    
//     function performSearch() {
//         const query = searchBar.value.trim();
//         if (query !== "") {
//             // Redirect to a search results page or perform an action
//             console.log("Searching for:", query);
//             window.location.href = `search.html?q=${encodeURIComponent(query)}`;
//         } else {
//             alert("Please enter a search term.");
//         }
//     }
    
//     // Trigger search when clicking the icon
//     searchIcon.addEventListener("click", performSearch);
    
//     // Trigger search when pressing Enter key
//     searchBar.addEventListener("keypress", function (event) {
//         if (event.key === "Enter") {
//             performSearch();
//         }
//     });
// });

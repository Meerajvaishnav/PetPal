document.addEventListener("DOMContentLoaded", function() {
    var searchButton = document.getElementById("searchButton");
    var searchInput = document.getElementById("searchInput");

    searchButton.addEventListener("click", function() {
        var keyword = searchInput.value.toLowerCase().trim();
        var section = document.getElementById(keyword);

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        } else {
            alert("No results found for the keyword: " + keyword);

        }
    });
});
 
document.addEventListener('DOMContentLoaded', function() {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    var totalCost = parseFloat(localStorage.getItem('totalCost')) || 0;
    var cartItemsContainer = document.getElementById('cart-items');
    var totalCostElement = document.getElementById('total-cost');

    cartItems.forEach(function(item) {
        var itemElement = document.createElement('div');
        itemElement.textContent = item.name + ' - Rs.' + item.price; 
        cartItemsContainer.appendChild(itemElement);
    });

 
    totalCostElement.textContent = 'Total: Rs.' + totalCost.toFixed(2); 

    
    var removeAllButton = document.querySelector('.remove-items');
    removeAllButton.addEventListener('click', function() {
        localStorage.removeItem('cartItems');
        localStorage.removeItem('totalCost');
        cartItemsContainer.innerHTML = ''; 
        totalCostElement.textContent = 'Total: Rs.0.00'; 
        alert('All items are getting removed from the cart. Press OK to confirm.');
    });
});

var addToCartButtons = document.querySelectorAll('.cart-button');
addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var product = this.parentNode;
        var itemName = product.getAttribute('data-name'); 
        var itemPrice = parseFloat(product.getAttribute('data-price')); 
        var item = { name: itemName, price: itemPrice };

        var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(item);

        var totalCost = parseFloat(localStorage.getItem('totalCost')) || 0;
        totalCost += itemPrice;

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('totalCost', totalCost);

        alert(itemName + ' added to cart');
    });
});

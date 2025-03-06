
function getItemImage(item) {
    const menuImages = {
        B: "MC images/burger.png",
        F: "MC images/fries.png",
        C: "MC images/coke.png",
        S: "MC images/sprite.png",
        I: "MC images/icecream.png",
        M: "MC images/mcflurry.png",
    };
    return menuImages[item.toUpperCase()] || null;
}


function addToOrder() {
    const itemInput = document.getElementById("itemInput").value.toUpperCase();
    const itemQuantity = parseInt(document.getElementById("itemQuantity").value);
    const gallery = document.getElementById("imageGallery");


    if (!itemInput || !getItemImage(itemInput)) {
        alert("Invalid menu key. Please enter a valid key (B, F, C, etc.).");
        return;
    }

    if (isNaN(itemQuantity) || itemQuantity < 1) {
        alert("Please enter a valid quantity (1 or more).");
        return;
    }

    
    for (let i = 0; i < itemQuantity; i++) {
        const img = document.createElement("img");
        img.src = getItemImage(itemInput);
        img.alt = itemInput;
        gallery.appendChild(img);
    }
}


const menuPrices = {
    B: 5, 
    F: 3, 
    C: 2, 
    S: 2, 
    I: 4, 
    M: 6  
};

function calculateTotal() {
    let total = 0;
    document.querySelectorAll("#imageGallery img").forEach(img => {
        const menuKey = img.alt;
        total += menuPrices[menuKey];
    });
    alert(`Total Price: $${total}`);
}


function resetOrder() {
    const gallery = document.getElementById("imageGallery");
    gallery.innerHTML = ""; 
}

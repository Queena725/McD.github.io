function checkSum() {
    const input1 = document.getElementById("charInput1").value;
    const input2 = document.getElementById("charInput2").value;
    const gallery = document.getElementById("imageGallery");

 
    if (!input1 || !input2 || input1.length !== 1 || input2.length !== 1) {
        alert("Please enter exactly one character in both fields.");
        return;
    }

   
    const ascii1 = input1.charCodeAt(0);
    const ascii2 = input2.charCodeAt(0);

  
    const sum = ascii1 + ascii2;


    if (sum % 2 === 0) {
        const img = document.createElement("img");
        img.src = getRandomMenuImage(); 
        img.alt = "McDonald's Menu Item";
        gallery.appendChild(img);

       
        window.scrollTo(0, 0);
    } else {
        alert("Sum is odd! Try again with different characters.");
    }
}

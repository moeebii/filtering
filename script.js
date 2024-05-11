document.addEventListener("DOMContentLoaded", function() {
  // Get the <span> element by its ID
  var lastUpdatedElement = document.getElementById("last-updated");
  
  // Set the current date as the last updated date
  var currentDate = new Date();
  var monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
  var formattedDate = "Last updated on " + monthNames[currentDate.getMonth()] + " " + currentDate.getDate() + ", " + currentDate.getFullYear();
  
  // Update the text content of the <span> element
  lastUpdatedElement.textContent = formattedDate;
});


// Data for filtering
var data = [
  {
      "name": "The Lost Words",
      "year": "2023",
      "type": "Book",
      "print": "Laser",
      "bind": "Perfect Binding",
      "assets": "asset1.png"
  },
  {
      "name": "Blue Girl: V1",
      "year": "2024",
      "type": "Zine",
      "print": "Risograph",
      "bind": "One Page",
      "assets": "asset2.png"
  },

  {
      "name": "Blue Girl: V2",
      "year": "2024",
      "type": "Zine",
      "print": "Laser",
      "bind": "One Page",
      "assets": "asset3.png"
  },
  {
      "name": "Dogs on Instagram",
      "year": "2024",
      "type": "Zine",
      "print": "Risograph",
      "bind": "Saddle Stitching",
      "assets": "asset4.png"
  },
  {
      "name": "The Healing Table",
      "year": "2024",
      "type": "Book",
      "print": "Laser",
      "bind": "Saddle Stitching",
      "assets": "asset5.png"
  },
         {
        "name": "A City Guide of Nouvert",
        "year": "2024",
        "type": "Book",
        "print": "Laser",
        "bind": "Stapled",
        "assets": "asset6.png"
    },


        {
        "name": "Dogs on Instagram (mini)",
        "year": "2024",
        "type": "Zine",
        "print": "Risograph",
        "bind": "One Page",
        "assets": "asset7.png"
    }

];



document.addEventListener("DOMContentLoaded", function() {
  var container = document.getElementById("image-container");

  function displayAllImages() {
      container.innerHTML = ""; // Clear previous content
      data.forEach(function(item) {
          var image = document.createElement("img");
          image.src = item.assets;
          container.appendChild(image);
      });
  }

  displayAllImages();

  function filter(category) {
      container.innerHTML = ""; // Clear previous content

      data.forEach(function(item) {
          if (item.year === category || item.type === category || item.print === category || item.bind === category) {
              var image = document.createElement("img");
              image.src = item.assets;
              container.appendChild(image);
          }
      });
  }

  function hideImages(category, value) {
      var images = document.querySelectorAll("#image-container img");
      images.forEach(function(image) {
          // Get the data category of the image
          var imageData = data.find(item => item.assets === image.src);
          if (imageData && imageData[category] === value) {
              image.style.display = "none"; // Hide images with the specified category and value
          }
      });
  }

  // Add event listeners to filter buttons
  var filterButtons = document.querySelectorAll("#filter-buttons button");
  filterButtons.forEach(function(button) {
      button.addEventListener("click", function() {
          var category = this.textContent; // Get the category from button text
          filter(category); // Filter images based on the category
      });
  });
});


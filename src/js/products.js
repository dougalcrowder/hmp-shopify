function relatedProducts() {

    function loadProductRecommendationsIntoSection() {
       // Look for an element with class 'product-recommendations'
       var productRecommendationsSection = document.querySelector(".product-recommendations");
       if (productRecommendationsSection === null) { return; }
       // Read product id from data attribute
       var productId = productRecommendationsSection.dataset.productId;
       // Read base URL from data attribute
       var baseUrl = productRecommendationsSection.dataset.baseUrl;
       // Read limit from data attribute
       var limit = productRecommendationsSection.dataset.limit;
       // Build request URL
       var requestUrl = baseUrl + "?section_id=product-recommendations&product_id=" + productId + "&limit=" + limit;
       // Create request and submit it using Ajax
       var request = new XMLHttpRequest();
       request.open("GET", requestUrl);
       request.onload = function() {
         if (request.status >= 200 && request.status < 300) {
           var container = document.createElement("div");
           container.innerHTML = request.response;
           productRecommendationsSection.parentElement.innerHTML = container.querySelector(".product-recommendations").innerHTML;
         }
       };
       request.send();
     };
    
    // Listen for changes done in the Theme Editor
     document.addEventListener("shopify:section:load", function(event) {
       if (event.detail.sectionId === "product-recommendations") {
         loadProductRecommendationsIntoSection();
       }
     });
     // Fetching the recommendations on page load
     loadProductRecommendationsIntoSection();

}

relatedProducts();
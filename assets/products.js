!function(){function e(){var e=document.querySelector(".product-recommendations");if(null!==e){var t=e.dataset.productId,n=e.dataset.baseUrl+"?section_id=product-recommendations&product_id="+t+"&limit="+e.dataset.limit,o=new XMLHttpRequest;o.open("GET",n),o.onload=function(){if(o.status>=200&&o.status<300){var t=document.createElement("div");t.innerHTML=o.response,e.parentElement.innerHTML=t.querySelector(".product-recommendations").innerHTML}},o.send()}}document.addEventListener("shopify:section:load",(function(t){"product-recommendations"===t.detail.sectionId&&e()})),e()}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2Fzc2V0cy9wcm9kdWN0cy5qcyIsIm1hcHBpbmdzIjoiQ0FBQSxXQUVJLFNBQVNBLElBRU4sSUFBSUMsRUFBZ0NDLFNBQVNDLGNBQWMsNEJBQzNELEdBQXNDLE9BQWxDRixFQUFKLENBRUEsSUFBSUcsRUFBWUgsRUFBOEJJLFFBQVFELFVBTWxERSxFQUpVTCxFQUE4QkksUUFBUUUsUUFJekIsa0RBQW9ESCxFQUFZLFVBRi9FSCxFQUE4QkksUUFBUUcsTUFJOUNDLEVBQVUsSUFBSUMsZUFDbEJELEVBQVFFLEtBQUssTUFBT0wsR0FDcEJHLEVBQVFHLE9BQVMsV0FDZixHQUFJSCxFQUFRSSxRQUFVLEtBQU9KLEVBQVFJLE9BQVMsSUFBSyxDQUNqRCxJQUFJQyxFQUFZWixTQUFTYSxjQUFjLE9BQ3ZDRCxFQUFVRSxVQUFZUCxFQUFRUSxTQUM5QmhCLEVBQThCaUIsY0FBY0YsVUFBWUYsRUFBVVgsY0FBYyw0QkFBNEJhLFNBQzlHLENBQ0YsRUFDQVAsRUFBUVUsTUFuQjhDLENBb0J4RCxDQUdBakIsU0FBU2tCLGlCQUFpQix3QkFBd0IsU0FBU0MsR0FDMUIsNEJBQTNCQSxFQUFNQyxPQUFPQyxXQUNmdkIsR0FFSixJQUVBQSxHQUVMLENBRUF3QiIsInNvdXJjZXMiOlsid2VicGFjazovL2htcC8uL3NyYy9qcy9wcm9kdWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiByZWxhdGVkUHJvZHVjdHMoKSB7XG5cbiAgICBmdW5jdGlvbiBsb2FkUHJvZHVjdFJlY29tbWVuZGF0aW9uc0ludG9TZWN0aW9uKCkge1xuICAgICAgIC8vIExvb2sgZm9yIGFuIGVsZW1lbnQgd2l0aCBjbGFzcyAncHJvZHVjdC1yZWNvbW1lbmRhdGlvbnMnXG4gICAgICAgdmFyIHByb2R1Y3RSZWNvbW1lbmRhdGlvbnNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0LXJlY29tbWVuZGF0aW9uc1wiKTtcbiAgICAgICBpZiAocHJvZHVjdFJlY29tbWVuZGF0aW9uc1NlY3Rpb24gPT09IG51bGwpIHsgcmV0dXJuOyB9XG4gICAgICAgLy8gUmVhZCBwcm9kdWN0IGlkIGZyb20gZGF0YSBhdHRyaWJ1dGVcbiAgICAgICB2YXIgcHJvZHVjdElkID0gcHJvZHVjdFJlY29tbWVuZGF0aW9uc1NlY3Rpb24uZGF0YXNldC5wcm9kdWN0SWQ7XG4gICAgICAgLy8gUmVhZCBiYXNlIFVSTCBmcm9tIGRhdGEgYXR0cmlidXRlXG4gICAgICAgdmFyIGJhc2VVcmwgPSBwcm9kdWN0UmVjb21tZW5kYXRpb25zU2VjdGlvbi5kYXRhc2V0LmJhc2VVcmw7XG4gICAgICAgLy8gUmVhZCBsaW1pdCBmcm9tIGRhdGEgYXR0cmlidXRlXG4gICAgICAgdmFyIGxpbWl0ID0gcHJvZHVjdFJlY29tbWVuZGF0aW9uc1NlY3Rpb24uZGF0YXNldC5saW1pdDtcbiAgICAgICAvLyBCdWlsZCByZXF1ZXN0IFVSTFxuICAgICAgIHZhciByZXF1ZXN0VXJsID0gYmFzZVVybCArIFwiP3NlY3Rpb25faWQ9cHJvZHVjdC1yZWNvbW1lbmRhdGlvbnMmcHJvZHVjdF9pZD1cIiArIHByb2R1Y3RJZCArIFwiJmxpbWl0PVwiICsgbGltaXQ7XG4gICAgICAgLy8gQ3JlYXRlIHJlcXVlc3QgYW5kIHN1Ym1pdCBpdCB1c2luZyBBamF4XG4gICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgcmVxdWVzdFVybCk7XG4gICAgICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgICAgICBwcm9kdWN0UmVjb21tZW5kYXRpb25zU2VjdGlvbi5wYXJlbnRFbGVtZW50LmlubmVySFRNTCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3QtcmVjb21tZW5kYXRpb25zXCIpLmlubmVySFRNTDtcbiAgICAgICAgIH1cbiAgICAgICB9O1xuICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgICB9O1xuICAgIFxuICAgIC8vIExpc3RlbiBmb3IgY2hhbmdlcyBkb25lIGluIHRoZSBUaGVtZSBFZGl0b3JcbiAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNob3BpZnk6c2VjdGlvbjpsb2FkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgaWYgKGV2ZW50LmRldGFpbC5zZWN0aW9uSWQgPT09IFwicHJvZHVjdC1yZWNvbW1lbmRhdGlvbnNcIikge1xuICAgICAgICAgbG9hZFByb2R1Y3RSZWNvbW1lbmRhdGlvbnNJbnRvU2VjdGlvbigpO1xuICAgICAgIH1cbiAgICAgfSk7XG4gICAgIC8vIEZldGNoaW5nIHRoZSByZWNvbW1lbmRhdGlvbnMgb24gcGFnZSBsb2FkXG4gICAgIGxvYWRQcm9kdWN0UmVjb21tZW5kYXRpb25zSW50b1NlY3Rpb24oKTtcblxufVxuXG5yZWxhdGVkUHJvZHVjdHMoKTsiXSwibmFtZXMiOlsibG9hZFByb2R1Y3RSZWNvbW1lbmRhdGlvbnNJbnRvU2VjdGlvbiIsInByb2R1Y3RSZWNvbW1lbmRhdGlvbnNTZWN0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHJvZHVjdElkIiwiZGF0YXNldCIsInJlcXVlc3RVcmwiLCJiYXNlVXJsIiwibGltaXQiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwib25sb2FkIiwic3RhdHVzIiwiY29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInJlc3BvbnNlIiwicGFyZW50RWxlbWVudCIsInNlbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJkZXRhaWwiLCJzZWN0aW9uSWQiLCJyZWxhdGVkUHJvZHVjdHMiXSwic291cmNlUm9vdCI6IiJ9
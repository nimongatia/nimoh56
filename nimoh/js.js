const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',() =>{
        if(nav) {
        nav.classList.add('active');
        }
    });
}


if (close) {
  close.addEventListener('click',() =>{
      if(nav) {
      nav.classList.remove('active');
      }
  });
}




var MainImg = document.getElementById("MainImg");
        var smalling = document.getElementsByClassName("small-img")

        smalling[0].onclick = function(){
          MainImg.src = smalling[0].src;
        }
        smalling[1].onclick = function(){
          MainImg.src = smalling[1].src;
        }
        smalling[2].onclick = function(){
          MainImg.src = smalling[2].src;
        }
        smalling[3].onclick = function(){
          MainImg.src = smalling[3].src;
        }
        

  
      
    
       /*window.onload = displayCart;*/

       
    // Get checkout button element
    var checkoutBtn = document.getElementById('checkoutBtn');

    // Function to open the payment modal
    checkoutBtn.onclick = function() {
        var modal = document.getElementById("paymentModal");
        modal.style.display = "block";
    }

    // Function to handle payment success (can be placed in a separate script or combined)
    function paymentSuccessful() {
        alert("Payment Successful!");
        // Optionally, you can redirect or perform other actions after payment success
    }


      
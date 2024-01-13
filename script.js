const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((btn) => btn.classList.remove("active"));

    btn.classList.add("active");
    const tabContents = document.querySelectorAll(".tab-content");

    // tabContents.forEach((tabContent) => {
    //   tabContent.className = tabContent.className.replace("active", "");
    // });

    tabContents.forEach((tab) => tab.classList.remove("active"));

    document.querySelector(btn.dataset.targetTab).classList.add("active");
  });
});


// document.onkeydown = (e) => {
//   if (e.key == 123) {
//       e.preventDefault();
//   }
//   if (e.ctrlKey && e.shiftKey && e.key == 'I') {
//       e.preventDefault();
//   }
//   if (e.ctrlKey && e.shiftKey && e.key == 'C') {
//       e.preventDefault();
//   }
//   if (e.ctrlKey && e.shiftKey && e.key == 'J') {
//       e.preventDefault();
//   }
//   if (e.ctrlKey && e.key == 'U') {
//       e.preventDefault();
//   }
// };


// $(document).ready(function() {
//   $('body').bind('cut copy paste', function(event) {
//   event.preventDefault();
//   });
//   });

// document.oncontextmenu = new Function("return false");


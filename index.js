document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
     
    });
const buttons = document.querySelectorAll('.topbar .top_bar_btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
   
    buttons.forEach(top_bar_btn => top_bar_btn.classList.remove('active'));
    
    // ক্লিক করা বাটনে active দাও
    button.classList.add('active');
  });
});

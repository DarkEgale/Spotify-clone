document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
     
    });
const buttons = document.querySelectorAll('.topbar .top_bar_btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
   
    buttons.forEach(top_bar_btn => top_bar_btn.classList.remove('active'));
    button.classList.add('active');
  });
});

    document.addEventListener('mousemove', function(event) {
      const motion = document.getElementById("motion");
      const offsetX = motion.offsetWidth / 2;
      const offsetY = motion.offsetHeight / 2;
      motion.style.left = (event.pageX - offsetX) + "px";
      motion.style.top = (event.pageY - offsetY) + "px";
    });
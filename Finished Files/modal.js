// Get the modal
var modal = document.getElementById("onExitModal");

// Get the <span> element x that closes the modal
var span = document.getElementsByClassName("close")[0];

const exitEvent = e => {
  if (!e.toElement && !e.relatedTarget && e.clientY < 5) {
    document.removeEventListener('mouseout', exitEvent);
    modal.style.display = "block";
  }
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = (e) => {
  console.log(e.target)
  if (e.target === modal) {
    console.log(e.target)
    modal.style.display = "none";
  }
} 

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  modal.style.display = "none";
}

setTimeout(() => {
  document.addEventListener('mouseout', exitEvent);
}, 6000);
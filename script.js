document.addEventListener("DOMContentLoaded", () => {
    const footer = document.getElementById("dynamicFooter");
  
    footer.addEventListener("mouseover", () => {
      footer.style.transform = "scale(1.05)"; 
    });
  
    footer.addEventListener("mouseleave", () => {
      footer.style.transform = "scale(1)"; 
    });
  });
  


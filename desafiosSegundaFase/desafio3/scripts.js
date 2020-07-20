const cards = document.querySelectorAll(".card");
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");

for(let card of cards){
  card.addEventListener("click", (event) => {
    const pageId = card.getAttribute("id");

    modalOverlay.classList.add("active");
    document.querySelector("iframe")
      .src = `https://rocketseat.com.br/${pageId}`

    if(modal.classList.contains("maximize")){
      modal.classList.remove("maximize");
    };
  });
};

document.querySelector(".close-modal")
  .addEventListener("click", () => {
    modalOverlay.classList.remove("active");
    document.querySelector("iframe").src = ""
  });

document.querySelector(".maximize-modal")
  .addEventListener("click", () => {
    modal.classList.toggle("maximize");
  });
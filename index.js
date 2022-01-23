const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
  }
}

let contrastToggle = false;

const toggleContrast = () => {
  contrastToggle
    ? document.body.classList.remove("dark-theme")
    : (document.body.classList += " dark-theme");
  contrastToggle ? (contrastToggle = false) : (contrastToggle = true);
};

const contact = (event) => {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_z4st7fq",
      "template_5cpfoht",
      event.target,
      "user_5lfg9OpaeiKM55LLfgB4D"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "Der Email Service ist derzeit nicht verfügbar. Bitte kontaktiere mich direkt über sedataltintarla@gmail.com"
      );
    });
};

let modalOpen = false;

const toggleModal = () => {
  modalOpen
    ? document.body.classList.remove("modal--open")
    : (document.body.classList += " modal--open");
  modalOpen ? (modalOpen = false) : (modalOpen = true);
};

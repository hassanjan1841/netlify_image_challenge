const button = document.querySelector("button");
const para = document.querySelector("p");
button.addEventListener("click", async () => {
  para.innerText = "loading";
  const response = await fetch("/.netlify/functions/hello").then((response) =>
    response.json()
  );
  para.innerText = JSON.stringify(response.message);
  console.log(response.message);

  //   const responseBlog = await fetch("/.netlify/functions/blobsTry").then(
  //     (response) => response.json()
  //   );

  console.log(responseBlog);
});

const widthInput = document.querySelector("#width");
const heightInput = document.querySelector("#height");
const formatOption = document.querySelector("#format");
const imageLink = document.querySelector(".image-link");
const imageContainer = document.querySelector(".image-container");
const changeBtn = document.querySelector(".change-btn");

function changeImage(widthInput, heightInput, format) {
  imageContainer.innerHTML = `<img
          src=".netlify/images?url=light.jpg&w=${widthInput}&h=${heightInput}&fm=${format}"
          alt="light bulb image" class="image"
          />`;
}

const errorContainer = document.querySelector(".error-modal-container");
const errorModal = document.querySelector(".error-modal p");

changeBtn.addEventListener("click", () => {
  if (!isNaN(widthInput.value) && !isNaN(heightInput.value)) {
    changeImage(widthInput.value, heightInput.value, formatOption.value);
  } else {
    console.log("sorry bro alphas are not allowed");
    errorContainer.style.display = "flex";
    errorModal.innerHTML = "Alphas Are not allowed";
  }
  const image = document.querySelector(".image");
  if (image) {
    imageLink.innerHTML = image.src;
  }
});

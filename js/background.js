const images = [
  "https://i.pinimg.com/1200x/02/74/45/027445e60c4f36863bb2a1afc4112855.jpg",
  "https://i.pinimg.com/736x/f9/97/70/f99770f7b943d7c72a2416856e62b1ed.jpg",
  "https://i.pinimg.com/736x/af/17/cb/af17cb951001f60ba69c8196d97a9442.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = chosenImage;

document.body.appendChild(bgImage);

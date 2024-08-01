async function loadGuaData() {
  const response = await fetch("guaData.json");
  const data = await response.json();
  return data;
}

loadGuaData().then(data => {
  const button = document.querySelector(".drawButton");
  const guaShapeDiv = document.querySelector(".guaShape");
  const guaTitleDiv = document.querySelector(".guaTitle");
  const guaContentDiv = document.querySelector(".guaContent");

  button.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * data.length);
    const gua = data[randomIndex];

    guaShapeDiv.textContent = gua.shpae;
    guaTitleDiv.textContent = gua.title;
    guaContentDiv.textContent = gua.content;
  });
});

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
    const randomGuaIndex = Math.floor(Math.random() * data.length);
    const gua = data[randomGuaIndex];

    const hyoKeys = Object.keys(gua.hyoContent);
    const randomHyoIndex = Math.floor(Math.random() * hyoKeys.length);
    const hyoKey = hyoKeys[randomHyoIndex];
    const hyo = gua.hyoContent[hyoKey];

    guaShapeDiv.textContent = gua.symbol;
    guaTitleDiv.textContent = `${gua.title} ${hyoKey} (${gua.index}-${6 - randomHyoIndex})`;
    guaContentDiv.textContent = hyo;
  });
});

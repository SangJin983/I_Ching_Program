const guaShapes = [
  '☰', '☱', '☲', '☳', '☴', '☵', '☶', '☷', // 건태이진 손감간곤
];

const guaTitles = [
  "건괘", "태괘", "이괘", "진괘", "손괘", "감괘", "간괘", "곤괘",
];

const guaContents = [
  "건괘는 하늘을 뜻합니다.",
  "태괘는 호수를 뜻합니다.",
  "이괘는 불을 뜻합니다.",
  "진괘는 벼락을 뜻합니다.",
  "손괘는 바람을 뜻합니다.",
  "감괘는 물을 뜻합니다.",
  "간괘는 산을 뜻합니다.",
  "곤괘는 땅을 뜻합니다.",
];

const button = document.querySelector(".drawButton");
const guaShapeDiv = document.querySelector(".guaShape");
const guaTitleDiv = document.querySelector(".guaTitle");
const guaContentDiv = document.querySelector(".guaContent");

button.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * guaShapes.length);
  guaShapeDiv.textContent = guaShapes[randomIndex];
  guaTitleDiv.textContent = guaTitles[randomIndex];
  guaContentDiv.textContent = guaContents[randomIndex];
});

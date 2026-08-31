const ctx1 = document.getElementById("side_img").getContext("2d");
const ctx2 = document.getElementById("front_img").getContext("2d");

const side_up = document.getElementById("side_up");
const side_b = document.getElementById("side_b");
const front_up = document.getElementById("front_up");
const front_b = document.getElementById("front_b");

side_b.addEventListener("click", () => {
  side_up.click();
});

front_b.addEventListener("click", () => {
  front_up.click();
});

function Fileupload(hand_up, canvas_id) {
  const file = hand_up.files[0];

  if (!file) {
    return;
  }

  if (!file.type.startsWith('image/')) {
    alert('画像ファイルを選択してください。');
    hand_up.value = '';
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const img = document.getElementById(canvas_id);
    img.src = e.target.result;
    img.style.display = 'block';
    img.style.backgroundImage = `url("${e.target.result}")`;
  };
  reader.readAsDataURL(file);
}

side_up.addEventListener("change", () => {
  Fileupload(side_up, "side_img");
});

front_up.addEventListener("change", () => {
  Fileupload(front_up, "front_img");
});
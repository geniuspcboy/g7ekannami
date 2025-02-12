const check1 = document.getElementById("q1");
const text1 = document.getElementById("a1");

// チェックボックス2とラベル2の処理
const check2 = document.getElementById("q2");
const text2 = document.getElementById("a2");

const checkbox3 = document.getElementById("m3");
const label3 = document.getElementById("t3");
const checkbox4 = document.getElementById("m4");
const label4 = document.getElementById("t4");
const checkbox5 = document.getElementById("m5");
const label5 = document.getElementById("t5");
const checkbox6 = document.getElementById("m6");
const label6 = document.getElementById("t6");

const checkbox7 = document.getElementById("m7");
const label7 = document.getElementById("t7");
const checkbox8 = document.getElementById("m8");
const label8 = document.getElementById("t8");
check1.addEventListener("change", () => {
  if (check1.checked) {
    text1.innerHTML =
      "①　　４７<br>　　　＋６２<br>　　　￣￣￣<br><span class='red'>　　　１０９";
  } else {
    text1.innerHTML =
      "①　　４７<br>　　　＋６２<br>　　　￣￣￣<br>　　　　　　";
  }
});
check2.addEventListener("change", () => {
  if (check2.checked) {
    text2.innerHTML =
      "②　　５３<br>　　　＋９８<br>　　　￣￣￣<br><span class='red'>　　　１５１";
  } else {
    text2.innerHTML =
      "②　　５３<br>　　　＋９８<br>　　　￣￣￣<br>　　　　　　";
  }
});
checkbox3.addEventListener("change", () => {
  if (checkbox3.checked) {
    label3.innerHTML = "③　(<span class='red'>　元気</span>)な声。";
  } else {
    label3.textContent = "③　(げんき)な声。";
  }
});
checkbox4.addEventListener("change", () => {
  if (checkbox4.checked) {
    label4.innerHTML = "④　(<span class='red'>　正</span>)夢を見る。";
  } else {
    label4.textContent = "④　(まさ)夢を見る。";
  }
});
checkbox5.addEventListener("change", () => {
  if (checkbox5.checked) {
    label5.innerHTML = "⑤　笛の(<span class='red'>　音色</span>)。";
  } else {
    label5.textContent = "⑤　笛の(ねいろ)。";
  }
});
checkbox6.addEventListener("change", () => {
  if (checkbox6.checked) {
    label6.innerHTML = "⑥　(<span class='red'>　思考</span>)回路";
  } else {
    label6.textContent = "⑥　(しこう)回路";
  }
});
checkbox7.addEventListener("change", () => {
  if (checkbox7.checked) {
    label7.innerHTML = "⑦　(<span class='red'>　人間　</span>)の心。";
  } else {
    label7.textContent = "⑦　(にんげん)の心。";
  }
});
checkbox8.addEventListener("change", () => {
  if (checkbox8.checked) {
    label8.innerHTML = "⑧　牛の(<span class='red'>　角</span>)。";
  } else {
    label8.textContent = "⑧　牛の(つの)。";
  }
});

// チェックボックス1とラベル1の処理
const checkbox1 = document.getElementById("m1");
const label1 = document.getElementById("t1");

// チェックボックス2とラベル2の処理
const checkbox2 = document.getElementById("m2");
const label2 = document.getElementById("t2");

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

// チェックボックス1が変更されたときの処理
checkbox1.addEventListener("change", () => {
  if (checkbox1.checked) {
    label1.innerHTML = "①　(　<span class='red'>絵画</span>)展";
  } else {
    label1.textContent = "①　(かいが)展";
  }
});

// チェックボックス2が変更されたときの処理
checkbox2.addEventListener("change", () => {
  if (checkbox2.checked) {
    label2.innerHTML = "②　悲(<span class='red'>　鳴</span>)を上げる。";
  } else {
    label2.textContent = "②　悲(めい)を上げる。";
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

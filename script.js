function diagnosis() {
  const types = [
    "コツコツ頑張るタイプ！",
    "周りをよく見て行動するタイプ！",
    "新しいことに挑戦するタイプ！",
    "自分のペースを大切にするタイプ！"
  ];

  const random = Math.floor(Math.random() * types.length);

  document.getElementById("result").textContent = types[random];
}

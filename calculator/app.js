document.addEventListener("DOMContentLoaded", () => {
  let main = document.querySelector("#main");
  let prompt = document.createElement("input");
  main.append(prompt);
  prompt.classList = "normal";
  let grid = document.createElement("div");
  main.append(grid);
  grid.classList = "grid gap-2";
  grid.style = "grid-template-columns: repeat(4, 1fr)";
  let buttons = [
    ["(", ")", "%", "clear"],
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "=", "+"],
  ];
  for (let y of buttons) {
    for (let btn of y) {
      let text = btn;
      btn = document.createElement("button");
      grid.append(btn);
      btn.classList = "normal";
      if (text == "clear") {
        btn.classList = "secondary";
        btn.addEventListener("click", () => {
          prompt.value = "";
        });
      } else if (text == "=") {
        btn.classList = "primary";
        btn.addEventListener("click", () => {
          prompt.value = eval(prompt.value);
        });
      } else {
        btn.addEventListener("click", () => {
          prompt.value += text;
        });
      }
      btn.textContent = text;
    }
  }
});

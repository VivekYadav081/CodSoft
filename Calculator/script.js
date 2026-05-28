 let display = document.getElementById("display");

      let buttons = document.querySelectorAll("button");

      let expression = "";

      for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
          let value = buttons[i].innerText;

          if (value == "C") {
            expression = "";
            display.value = "";
          } else if (value == "=") {
            try {
              expression = eval(expression);
              display.value = expression;
            } catch {
              display.value = "Error";
            }
          } else {
            expression += value;
            display.value = expression;
          }
        });
      }
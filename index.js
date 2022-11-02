var buttonsList = document.querySelectorAll(".accordion__item");

buttonsList.forEach((element) => {
  var currentAccordionButton = element.firstElementChild;

  currentAccordionButton.addEventListener("click", (event) => {
    var currentAccordionContent = element.lastElementChild;
    var currentDisplay = currentAccordionContent.style.display;

    if (currentDisplay == "block") {
      currentAccordionContent.style.display = "none";
      currentAccordionButton.classList.remove("fw-700");
      currentAccordionButton.firstElementChild.style.transform = "rotate(0deg)";
    } else {
      buttonsList.forEach((element) => {
        element.lastElementChild.style.display = "none";
        element.firstElementChild.classList.remove("fw-700");
        element.firstElementChild.firstElementChild.style.transform =
          "rotate(0deg)";
      });
      currentAccordionContent.style.display = "block";
      currentAccordionButton.classList.add("fw-700");
      currentAccordionButton.firstElementChild.style.transform =
        "rotate(180deg)";
    }
  });
});

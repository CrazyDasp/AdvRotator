const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
  const rotatorCases = Array.from(rotator.querySelectorAll(".rotator__case"));
  let rotatorCounter = 0;

  function rotate() {
    rotatorCases[rotatorCounter].classList.remove("rotator__case_active");

    rotatorCounter = (rotatorCounter + 1) % rotatorCases.length;

    const nextCase = rotatorCases[rotatorCounter];
    nextCase.classList.add("rotator__case_active");

    const color = nextCase.getAttribute("data-color");
    nextCase.style.color = color;

    const speed = nextCase.getAttribute("data-speed");
    setTimeout(rotate, speed);
  }

  setTimeout(rotate, rotatorCases[rotatorCounter].getAttribute("data-speed"));
});
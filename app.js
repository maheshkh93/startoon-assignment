function setValues() {
  let z = 0;
  let x = document.getElementById("value1");
  let y = document.getElementById("value2");
  let fill = document.querySelector(":root");
  let percentage = document.getElementsByClassName("percentage");
  if (x.value * 1 < y.value * 1) {
    alert("ERROR : Input value is exceeding Max Value");
  } else {
    z = (y.value / x.value) * 100;
  }
  fill.style.setProperty("--barPercentage", `${100 - z}%`);
  fill.style.setProperty("--circleAngle", `${(z / 100) * 360}deg`);
  percentage[0].innerHTML = `${z.toPrecision(4)}%`;
  percentage[1].innerHTML = `${z.toPrecision(4)}%`;
  percentage[2].innerHTML = `${z.toPrecision(4)}%`;
}

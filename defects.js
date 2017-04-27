var defect = document.querySelector("select");



defect.addEventListener("input", function(event) {
  //once defect is selected, add cause and remedy to page-heading
  var chosenDefect = (this.value);
  console.log(chosenDefect);
  console.log(chosenDefect.cause);
});

// TODO  make the defect part of each object, iterate through the objects, match to type, return cause / remedy
var highAa = {
  cause: "Incorrect profile for Low AA level",
  remedy: ["Reduce Machine Heats", "Reduce Mold Temperature", "Reduce Screw RPM (shear heat)", "Reduce Injection Fill Rate", "Reduce Transfer Rate", "Minimize Screw Cushion 10-20mm", "Minimize Residence Time", "Remove Barrel Head Filter", "Q.A. Check Material I.V>"]
};

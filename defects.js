var defect = document.querySelector("select");
var remedyList = document.querySelector("#remedy");
var causeList = document.querySelector("#cause");
var displayCause = [];
var displayRemedy = [];


defect.addEventListener("input", function(event) {
  while (causeList.firstChild) {
    causeList.removeChild(causeList.firstChild);
  };
  while (remedyList.firstChild) {
    remedyList.removeChild(remedyList.firstChild);
  };
  //once defect is selected, add cause and remedy to page-heading
  var chosenDefect = (this.value);
  //iterate through defect array, find correct defect
  for (i = 0; i < defectType.length; i++) {
    if (chosenDefect == defectType[i].type) {
      displayCause = defectType[i].cause;
      displayRemedy = defectType[i].remedy;
      //append all causes to cause ul
      for (i = 0; i < displayCause.length; i++) {
        $("#cause").append("<li>" + displayCause[i] + "</li>");
      };
      //append all remedies to remedy ul
      for (i = 0; i < displayRemedy.length; i++) {
        $("#remedy").append("<li>" + displayRemedy[i] + "</li>");
      };
    }
  }
});

//reset the page for new defect selection


var defectType = [{
    type: "highAa",
    cause: ["Incorrect profile for Low AA level"],
    remedy: ["Reduce Machine Heats", "Reduce Mold Temperature", "Reduce Screw RPM (shear heat)", "Reduce Injection Fill Rate", "Reduce Transfer Rate", "Minimize Screw Cushion 10-20mm", "Minimize Residence Time", "Remove Barrel Head Filter", "Q.A. Check Material I.V"]
  },
  {
    type: "bubbles",
    cause: ["(A) Incorrect Profile Set Up", "(B) Melt too cold", "(C) Wet Material - Shutdown press and correct", "(D) Trapped air / gasses", "(E) Bad Resin", "(F) Damaged extruder check valve"],
    remedy: ["(A) Check Master Process Sheet", "(A) Transfer Cushion too high, reduce cushion to 10-20mm", "(B) Barrel heats too low - Increase barrel heats", "(B) Screw RPM too low - Increase RPM", "(B) Increase back pressure", "(C) Check dryer temperature is at setpoint", "(C) Check for low level issue reducing residence time (prior loading faults)", "(C) Check dryer dew point", "(C) Check for proper residence time", "(C) Check for proper air flow in dryer", "(D) Increase screw back pressure", "(D) Increase or Decrease screw RPM", "(D) Increase or Decrease drying time / temperature", "(D) Gasses trapped in compression zone of screw - Lower heats at feed throat", "(E) Q.A. check I.V.", "(E) Contact MPT, Supervisor, Material Manager", "(F) Contact Maintenance Manager", "(F) Check screw / check valve"]
  },
  {
    type: "burnMarks",
    cause: [
      "(A) Nozzle tips temperature too high",
      "(B) Thermocouple Fault",
      "(C) Nozzle",
      "(D) Burnt material from barrel",
    ],
    remedy: [
      "(A) Check Master Process Sheet ",
      "(A) Lower nozzle tip by 2% at a time until burn stops",
      "(A) Check duties cycle ",
      "(B) Check manifold thermocouple(s) use spare for quick check. Replace next Mold Maintenance",
      "(B) Check sprue thermocouple",
      "(B) Check nozzle thermocouple",
      "(C) Reposition nozzle heater",
      "(C) Tighten the nozzle tip using cleaning & installation procedure",
      "(C) Replace or rework  gate detail to specification",
      "(C) Vespel insert missing or loaded with p.e.t. and degraded. Install vespel insert",
      "(D) Maximize Shot for barrel and Shooting pod and purge",
      "(D) Raise heats while purging",
      "(D) Lower Heats while purging",
    ]
  },
  {
    type: "",
    cause: [
      "",
    ],
    remedy: [
      "",
    ]
  },

];

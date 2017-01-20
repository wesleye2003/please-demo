$( document ).ready(function() {
  function changeSixPanels(color_scheme){
    var scheme = color_scheme;
    $("div#1").css("background-color", `${scheme[0]}`);
    $("div#2").css("background-color", `${scheme[1]}`);
    $("div#3").css("background-color", `${scheme[2]}`);
    $("div#4").css("background-color", `${scheme[3]}`);
    $("div#5").css("background-color", `${scheme[4]}`);
    $("div#6").css("background-color", `${scheme[5]}`);
  }

  function changeFivePanels(color_scheme, primary_color){
    var scheme = color_scheme;
    $("div#7").css("background-color", `${scheme[0]}`);
    $("div#8").css("background-color", `${scheme[1]}`);
    $("div#9").css("background-color", `${scheme[2]}`);
    $("div#10").css("background-color", `${scheme[3]}`);
    $("div#11").css("background-color", `${primary_color}`);
  }

  function changeFourPanels(color_scheme){
    var scheme = color_scheme;
    $("div#13").css("background-color", `${scheme[0]}`);
    $("div#14").css("background-color", `${scheme[1]}`);
    $("div#15").css("background-color", `${scheme[2]}`);
    $("div#16").css("background-color", `${scheme[3]}`);
  }

  function changeThreePanels(color_scheme){
    var scheme = color_scheme;
    $("div#19").css("background-color", `${scheme[0]}`);
    $("div#20").css("background-color", `${scheme[1]}`);
    $("div#21").css("background-color", `${scheme[2]}`);
  }

  function changeTwoPanels(color_scheme){
    var scheme = color_scheme;
    $("div#25").css("background-color", `${scheme[0]}`);
    $("div#26").css("background-color", `${scheme[1]}`);
  }

  function generateAndChangeScheme(hue, sat, light, type) {
    var scheme = Please.make_scheme(
      {
        h: hue,
        s: sat,
        v: light
      },
      {
      scheme_type: type,
      format: "hex"
      }
    );
    console.log(scheme);

    var Color = {
      h: hue,
      s: sat,
      v: light
    };

    if (type == "analogous"){
      changeSixPanels(scheme);
    }else if (type == "mono") {
      changeFivePanels(scheme, Please.HSV_to_HEX(Color));
    }else if (type == "double") {
      changeFourPanels(scheme);
    }else if (type == "triadic") {
      changeThreePanels(scheme);
    }else if (type == "complement") {
      changeTwoPanels(scheme);
    }
  };

  $("#analogous").click(function() {
    console.log("analogous");
    generateAndChangeScheme(Math.floor((Math.random() * 360) + 1),
                            Math.random(),
                            Math.random(),
                            "analogous");
  });

  $("#mono").click(function() {
    console.log("monochromatic");
    generateAndChangeScheme(Math.floor((Math.random() * 360) + 1),
                            Math.random(),
                            Math.random(),
                            "mono");
  });

  $("#double").click(function() {
    console.log("double-complement");
    generateAndChangeScheme(Math.floor((Math.random() * 360) + 1),
                            Math.random(),
                            Math.random(),
                            "double");
  });

  $("#triadic").click(function() {
    console.log("triadic");
    generateAndChangeScheme(Math.floor((Math.random() * 360) + 1),
                            Math.random(),
                            Math.random(),
                            "triadic");
  });

  $("#complement").click(function() {
    console.log("complimentary");
    generateAndChangeScheme(Math.floor((Math.random() * 360) + 1),
                            Math.random(),
                            Math.random(),
                            "complement");
  });



});

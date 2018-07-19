"use strict";

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}

var state = {
  converter: "",
  slide: 0,
  nav_btn: {}
};

var landingPage = document.querySelector("#landingPage");
var converter = document.querySelector("#converter");
var converterType = {
  ctn: document.querySelector(".ctn"),
  ntc: document.querySelector(".ntc")
};
var converterSlide = {
  ctn_slide_1: document.querySelector(".ctn .slide--1"),
  ctn_slide_2: document.querySelector(".ctn .slide--2"),
  ctn_slide_3: document.querySelector(".ctn .slide--3"),
  ntc_slide_1: document.querySelector(".ntc .slide--1"),
  ntc_slide_2: document.querySelector(".ntc .slide--2"),
  ntc_slide_3: document.querySelector(".ntc .slide--3")
};
var next_btn = [
  document.querySelector(".ctn .slide--1 .next--1"),
  document.querySelector(".ctn .slide--2 .next--2"),
  document.querySelector(".ntc .slide--1 .next--1"),
  document.querySelector(".ntc .slide--2 .next--2")
];
var back_btn = [
  document.querySelector(".ctn .slide--1 .back_btn--1"),
  document.querySelector(".ctn .slide--2 .back_btn--2"),
  document.querySelector(".ctn .slide--3 .back_btn--3"),
  document.querySelector(".ntc .slide--1 .back_btn--1"),
  document.querySelector(".ntc .slide--2 .back_btn--2"),
  document.querySelector(".ntc .slide--3 .back_btn--3")
];

next_btn[0].addEventListener("click", function(e) {
  e.preventDefault();
  handleForwardSlide(2);
});
next_btn[1].addEventListener("click", function(e) {
  e.preventDefault();
  handleForwardSlide(3);
});
next_btn[2].addEventListener("click", function(e) {
  e.preventDefault();
  handleForwardSlide(2);
});
next_btn[3].addEventListener("click", function(e) {
  e.preventDefault();
  handleForwardSlide(3);
});
back_btn[0].addEventListener("click", function(e) {
  e.preventDefault();
  initUI();
});
back_btn[1].addEventListener("click", function(e) {
  e.preventDefault();
  handleBackwardSlide(1);
});
back_btn[2].addEventListener("click", function(e) {
  e.preventDefault();
  handleBackwardSlide(2);
});
back_btn[3].addEventListener("click", function(e) {
  e.preventDefault();
  initUI();
});
back_btn[4].addEventListener("click", function(e) {
  e.preventDefault();
  handleBackwardSlide(1);
});
back_btn[5].addEventListener("click", function(e) {
  e.preventDefault();
  handleBackwardSlide(2);
});

startUI();

function startUI() {
  return window.addEventListener("load", function(e) {
    initUI();
  });
}

function initUI() {
  landingPage.style.display = "block";
  converter.style.display = "none";
  Object.keys(converterSlide).map(function(slide) {
    converterSlide[slide].style.display = "none";
  });
  Object.keys(converterType).map(function(converter) {
    converterType[converter].style.display = "none";
  });
  state.converter = "";
  state.slide = 0;

  var _initCtaButtons = initCtaButtons(),
    ctn_cta = _initCtaButtons.ctn_cta,
    ntc_cta = _initCtaButtons.ntc_cta;

  ntc_cta.addEventListener("click", function(e) {
    state.converter = "ntc";
    landingPage.style.display = "none";
    converter.style.display = "block";
    converterType[state.converter].style.display = "block";
    handleCtaButton(1);
  });
  ctn_cta.addEventListener("click", function(e) {
    state.converter = "ctn";
    landingPage.style.display = "none";
    converter.style.display = "block";
    converterType[state.converter].style.display = "block";
    handleCtaButton(1);
  });
}

function initCtaButtons() {
  var ctn_cta = document.querySelector("#ctn_cta");
  var ntc_cta = document.querySelector("#ntc_cta");
  return {
    ctn_cta: ctn_cta,
    ntc_cta: ntc_cta
  };
}

function handleCtaButton(slide) {
  state.slide = slide;
  var screen = state.converter + "_slide_" + slide;
  Object.keys(converterSlide).map(function(slide) {
    if (slide === screen) {
      converterSlide[slide].style.display = "block";
    } else {
      converterSlide[slide].style.display = "none";
    }
  });
}

function handleForwardSlide(slide) {
  // var emptyInput = checkEmptyInput();
  // if (emptyInput > 0)
  //   return alert("Please enter the necessary details before you continue");
  state.slide = slide;
  var screen = state.converter + "_slide_" + slide;
  Object.keys(converterSlide).map(function(slide) {
    if (slide === screen) {
      converterSlide[slide].style.display = "block";
    } else {
      converterSlide[slide].style.display = "none";
    }
  });
}

function handleBackwardSlide(slide) {
  state.slide = slide;
  var screen = state.converter + "_slide_" + slide;
  Object.keys(converterSlide).map(function(slide) {
    if (slide === screen) {
      converterSlide[slide].style.display = "block";
    } else {
      converterSlide[slide].style.display = "none";
    }
  });
}

// function checkEmptyInput() {
//   var input = document.querySelectorAll(
//     "." + state.converter + " .slide--" + state.slide + " .form-input"
//   );
//   var dropdown = document.querySelector(
//     "." + state.converter + " .slide--" + state.slide + " #dropdown"
//   );
//   var inputArr = Array.of
//     .apply(Array, _toConsumableArray(input))
//     .map(function(input) {
//       return input.value;
//     });
//   if (dropdown !== null && dropdown.innerText === "Please select your bank") {
//     inputArr.push("");
//   }
//   var empty = inputArr.filter(function(input) {
//     return input === "";
//   });
//   return empty.length;
// }

function selectOption(option) {
  var selectedOption = document.querySelector(
    ".dropdown__option-item--" + option
  ).innerText;
  var selectValue = document.querySelector("#dropdown");
  selectValue.innerText = selectedOption;
}

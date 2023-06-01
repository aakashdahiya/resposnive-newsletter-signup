function getUserMail() {
  var userMail = $(".email-input");
  var value = userMail.val();
  return value;
}

$(".subscribe-button").click(function () {
  var mail = getUserMail();
  for (var i = 0; i < mail.length; i++) {
    console.log("element " + (i + 1) + " is " + mail[i]);
    if (mail[i] == "@") {
      console.log("user enterd correct mail ID");
      $(".main-container").addClass("hide");
      $(".success-message").removeClass("hide");
      $(".user-email").text(mail);

      break;
    }
    if (i == mail.length - 1) {
      console.log("user enterd wrong email");
      $(".valid-email-text").removeClass("hide");
      $(".email-input").addClass("email-input-error");
    }
  }
});

$(".dismiss-button").click(function () {
  $(".main-container").removeClass("hide");
  $(".success-message").addClass("hide");
  location.reload();
});

// window.addEventListener("resize", () => {
//   const width = window.innerWidth;
//   const height = window.innerHeight;

//   console.log(`The viewport's width is ${width} and the height is ${height}.`);
// });

let width = screen.width;
console.log("The width of screen is: " + width);

var imageSizeChange = $("#cover-img");
function updateImageSize() {
  var windowWidth = $(window).width();
  if (windowWidth < 750) {
    console.log("changin image size");
    imageSizeChange.attr("src", "./png-images/illustration-sign-up-mobile.png");
  } else if (windowWidth <= 2000) {
    console.log("changin image size");
    imageSizeChange.attr(
      "src",
      "./png-images/illustration-sign-up-desktop.png"
    );
  }
}

updateImageSize();
$(window).resize(updateImageSize);

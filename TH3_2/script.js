$(document).ready(function () {
  console.log("jQuery is ready!");

  $("#registerForm").on("submit", function (e) {
    e.preventDefault();

    // Reset lỗi
    $(".error").text("");

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const password = $("#password").val().trim();
    let isValid = true;

    // Kiểm tra ràng buộc
    if (name === "") {
      $("#nameError").text("Họ tên không được để trống");
      isValid = false;
    }

    if (email === "" || !validateEmail(email)) {
      $("#emailError").text("Email không hợp lệ");
      isValid = false;
    }

    if (password.length < 6) {
      $("#passwordError").text("Mật khẩu phải có ít nhất 6 ký tự");
      isValid = false;
    }

    if (!isValid) return;

    // Gửi AJAX
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "POST",
      data: {
        name: name,
        email: email,
        password: password,
      },
      success: function (response) {
        $("#registerForm").slideUp(500, function () {
          $("#successMessage").fadeIn();
        });
        console.log("Response:", response);
      },
      error: function () {
        alert("Server bận, vui lòng thử lại sau.");
      },
    });
  });

  $("#toggleDetail").on("click", function () {
    $("#detailInfo").slideToggle();
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});

$(function () {
  // 導覽列和選單切換
  function menuToggle() {
    if ($("#dropDownMenu").hasClass("hidden")) {
      $("#dropDownMenu").removeClass("hidden");
    } else {
      $("#dropDownMenu").addClass("hidden");
    }
  }
  $("#dropdownBtn").on("click", menuToggle);

  // grab-animation
  const ele = document.querySelector(".js-wall");
  let pos = {
    top: 0,
    left: 0,
    x: 0,
    y: 0,
  };

  const mouseDownHandler = function (e) {
    if (ele === null) return;
    ele.style.userSelect = "none";

    pos = {
      left: ele.scrollLeft,
      top: ele.scrollTop,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };
  const mouseMoveHandler = function (e) {
    if (ele === null) return;
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Scroll the element
    ele.scrollTop = pos.top - dy;
    ele.scrollLeft = pos.left - dx;
  };
  const mouseUpHandler = function () {
    if (ele === null) return;
    ele.style.removeProperty("user-select");

    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };
  // Attach the handler
  if (ele !== null) {
    ele.addEventListener("mousedown", mouseDownHandler);
  }

  const swiper = new Swiper(".swiper", {
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 打開登入 modal
  function openModal() {
    if ($(".js-modal").hasClass("hidden")) {
      $(".js-modal").removeClass("hidden");
    }
  }
  $(".js-openModal").on("click", openModal);

  // 關閉登入 modal
  function closeModal() {
    if (!$(".js-modal").hasClass("hidden")) {
      $(".js-modal").addClass("hidden");
    }
  }
  $(".js-closeModal").on("click", closeModal);

  // 日期
  const date = document.querySelector("#date");
  const datepicker = new Datepicker(date, {
    language: "zh-TW",
    orientation: "bottom",
  });
});

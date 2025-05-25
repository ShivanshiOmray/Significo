function homepageAnimation() {
  gsap.set("slidesm", { scale: 5 });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
  });

  tl.to(
    ".video",
    {
      "--clip": "0%",
      ease: Power2,
    },
    "a"
  )
    .to(
      ".slidesm",
      {
        scale: 1,
        ease: Power2,
      },
      "a"
    )
    .to(
      ".lft",
      {
        xPercent: -10,
        stagger: 0.03,
        ease: Power4,
      },
      "b"
    )
    .to(
      ".rgt",
      {
        xPercent: 10,
        stagger: 0.03,
        ease: Power4,
      },
      "b"
    );
}

function realAnimation() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      //   markers: true,
      scrub: 1,
    },
    xPercent: -315,
    ease: Power4,
  });
}

function teamAnimation() {
  document.querySelectorAll(".listelem").forEach(function (el) {
    el.addEventListener("mousemove", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 1,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
        ease: Power4,
        duration: 0.5,
      });
       gsap.to(this.querySelector(".bluelayer"), {
        height: "100%",
        ease: Power4,
        duration: 0.5,
      });
    });
    el.addEventListener("mouseleave", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 0,
        ease: Power4,
        duration: 0.5,
      });
      gsap.to(this.querySelector(".bluelayer"), {
        height: "0%",
        ease: Power4,
        duration: 0.5,
      });
    });
  });
}

function paraAnimation1() {
  var clutter = "";
  document
    .querySelector(".textpara")
    .textContent.split("")
    .forEach(function (e) {
      if (e === " ") clutter += `<span>&nbsp;</span>`;
      clutter += `<span>${e}</span>`;
    });
  document.querySelector(".textpara").innerHTML = clutter;

  gsap.set(".textpara span", { opacity: 0.1 });
  gsap.to(".textpara span", {
    scrollTrigger: {
      trigger: ".para",
      start: "top 60%",
      end: "bottom 90%",
      scrub: 1,
    },
    opacity: 1,
    stagger: 0.03,
    ease: Power4,
  });
}
function paraAnimation2() {
  var clutter = "";
  document
    .querySelector(".textpara2")
    .textContent.split("")
    .forEach(function (e) {
      if (e === " ") clutter += `<span>&nbsp;</span>`;
      clutter += `<span>${e}</span>`;
    });
  document.querySelector(".textpara2").innerHTML = clutter;

  gsap.set(".textpara2 span", { opacity: 0.1 });
  gsap.to(".textpara2 span", {
    scrollTrigger: {
      trigger: ".para",
      start: "top 60%",
      end: "bottom 90%",
      scrub: 1,
    },
    opacity: 1,
    stagger: 0.03,
    ease: Power4,
  });
}

function loco() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}

function capsulesAnimation() {
  gsap.to(".capsule:nth-child(2)", {
    scrollTrigger: {
      trigger: ".capsules",
      start: "top 70%",
      end: "bottom bottom",
      // markers:true,
      scrub: 1,
    },
    y: 0,
    ease: Power4,
  });
}

function bodyColorChange() {
  document.querySelectorAll(".section").forEach(function (e) {
    ScrollTrigger.create({
      trigger: e,
      start: "top 50%",
      end: "bottom 50%",
      //   markers: true,
      onEnter: function () {
        document.body.setAttribute("theme", e.dataset.color);
      },
      onEnterBack: function () {
        document.body.setAttribute("theme", e.dataset.color);
      },
    });
  });
}

function footerAnimation() {
  gsap.from("#footer h1 span ,#footer-top", {
    y: -100,
    opacity: 0,
    stagger: 0.1,
    duration: 1,
    delay: 2,
    scrollTrigger: {
      trigger: "#footer",
      start: "top 5%",
      end: "top 2%",
      markers: false,
      scrub: 2,
    },
  });
}

footerAnimation();
bodyColorChange();
capsulesAnimation();
loco();
paraAnimation1();
paraAnimation2();
teamAnimation();
realAnimation();
homepageAnimation();

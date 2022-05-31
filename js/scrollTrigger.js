// Section2 - scroll motion
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sec2", // 객체기준범위
      pin: true, // 고정
      start: "top top", // 시작점
      end: "bottom bottom", // 끝점
      scrub: 0.5, // 모션바운스
      markers: true, // 개발가이드선
      onLeave: function () {
        console.log("end");
      },
    },
  })
  .to(".sec2_tit1", { duration: 0.3, opacity: 0, y: -30 })

  .to(".sec2_tit2", {
    duration: 0.3,
    opacity: 1,
    y: 0,
    onComplete: function () {
      console.log("두번째 문구등장!");
    },
  })
  .to(".sec2_tit2", { duration: 0, delay: 1 })
  .to(".sec2_tit2", { duration: 0.3, opacity: 0, y: -30 })

  .to(".sec2_tit3", { duration: 0.3, opacity: 1, y: 0 })
  .to(".sec2_tit3", { duration: 0, delay: 1 });

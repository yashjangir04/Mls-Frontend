import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GSAPmain = () => {
  useGSAP(() => {
    const ctx = gsap.context(() => {

      const animateIfExists = (selector, from, to) => {
        const el = gsap.utils.toArray(selector);
        if (!el.length) return;

        gsap.fromTo(el, from, to);
      };

      animateIfExists(".fcard1",
        { x: "-200%", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".features1",
            start: "top 70%",
          },
        }
      );

      animateIfExists(".fcard2",
        { y: "100%", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".features1",
            start: "top 70%",
          },
        }
      );

      animateIfExists(".fcard3",
        { x: "200%", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".features1",
            start: "top 70%",
          },
        }
      );

      animateIfExists(".fcard4",
        { x: "-200%", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".features1",
            start: "center 80%",
          },
        }
      );

      animateIfExists(".fcard5",
        { y: "100%", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".features1",
            start: "center 80%",
          },
        }
      );

      animateIfExists(".fcard6",
        { x: "200%", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".features1",
            start: "center 80%",
          },
        }
      );

      const plate = document.querySelector(".completePlate");
      if (plate) {
        gsap.fromTo(plate, { x: 0 }, {
          x: -plate.scrollWidth / 2,
          duration: 40,
          ease: "none",
          repeat: -1,
        });
      }

      animateIfExists(".footer",
        { y: "100%", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".client",
            start: "center 70%",
          },
        }
      );

    });

    return () => ctx.revert(); // 🔥 cleanup
  }, []);

  return null;
};

export default GSAPmain;

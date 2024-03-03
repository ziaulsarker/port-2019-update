"use client";
import baffle from "baffle";
import { useEffect, useRef } from "react";
import Circle from "../../utilities/circle";

import "./hero.scss";

export default function Hero() {
  const canvarRef = useRef<HTMLCanvasElement>();

  useEffect(() => {
    let canvas = document.querySelector("canvas");
    let c = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let dx = (Math.random() - 0.5) * 12;
    let dy = (Math.random() - 0.5) * 12;
    let radius = Math.random() * 3 + 1;

    let mouse = {
      x: undefined,
      y: undefined,
    };

    let maxRadius = 40;
    //let minRadius = 4;

    let colorArray = ["rgba(34,34,34, 0.66)", "#fff", "#324D5C", "#F0CA4D"];

    window.addEventListener("mousemove", function (event) {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      init();
    });

    class Circle {
      constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = Math.random() * 3 + 1;
        this.minRadius = radius;

        this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
      }

      draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
      }

      update() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        //Interactive

        if (
          mouse.x - this.x < 50 &&
          mouse.x - this.x > -50 &&
          mouse.y - this.y < 50 &&
          mouse.y - this.y > -50
        ) {
          if (this.radius < maxRadius) {
            this.radius += 1;
          }
        } else if (this.radius > this.minRadius) {
          this.radius -= 1;
        }

        this.draw();
      }
    }

    let circleArray = [];

    function init() {
      circleArray = [];

      for (let i = 0; i < 450; i++) {
        let radius = Math.random() * 3 + 1;
        let x = Math.random() * (window.innerWidth - radius * 2) + radius;
        let y = Math.random() * (window.innerHeight - radius * 2) + radius;
        let dx = (Math.random() - 0.5) * 2;
        let dy = (Math.random() - 0.5) * 2;

        circleArray.push(new Circle(x, y, dx, dy, radius));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, innerWidth, innerHeight);

      for (let i = 1; i < circleArray.length; i++) {
        circleArray[i].update();
      }
    }

    init();
    animate();

    const initBaffel = (selector, settings, nodeList) => {
      return nodeList === true
        ? baffle(document.querySelectorAll(selector), settings)
        : baffle(document.querySelector(selector), settings);
    };

    initBaffel(
      ".HeroContent h1 span.normal",
      {
        characters: "</>!?{}</>i()+&-i</>#$()=>{}i",
      },
      true
    ).reveal(2500);

    initBaffel(
      ".HeroContent h1 span.yellow",
      {
        characters:
          "</>!?{}</>i()+&-i</>#$()=>{}i</>!?{}</>i()+&-i</>#$()=>{}i</>!?{}</>i()+&-i</>#$()=>{}i",
      },
      true
    ).reveal(1500);
  }, []);

  return (
    <div className="hero">
      <canvas ref={canvarRef}></canvas>
      <div className="HeroContent col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3">
        <h1>
          <span className="normal"> Hello, I'm </span>
          <span className="yellow">Ziaul Sarker</span>
          <span className="normal">
            . Front End Developer with a passion for
          </span>{" "}
          <span className="yellow"> Javascript</span>
          <span className="normal">!</span>
        </h1>
        <a href="#projects">
          View my work <span className="fas fa-arrow-right"></span>
        </a>
      </div>
    </div>
  );
}

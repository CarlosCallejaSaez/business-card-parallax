import React from "react";
import Plx from "react-plx";
import { FaGithub, FaLinkedin, FaYoutube  } from "react-icons/fa";
import "./App.css";
import Typewriter from "typewriter-effect"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  
  return (
    <div>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 1.9,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 100,
        }}
      >
        <img
          style={{ width: "100%" }}
          src="foreground.png"
          alt="foreground"
        />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 70,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
        }}
      >
        <img
          style={{ width: "100%" }}
          src="background.jpg"
          alt="background"
        />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "10vw",
          width: "100%",
        }}
      >
        <img
          style={{
            width: "20vw",
          }}
          src="/hello.gif"
          alt="text"
        />
        <h2>Please scroll down</h2>
      </Plx>
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#000",
            height: "100%",
          }}
        ></div>
      </div>

      <div
        style={{
          zIndex: 300,
          position: "relative",
          color: "#fff",
          textAlign: "center",
          paddingTop: "50vh",
        }}
      >
         <section>
          <h1>
            <Typewriter
              options={{
                strings: ["Welcome to my business card"],
                autoStart: true,
                loop: true,
               
              }}
            />
          </h1>

         
          <p>Hello! I am Carlos Calleja Saez, <br/>a passionate developer about the creation of <br/> incredible web experiences.</p>
        </section>


        <section style={{ paddingTop: "30vh" }}>
          <div className="social">
          <a
              href="https://portfoliocarloscalleja.netlify.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="icon portfolio"
            >
              <FontAwesomeIcon icon={faBriefcase}  size="10x"  />
            </a>
            <a
              href="https://github.com/CarlosCallejaSaez"
              target="_blank"
              rel="noopener noreferrer"
              className="icon github"
            >
              <FaGithub size={150} />
            </a>
            <a
              href="https://www.linkedin.com/in/carlos-calleja-saez-8177792a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon linkedin"
            >
              <FaLinkedin size={150} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCSqptidhAYyGDX8ZHI78ZXg"
              target="_blank"
              rel="noopener noreferrer"
              className="icon youtube"
            >
              <FaYoutube size={150} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
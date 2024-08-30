"use client";  // This line makes the component a Client Component

import { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

export default function Page() {
  const typewriterRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const typed = new Typewriter(typewriterRef.current, {
      autoStart: true,
      loop: true,
    });

    typed
      .callFunction(() => {
        if (typewriterRef.current) {
          typewriterRef.current.className = 'gradient-text-1';
        }
      })
      .typeString("Software Engineer")
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        if (typewriterRef.current) {
          typewriterRef.current.className = 'gradient-text-2';
        }
      })
      .typeString("World Traveler")
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        if (typewriterRef.current) {
          typewriterRef.current.className = 'gradient-text-3';
        }
      })
      .typeString("Culinary Artist")
      .pauseFor(2500)
      .deleteAll()
      .start();

    return () => {
      typed.stop(); // Cleanup
    };
  }, []);

  return (
    <section>
      <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
        {/* Text on the left */}
        <div className="md:flex-1 text-center md:text-left">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi! I'm Soorya.
        </h1>
          <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
            I am a <span className="gradient-text-1" ref={typewriterRef}></span>
          </h1>
          <p className="mb-4">
            {`My name is Soorya Sundravel. I am a Computer Science major from the University of Minnesota. I am passionate about leveraging data and AI to build software applications that help people's lives.
            With a strong foundation in programming and problem-solving, I thrive on tackling complex challenges and turning innovative ideas into reality.`}
          </p>
        </div>
        
        {/* Image on the right */}
        <div className="mt-4 md:mt-0 md:ml-8">
          <img
            src="/hqdefault.jpg"
            alt="Soorya Sundravel"
            className="rounded-full w-32 h-32 object-cover border-4 border-gray-500 shadow-lg"
          />
        </div>
      </div>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      {/* Experience Section */}
      <h1 id="experience-section" className="mb-8 text-2xl font-semibold tracking-tighter">
        Experience
      </h1>

      <h2 className="font-medium text-xl mb-1 tracking-tighter">Verizon</h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        Software Engineer Intern
      </p>

      <h2 className="font-medium text-xl mb-1 tracking-tighter">Accenture</h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        Data Analyst Intern
      </p>

      <h2 className="font-medium text-xl mb-1 tracking-tighter">AP Stamp</h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        Data Engineering Intern
      </p>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      {/* Projects Section */}
      <h1 id="projects-section" className="mb-8 text-2xl font-semibold tracking-tighter">
        Projects
      </h1>

      {/* Example project (Add your actual project content here) */}
      <h2 className="font-medium text-xl mb-1 tracking-tighter">Project Name</h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        Brief description of the project.
      </p>

      {/* Add more projects as needed */}
    </section>
  );
}

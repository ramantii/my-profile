"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>PostgreSQL</li>
        <li>Java</li>
        <li>React</li>
        <li>Django</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Computer Science - University of Indonesia</li>
        <li>2021 - present</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>-</li>
      </ul>
    ),
  },
  {
    title: "Awards",
    id: "awards",
    content: (
      <ul className="list-disc pl-2">
      <li>
        <img src="/images/opsi.jpeg" alt="Award-1"/>
      </li>
      <li>
        <img src="/images/juara1tradisi.jpeg" alt="Award-2" />
      </li>
      <li>
        <img src="/images/juara2sd.jpeg" alt="Award-3" />
      </li>
      <li>
        <img src="/images/juara2ub.jpeg" alt="Award-4" />
      </li>
      <li>
        <img src="/images/juara2uii.jpeg" alt="Award-5" />
      </li>
      <li>
        <img src="/images/juara3unipma.jpeg" alt="Award-6" />
      </li>
      <li>
        <img src="/images/bestuns.jpeg" alt="Award-7" />
      </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hi, I'm a multifaceted individual with a passion for the dynamic intersection 
            of data science, product management, project management, and software development. 
            My journey in the tech world has been driven by a relentless curiosity and a thirst for knowledge
            in these diverse domains. I thrive on the challenges and opportunities each discipline presents. 
            With a blend of technical expertise and strategic thinking, I aim to create impactful solutions that not only meet but exceed expectations.
            I have experience working with Python, Java, React, PostgreSQL, Django, 
            Tailwind, Bootstraps, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set.
            I am excited to work with others ^^.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("awards")}
              active={tab === "awards"}
            >
              {" "}
              Awards{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of IT in Software Development<br>
        </br>Southern Cross University, Perth, Australia</li>
        <br></br><li>Diploma of IT from IIBT, Western Australia</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
     <FaCertificate className="mr-2"/>,
      <ul className="list-disc pl-2">
        <li>Atlassian Agile Project Management Professional Certificate</li>
        <li>BackEnd Development and APIs Certification, freeCodeCamp </li>
        <li>AWS Developer Associate 2022:Cloud Services, Skillsoft Training</li>     
        <li>Git Essential Training, Linkedin Learning</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/workspace2.jpeg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-justify">
            I am a recent graduate in software development, driven by a deep passion for technology and innovation. 
            Throughout my academic journey, I have cultivated a strong foundation in programming and software engineering principles.
            My enthusiasm for learning new skills keeps me engaged with the latest industry trends and tools.
            <br></br>
            <br></br>
            I thrive on tackling challenges and enjoy collaborating with others to create impactful solutions.
            This portfolio showcases my projects and skills, reflecting my commitment to continuous growth in the tech field.
            I am excited to connect with like-minded individuals and contribute to innovative projects that make a difference.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <FaGraduationCap/>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
            Education{" "}
            </TabButton>
            <FaCertificate/>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
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

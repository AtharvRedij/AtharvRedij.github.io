import React from "react";
import Skill from "../components/Skill";
import { SKILLS } from "./../DATA";

const Skills = () => {
  return (
    <div className="section">
      <h4 className="mx-auto w-fc mb-5">
        Tools & Technologies I am Skilled In
      </h4>
      <div className="d-flex justify-content-around flex-wrap">
        {SKILLS.map((skill, i) => (
          <Skill key={i} name={skill.name} img={skill.img} />
        ))}
      </div>
    </div>
  );
};

export default Skills;

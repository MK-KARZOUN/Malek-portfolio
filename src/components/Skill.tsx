import { SkillModel } from "../models/SkillModel";
export default function Skill({ icon, name, description }: SkillModel) {
  return (
    <div>
      <img src={icon}></img>
      <span>{name}</span>
      <p>{description}</p>
    </div>
  );
}

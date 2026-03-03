import type { CaseStudyModel } from "../models/CaseStudyModel";
export default function CaseStudyCard({
  image,
  number,
  title,
  description,
  link,
}: CaseStudyModel) {
  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <span>{number}</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link}>View project</a>
      </div>
    </div>
  );
}

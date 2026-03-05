import type { CaseStudyModel } from "../models/CaseStudyModel";
export default function CaseStudyCard({
  image,
  number,
  title,
  description,
  link,
  date,
}: CaseStudyModel) {
  return (
    <div className="case-study">
      <div className="show-case">
        <img src={image} alt="" />
        <span className="date">{date}</span>
        <div className="overlay"></div>
      </div>
      <div className="content">
        <span className="number">{number}</span>
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        <a href={link} target="_blank">
          View project
        </a>
      </div>
    </div>
  );
}

import { TestimonialModel } from "../models/TestimonialModel";
export default function TestimonialCard({
  author,
  position,
  quote,
}: TestimonialModel) {
  return (
    <div>
      <span>{author}</span>
      <span>{position}</span>
      <p>{quote}</p>
    </div>
  );
}

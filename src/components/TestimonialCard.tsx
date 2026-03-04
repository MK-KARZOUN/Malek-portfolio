import { TestimonialModel } from "../models/TestimonialModel";
export default function TestimonialCard({
  author,
  position,
  quote,
}: TestimonialModel) {
  return (
    <div className="testimonial">
      <p className="author">{author}</p>
      <p className="position">{position}</p>
      <p className="quote">{quote}</p>
    </div>
  );
}

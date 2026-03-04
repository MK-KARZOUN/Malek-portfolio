import { StackModel } from "../models/StackModel";
export default function StackCard({ name, items }: StackModel) {
  return (
    <div className="stack ">
      <span>{name}</span>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

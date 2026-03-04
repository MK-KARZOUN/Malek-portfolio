import { WizardStepModel } from "../../models/WizardModel";
export default function WizardStep({ title, image, period }: WizardStepModel) {
  return (
    <div className="wizard-step">
      <img src={image} alt="" />
      <p className="period">{period}</p>
      <p className="title">{title}</p>
    </div>
  );
}

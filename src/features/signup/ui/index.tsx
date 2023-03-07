import React from "react";
import { useStore } from "effector-react";
import { $steps, setStep } from "@features/signup/model";
import { Button } from "@shared/ui";
import "./styles.scss";

const SignupForm = () => {
  const currentStep = useStore($steps).currentStep;
  const CurrentField = useStore($steps).steps[currentStep];

  const goNextStep = () => {
    setStep(currentStep + 1);
  };
  const goPreviousStep = () => {
    setStep(currentStep - 1);
  };

  return (
    <>
      <form>
        <CurrentField />
        {currentStep === 3 && <Button>Зарегистрироватся</Button>}
      </form>
      <div className={"step-button-group"}>
        {currentStep > 0 && currentStep < 3 && (
          <Button onClick={goPreviousStep} color={"danger"}>
            Назад
          </Button>
        )}
        {currentStep < 3 && <Button onClick={goNextStep}>Далее</Button>}
      </div>
    </>
  );
};

export default SignupForm;

import React from "react";
import { useStore } from "effector-react";
import { $steps, setStep } from "@features/signup/model";
import { Button } from "@shared/ui";
import "./styles.scss";
import { useSpring, animated } from "@react-spring/web";

const SignupForm = () => {
  const currentStep = useStore($steps).currentStep;
  const CurrentField = useStore($steps).steps[currentStep];

  const [styles, api] = useSpring(() => ({
    from: { opacity: 1 },
    to: { opacity: 0 },
    reverse: true,
  }));

  const startAnimation = () => {
    api.start({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    });
  };

  const goNextStep = () => {
    setStep(currentStep + 1);
    startAnimation();
  };
  const goPreviousStep = () => {
    setStep(currentStep - 1);
    startAnimation();
  };
  return (
    <animated.div style={styles}>
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
    </animated.div>
  );
};

export default SignupForm;

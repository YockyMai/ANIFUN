import React, { useEffect } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import SignupForm from "@features/signup/ui";
import { motion, useAnimationControls } from "framer-motion";
import { useStore } from "effector-react";
import { $steps } from "@features/signup/model";
export const Signup = () => {
  const animateToggler = useStore($steps).currentStep;
  const animateController = useAnimationControls();
  const animate = () => {
    animateController
      .start({
        opacity: [1, 0, 1],
      })
      .then(() => {
        animateController.stop();
      });
  };

  useEffect(() => {
    animate();
  }, [animateToggler]);

  return (
    <motion.div animate={animateController}>
      <div className={"auth-form"}>
        <h1>ANI FUN - регистарция</h1>
        <SignupForm />
        <p>
          Уже есть аккаунт? <Link to={"/login"}>Войти</Link>
        </p>
      </div>
    </motion.div>
  );
};

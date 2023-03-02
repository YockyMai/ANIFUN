import { createEvent, createStore } from "effector";
import UsernameStep from "@features/signup/ui/username-step";
import EmailStep from "@features/signup/ui/email-step";
import PasswordStep from "@features/signup/ui/password-step";
import ConfirmStep from "@features/signup/ui/confirm-step";
import { FC } from "react";

type steps = {
  currentStep: number;
  steps: FC[];
};

export const setStep = createEvent<number>();

export const $steps = createStore<steps>({
  currentStep: 0,
  steps: [UsernameStep, EmailStep, ConfirmStep, PasswordStep],
});

$steps.on(setStep, (state, payload) => ({ ...state, currentStep: payload }));

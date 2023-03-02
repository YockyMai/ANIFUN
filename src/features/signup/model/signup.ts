import { createEvent, createStore } from "effector";

type signupFields = {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export const setFiled = createEvent<{
  value: string;
  filed: keyof signupFields;
}>();

export const $signupFields = createStore<signupFields>({
  email: "",
  password: "",
  repeatPassword: "",
  username: "",
});

$signupFields.on(setFiled, (state, { filed, value }) => ({
  ...state,
  [filed]: value,
}));

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";

import Button from "@mui/material/Button";
import { Input } from "../../components/input";
import { Loader } from "../../components/loader";
import { bigLetter } from "../../utils/validation/regular";
import {
  validateEmail,
  validatePassword,
} from "../../utils/validation/validation";

import styles from "./auth-page.module.css";

export const AuthPage = () => {
  const [isLoad, setIsLoad] = useState(false);
  const navigate = useNavigate();

  const methods = useForm();
  const {
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = methods;

  const onValidation = (name, reg) => watch(name)?.match(reg);

  const onSubmit = () => {
    setIsLoad(!isLoad);
    setTimeout(() => {
      setIsLoad(false);
      sessionStorage.setItem("JWT", "true");
      reset();
      navigate("/");
    }, 2000);
  };

  if (isLoad) return <Loader />;

  return (
    <section className={styles.section}>
      <FormProvider {...methods}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h1 className={styles.title}>Авторизация</h1>
          <div className={styles.formInput}>
            <Input
              name="email"
              label="Электронная почта"
              placeholder="Электронная почта"
              required={true}
              type="text"
              errorMessage={errors.email?.message}
              validationRules={validateEmail}
            />
          </div>
          <div className={styles.formInput}>
            <Input
              name="password"
              placeholder="Пароль"
              label="Пароль"
              required={true}
              type="password"
              errorMessage={errors.password?.message}
              validationRules={validatePassword}
              letter={onValidation("password", bigLetter)}
              len={watch("password")?.length}
            />
          </div>
          <Button type="submit" variant="contained">
            Авторизация
          </Button>
        </form>
      </FormProvider>
    </section>
  );
};

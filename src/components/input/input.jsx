import { useFormContext } from "react-hook-form";
import cn from "classnames";

import styles from "./input.module.css";

export const Input = ({
  name,
  label,
  validationRules,
  required,
  placeholder,
  errorMessage,
  defaultValue,
  letter,
  len,
  inputType,
}) => {
  const { register } = useFormContext();

  const handleValidate = (fieldValue) => {
    if (validationRules) {
      if (name === "retryPassword")
        return validationRules({
          fieldValue,
        });

      return validationRules(fieldValue);
    }
  };

  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel}>
        {required && ""}
        <span className={styles.spanFocus}>{label}</span>
        <input
          defaultValue={defaultValue}
          className={cn(styles.input, errorMessage && styles.inputError)}
          type={inputType}
          placeholder={placeholder}
          {...register(name, {
            required: required && "Поле не может быть пустым",
            validate: { handleValidate },
          })}
        />
      </label>
      {errorMessage && name !== "password" && (
        <p className={styles.errorMessage}> {errorMessage}</p>
      )}
      {errorMessage && name === "password" && (
        <p>
          {" "}
          Пароль
          <span className={len > 7 ? "" : styles.errorLetter}>
            {" "}
            не менее 8 символов{" "}
          </span>
          и с
          <span className={letter ? "" : styles.errorLetter}>
            {" "}
            заглавной буквой
          </span>
        </p>
      )}
    </div>
  );
};

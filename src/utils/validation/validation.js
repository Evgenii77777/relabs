export const validateEmail = (fieldValue) => {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(fieldValue)) {
    return "Некорректный адрес электронной почты";
  }
};

export const validatePassword = (fieldValue) =>
  /^(?=.*?[A-ZА-Я])(?=.*?[a-zа-я]).{8,}$/.test(fieldValue) ||
  "Пароль не менее 8 символов и с заглавной буквой";

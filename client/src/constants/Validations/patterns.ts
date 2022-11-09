export const authorizationValidationPatters = {
    emailPattern: {
        value: "^.{6,}$",
        message: "Некорректный email адрес"
    },
    passwordPattern: {
        value: (value: string) => value.length <= 16 && value.length >= 6,
        message: "Пароль должен быть минимум 6 и максимум 16 символов"
    },
    repeatPattern: {
        value: (value: string, repeat: string) => value === repeat,
        message: "Пароли не совпадают"
    } 
}
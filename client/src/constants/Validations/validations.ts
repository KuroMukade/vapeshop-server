import { authorizationValidationPatters } from "./patterns";

const isRequiredField = "Это обязательное поле";

const requiredTemplate = {
    value: true,
    message: isRequiredField
}

export const authValidations = {
    email: {
        required: {
            ...requiredTemplate
        },
        pattern: {
            ...authorizationValidationPatters.emailPattern
        }
    },
    password: {
        required: {
            ...requiredTemplate
        },
        pattern: {
            ...authorizationValidationPatters.passwordPattern
        }
    }
}
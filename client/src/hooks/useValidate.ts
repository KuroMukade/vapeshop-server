import React, { useState, ChangeEvent, FocusEvent } from 'react';

interface IValidation {
    required: {
        value: boolean,
        message: string
    },
    pattern: IValidationPattern
}

type IValidations<T> = Record<keyof T, Partial<IValidation>>


interface IValidationPattern {
    value: string | ((value: any, repeat?: any) => boolean),
    message: string,
}

type IErrors<T> = Partial<Record<keyof T, string>>

interface IUseValidateProps<T> {
    formFields: T,
    validations: IValidations<T>,
    onSubmit: (data: T) => void
}

const useValidate = <T extends Record<keyof T, any> = {}>({formFields, validations, onSubmit}: IUseValidateProps<T>) => {
    const [isValid, setValid] = useState<boolean>();
    const [fields, setFields] = useState<Record<keyof T, any>>(formFields || {} as T);
    const [errors, setErrors] = useState<IErrors<T>>({});

    const deleteError = (errors: IErrors<T>, key: keyof T) => {
        const newErrors = {...errors};
        delete newErrors[key];
        setErrors(newErrors);
        return newErrors;
    }

    const requiredValid = (validationKey: IValidations<T>[keyof T], value: string | number) => {
        return validationKey?.required?.value ? value.toString().length > 0 : true;
    }

    const patternValidate = (validationKey: IValidations<T>[keyof T], pattern: IValidationPattern, value: string, repeat?: string) => {
        if (pattern.value instanceof Function) {
            return pattern.value(value, repeat);
        } else {
            const regExpPattern = new RegExp(pattern.value);
            return validationKey?.pattern ? regExpPattern.test(value) : true 
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const key = e.target.name;
        if (key in validations) {
            setFields((prev) => {
                return {
                    ...prev,
                    [key]: e.target.value
                }
            })
        }
    }

    const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
        const key = e.target.name;
        if (fields.hasOwnProperty(key)) {
            const value = e.target.value;

            const validationErrors = handleValidate(key as keyof T, value);
            setErrors((prev) => {
                return {
                    ...prev,
                    ...validationErrors
                }
            })
        }
    }

    const handleValidate = (key: keyof T, value: string, repeat?: string) => {
        const validationKey = validations[key];
        const validateErrors: IErrors<T> = {...errors};
        if (!requiredValid(validationKey, value)) {
            return {
                ...validateErrors,
                [key]: validationKey.required?.message
            }
        } else if(validateErrors[key]) {
            return deleteError(validateErrors, key)
        }
        if (!validationKey?.pattern?.value) {
            return validateErrors;
        }

        const patternValid = patternValidate(validationKey, validationKey.pattern, value, repeat);
        if (!patternValid) {
            return {
                ...validateErrors,
                [key]: validationKey.pattern.message
            }
        } else {
            deleteError(validateErrors, key)
        }
    }

    const handleFocus = (e: FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
        const key = e.target.name;
        deleteError(errors, key as keyof T)
    } 

    const handleSubmit = (e: any) => {
        e.preventDefault();
        
        if (validations) {
            let errors: IErrors<T> = {};

            for (const key in fields) {
                const value = fields[key];

                const elementErrors = handleValidate(key, value);
                errors = {...errors, ...elementErrors}
            }

            if (Object.keys(errors).length <= 0) {
                setValid(true);
                onSubmit(fields);
            } else {
                setValid(false);
                setErrors(errors);
            }
        }
    }

    return {
        handleChange,
        handleFocus,
        handleBlur,
        handleSubmit,
        isValid,
        errors,
        fields
    }
}

export default useValidate;
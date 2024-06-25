import React from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import clsx from 'clsx';

type FormInputProps = {
    id: string;
    label: string;
    register: UseFormRegisterReturn;
    error?: FieldError;
};

const InputElement: React.FC<FormInputProps> = ({
    id,
    label,
    register,
    error,
}) => (
    <div className="mb-4">
        <label htmlFor={id} className="block text-gray-700">
            {label}
        </label>
        <input
            id={id}
            {...register}
            className={clsx(
                'border',
                'border-gray40',
                'text-gray-900',
                'text-sm',
                'rounded-lg',
                'focus:ring-black',
                'focus:border-black',
                'block',
                'w-full',
                'p-2.5',
                'border-2',
                'focus:outline-none'
            )}
        />
        {error && (
            <p className={clsx('text-mainRed', 'text-sm', 'mt-1')}>
                {error.message}
            </p>
        )}
    </div>
);

export default InputElement;

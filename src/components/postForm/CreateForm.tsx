import React from 'react';
import { useForm, UseFormRegister, FieldErrors } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodSchema } from 'zod';
import { useCreatePost } from '../../hooks/useCreatePostMutation';
import clsx from 'clsx';

export type CreatePostFormProps = {
    onSuccess: () => void;
    schema: ZodSchema;
    renderForm: (
        register: UseFormRegister<any>,
        errors: FieldErrors<any>
    ) => React.ReactNode;
};

const CreatePostForm: React.FC<CreatePostFormProps> = ({
    onSuccess,
    schema,
    renderForm,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({ resolver: zodResolver(schema), mode: 'onChange' });

    const { mutate } = useCreatePost();

    const onSubmit = async (data: any) => {
        if (!isValid) {
            return;
        }
        try {
            mutate(data);
            onSuccess();
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-lg mx-auto p-6 border-2 border-blue-500 rounded-lg shadow-lg"
        >
            {renderForm(register, errors)}
            <button
                type="submit"
                disabled={!isValid}
                className={clsx(
                    'rounded-lg',
                    'px-4',
                    'py-2',
                    'bg-black',
                    'text-white',
                    !isValid && 'opacity-50 cursor-not-allowed'
                )}
            >
                Submit
            </button>
        </form>
    );
};

export default CreatePostForm;

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreatePost } from '../../hooks/useCreatePostMutation';
import { schema } from '../../schemas/validationSchema';
import clsx from 'clsx';

type CreatePostFormProps = {
    onSuccess: () => void;
};

const CreatePostForm: React.FC<CreatePostFormProps> = ({ onSuccess }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(schema) });

    const { mutate } = useCreatePost();

    const onSubmit = async (data: any) => {
        try {
            await mutate(data);
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
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700">
                    Title
                </label>
                <input
                    id="title"
                    {...register('title')}
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
                {errors.title && (
                    <p className={clsx('text-mainRed', 'text-sm', 'mt-1')}>
                        {(errors.title as any)?.message}
                    </p>
                )}
            </div>
            <div className="mb-4">
                <label htmlFor="body" className="block text-gray-700">
                    Body
                </label>
                <textarea
                    id="body"
                    {...register('body')}
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
                {errors.body && (
                    <p className={clsx('text-mainRed', 'text-sm', 'mt-1')}>
                        {(errors.body as any)?.message}
                    </p>
                )}
            </div>
            <button
                type="submit"
                className={clsx(
                    'rounded-lg',
                    'px-4',
                    'py-2',
                    'bg-black',
                    'text-white'
                )}
            >
                Submit
            </button>
        </form>
    );
};

export default CreatePostForm;

import React from 'react';
import CreatePostForm, { CreatePostFormProps } from './CreateForm';
import { schema } from '../../schemas/validationSchema';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import useFormData from '../../hooks/useFormData';
import PostData from '../../types/postData';

const FormGenerator: React.FC = () => {
    const handleSuccess = () => {
        alert('Post created successfully!');
    };

    const renderForm = (
        register: UseFormRegister<PostData>,
        errors: FieldErrors<PostData>
    ) => {
        const { renderForm } = useFormData({ register, errors });
        return renderForm();
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl text-center font-bold mb-4">
                Create New Post
            </h1>
            <CreatePostForm
                onSuccess={handleSuccess}
                schema={schema}
                renderForm={renderForm as CreatePostFormProps['renderForm']}
            />
        </div>
    );
};

export default FormGenerator;

import React from 'react';
import CreatePostForm, { CreatePostFormProps } from './CreateForm';
import { schema } from '../../schemas/validationSchema';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import InputElement from './elements/InputElement';
import TextAreaElement from './elements/TextAreaElement';
import PostData from '../../type/postData';

const FormGenerator: React.FC = () => {
    const handleSuccess = () => {
        alert('Post created successfully!');
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

const renderForm = (
    register: UseFormRegister<PostData>,
    errors: FieldErrors<PostData>
) => (
    <React.Fragment>
        <InputElement
            id="title"
            label="Title"
            register={register('title')}
            error={errors.title}
        />
        <TextAreaElement
            id="body"
            label="Body"
            register={register('body')}
            error={errors.body}
        />
    </React.Fragment>
);

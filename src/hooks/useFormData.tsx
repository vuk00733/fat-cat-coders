import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import InputElement from '../components/postForm/elements/InputElement';
import TextAreaElement from '../components/postForm/elements/TextAreaElement';
import PostData from '../types/postData';

type UserFormDataProps = {
    register: UseFormRegister<PostData>;
    errors: FieldErrors<PostData>;
};

const UserFormData = ({ register, errors }: UserFormDataProps) => {
    const renderForm = () => (
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

    return {
        renderForm,
    };
};

export default UserFormData;

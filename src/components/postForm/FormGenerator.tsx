import React from 'react';
import CreatePostForm from './CreateForm';

const FormGenerator: React.FC = () => {
    const handleSuccess = () => {
        alert('Post created successfully!');
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
            <CreatePostForm onSuccess={handleSuccess} />
        </div>
    );
};

export default FormGenerator;

import { useMutation } from '@tanstack/react-query';

interface PostData {
    title: string;
    body: string;
}

const createPost = async (postData: PostData) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
};

export const useCreatePost = () => {
    return useMutation({
        mutationFn: (postData: PostData) => {
            return createPost(postData);
        },
    });
};

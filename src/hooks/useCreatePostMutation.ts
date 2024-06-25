import { useMutation } from '@tanstack/react-query';
import { createPost } from '../api/api';
import PostData from '../types/postData';

export const useCreatePost = () => {
    return useMutation({
        mutationFn: (postData: PostData) => {
            return createPost(postData);
        },
    });
};

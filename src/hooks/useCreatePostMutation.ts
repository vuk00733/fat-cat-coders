import { createPost } from '@api/api';
import { useMutation } from '@tanstack/react-query';
import PostData from '@type/postData';

export const useCreatePost = () => {
    return useMutation({
        mutationFn: (postData: PostData) => {
            return createPost(postData);
        },
    });
};

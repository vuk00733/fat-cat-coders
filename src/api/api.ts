import PostData from '../types/postData';
import User from '../types/user';

export const createPost = async (postData: PostData) => {
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

export const fetchUsers = async (): Promise<Array<User>> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
};

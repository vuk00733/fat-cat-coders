import React from 'react';
import { useQuery } from '@tanstack/react-query';
import User from '@type/user';
import { fetchUsers } from '@api/api';

export interface UserListProps {}

export const UserList: React.FC<UserListProps> = () => {
    const { data, error, isLoading } = useQuery<Array<User>, Error>({
        queryKey: ['users'],
        queryFn: fetchUsers,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching data</div>;
    }

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold my-4">User List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {data?.map((user: User) => (
                    <div
                        key={user.id}
                        style={{ borderColor: '#0284c7' }}
                        className="border p-4 rounded-md"
                    >
                        <p className="text-lg font-bold">ID: {user.id}</p>
                        <p>Name: {user.name}</p>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

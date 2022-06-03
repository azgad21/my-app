import React from 'react';
import users from "../users.json"
import User2Item from './User2Item';

const User2 = () => {
    return (
        <div>

            <ul>
                {users.map ((user) => (
                    <User2Item  user={user} key={user.email} />
                ))}
            </ul>
            
        </div>
    );
}; 

export default User2;
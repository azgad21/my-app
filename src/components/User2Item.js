import React from 'react';

const User2Item = ({ user }) => {
    return (
        <div className='cardrsc'>
            <strong> {user.name.title} {user.name.first} {user.name.last}</strong>
            <img src={user.picture.large} alt="" />
        </div>
    );
};

export default User2Item;
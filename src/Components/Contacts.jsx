import React from 'react';
import UserProfile from './UserProfile';

class Contacts extends React.Component {
    render() {
        return (
            <div className='Contacts'>
                <h2>Contacts</h2>
                <UserProfile />
                <UserProfile />
                <UserProfile />
                <UserProfile />
            </div>
        )
    }
}

export default Contacts;
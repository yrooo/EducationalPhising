import React, { useState } from 'react';

function FakeInstagramLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Informasi login dicuri!\nUsername: ${username}\nPassword: ${password}`);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#fafafa' }}>
            <div style={{ border: '1px solid #dbdbdb', padding: '20px', backgroundColor: '#fff', textAlign: 'center' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="Instagram" style={{ width: '175px', marginBottom: '20px' }} />
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Phone number, username, or email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #dbdbdb', borderRadius: '3px' }}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #dbdbdb', borderRadius: '3px' }}
                    />
                    <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#0095f6', color: '#fff', border: 'none', borderRadius: '3px' }}>
                        Log In
                    </button>
                </form>
                <div style={{ marginTop: '20px', color: '#8e8e8e' }}>
                    <a href="#" style={{ color: '#00376b', textDecoration: 'none' }}>Forgot password?</a>
                </div>
            </div>
        </div>
    );
}

export default FakeInstagramLogin;
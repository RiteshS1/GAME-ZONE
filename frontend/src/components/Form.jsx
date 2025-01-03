//create a waitlist form
import React, { useState } from 'react';
import Button from './Button';

const Form = () => {
    const [email, setEmail] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thanks for signing up! We'll notify you at ${email} when the product is available.`);
        setEmail('');
    };
    
    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label htmlFor="email" className="text-sm font-medium">
            Email
        </label>
        <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="border p-2 rounded-md"
        />
        <Button type="submit">Join Waitlist</Button>
        </form>
    );
    }

export default Form;

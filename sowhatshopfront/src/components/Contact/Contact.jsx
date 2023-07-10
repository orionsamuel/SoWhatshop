import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Formulário enviado!');
        console.log('Nome:', name);
        console.log('Email:', email);
        console.log('Telefone:', phone);
        console.log('Mensagem:', message);
        
        setName('');
        setEmail('');
        setPhone(' ');
        setMessage('');
    };

    return (  
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email">E-mail:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

<           label htmlFor="phone">Telefone:</label>
            <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />

            <label htmlFor="message">Mensagem:</label>
            <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button type="submit">Enviar</button>
        </form>
    );
}

export default Contact;
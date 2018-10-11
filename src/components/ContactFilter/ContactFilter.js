import React, { Component } from 'react';
import './ContactFilter.css';

const handleKeyPress = (onFilter, event) => {
    const key = event.keyCode || event.which;
    onFilter(event.target.value);
};
const ContactFilter = ({ onFilter }) => (
    <div>
        <input type="text" onChange={event => handleKeyPress(onFilter, event)} placeholder="Search" />
    </div>
);

export default ContactFilter;
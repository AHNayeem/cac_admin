// SearchInput.js
import React from 'react';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';
import styles from './SearchInput.module.css';  // Make sure to create and customize your CSS file

const SearchInput = ({ value, placeholder, onChange, onClear }) => {
    const handleClear = () => {
        if (onClear) {
            onClear();  // Custom clear handler
        }
    };

    return (
        <div className={styles.src_holder}>
            <span className={styles.src_icon}><IoSearchOutline /></span>
            <input
                type='text'
                className={styles.filter_input}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <span className={styles.src_clear} onClick={handleClear}>
                {value ? <IoCloseOutline /> : null}
            </span>
        </div>
    );
};

export default SearchInput;

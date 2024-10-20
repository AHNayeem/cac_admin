// src/pages/PageNotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.header}>404</h1>
                <h2 style={styles.subHeader}>Oops! Page Not Found</h2>
                <p style={styles.text}>
                    It looks like the page you are looking for doesn't exist or has been moved.
                </p>
                <Link to="/" style={styles.button}>
                    Go Back Home
                </Link>
            </div>
            {/* <div style={styles.imageContainer}>
                <img
                    src="https://via.placeholder.com/400x300?text=Lost+in+the+Void" // You can replace this with a more relevant image URL
                    alt="Page not found"
                    style={styles.image}
                />
            </div> */}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f8f9fa',
        padding: '20px',
        boxSizing: 'border-box'
    },
    content: {
        maxWidth: '600px',
        marginBottom: '20px',
    },
    header: {
        fontSize: '96px',
        fontWeight: 'bold',
        color: '#ff4757',
        marginBottom: '10px',
    },
    subHeader: {
        fontSize: '28px',
        fontWeight: '600',
        color: '#2f3542',
        marginBottom: '20px',
    },
    text: {
        fontSize: '18px',
        color: '#57606f',
        marginBottom: '30px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#1e90ff',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '16px',
    },
    imageContainer: {
        marginTop: '40px',
    },
    image: {
        width: '100%',
        maxWidth: '400px',
        borderRadius: '8px',
    },
};

export default PageNotFound;

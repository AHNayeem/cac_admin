import React, { useState } from 'react';
import Select from 'react-select';
import { v4 as uuidv4 } from 'uuid';

// Sample options for recipient groups
const recipientOptions = [
    { value: 'drivers', label: 'Drivers' },
    { value: 'passengers', label: 'Passengers' },
    { value: 'agents', label: 'Agents' },
    { value: 'partners', label: 'Partners' },
];

const MassMessage = () => {
    const [selectedRecipients, setSelectedRecipients] = useState([]);
    const [message, setMessage] = useState('');
    const [sentMessages, setSentMessages] = useState([]);
    const [messagePreview, setMessagePreview] = useState(null);
    const [scheduledTime, setScheduledTime] = useState('');

    // Function to handle sending the message
    const handleSendMessage = () => {
        const newMessage = {
            id: uuidv4(),
            recipients: selectedRecipients.map(recipient => recipient.label).join(', '),
            message,
            scheduledTime: scheduledTime || 'Sent Now',
            dateSent: new Date().toLocaleString(),
        };

        setSentMessages([newMessage, ...sentMessages]);
        clearForm();
    };

    // Clear the form after sending
    const clearForm = () => {
        setSelectedRecipients([]);
        setMessage('');
        setScheduledTime('');
        setMessagePreview(null);
    };

    // Function to preview the message
    const handlePreview = () => {
        setMessagePreview({
            recipients: selectedRecipients.map(recipient => recipient.label).join(', '),
            message,
            scheduledTime: scheduledTime || 'Sent Now',
        });
    };

    return (
        <div className="mass-message-container">
            <h2>Send a Mass Message</h2>

            {/* Recipient Select */}
            <div className="form-group">
                <label>Select Recipients:</label>
                <Select
                    options={recipientOptions}
                    isMulti
                    value={selectedRecipients}
                    onChange={setSelectedRecipients}
                    placeholder="Choose recipient groups..."
                />
            </div>

            {/* Message Input */}
            <div className="form-group">
                <label>Message:</label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message here..."
                    rows="4"
                />
            </div>

            {/* Scheduling Message */}
            <div className="form-group">
                <label>Schedule (optional):</label>
                <input
                    type="datetime-local"
                    value={scheduledTime}
                    onChange={(e) => setScheduledTime(e.target.value)}
                />
            </div>

            {/* Preview and Send Buttons */}
            <div className="form-group">
                <button onClick={handlePreview} disabled={!message || !selectedRecipients.length}>
                    Preview
                </button>
                <button onClick={handleSendMessage} disabled={!message || !selectedRecipients.length}>
                    Send Now
                </button>
            </div>

            {/* Message Preview Section */}
            {messagePreview && (
                <div className="preview-section">
                    <h3>Preview</h3>
                    <p><strong>To:</strong> {messagePreview.recipients}</p>
                    <p><strong>Message:</strong> {messagePreview.message}</p>
                    <p><strong>Scheduled Time:</strong> {messagePreview.scheduledTime}</p>
                </div>
            )}

            {/* Sent Messages History */}
            {sentMessages.length > 0 && (
                <div className="message-history">
                    <h3>Message History</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Recipients</th>
                                <th>Message</th>
                                <th>Scheduled/Time Sent</th>
                                <th>Date Sent</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sentMessages.map(msg => (
                                <tr key={msg.id}>
                                    <td>{msg.recipients}</td>
                                    <td>{msg.message}</td>
                                    <td>{msg.scheduledTime}</td>
                                    <td>{msg.dateSent}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MassMessage;

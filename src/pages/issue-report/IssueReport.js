import React, { useState } from 'react';
import Select from 'react-select';
import { v4 as uuidv4 } from 'uuid';

// Sample options for issue categories
const issueCategories = [
  { value: 'vehicle', label: 'Vehicle Issue' },
  { value: 'payment', label: 'Payment Issue' },
  { value: 'safety', label: 'Safety Concern' },
  { value: 'app', label: 'App Issue' },
  { value: 'other', label: 'Other' },
];

const urgencyOptions = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
];

const IssueReport = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [urgency, setUrgency] = useState(null);
  const [description, setDescription] = useState('');
  const [reportHistory, setReportHistory] = useState([]);

  // Function to handle report submission
  const handleSubmitReport = () => {
    const newReport = {
      id: uuidv4(),
      category: selectedCategory?.label || 'N/A',
      description,
      urgency: urgency?.label || 'N/A',
      dateSubmitted: new Date().toLocaleString(),
    };

    setReportHistory([newReport, ...reportHistory]);
    clearForm();
  };

  // Clear form after submission
  const clearForm = () => {
    setSelectedCategory(null);
    setUrgency(null);
    setDescription('');
  };

  return (
    <div className="issue-report-container">
      <h2>Report an Issue</h2>

      {/* Issue Category Selection */}
      <div className="form-group">
        <label>Issue Category:</label>
        <Select
          options={issueCategories}
          value={selectedCategory}
          onChange={setSelectedCategory}
          placeholder="Select issue category..."
        />
      </div>

      {/* Urgency Level Selection */}
      <div className="form-group">
        <label>Urgency Level:</label>
        <Select
          options={urgencyOptions}
          value={urgency}
          onChange={setUrgency}
          placeholder="Select urgency level..."
        />
      </div>

      {/* Description Input */}
      <div className="form-group">
        <label>Describe the Issue:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Provide details of the issue..."
          rows="4"
        />
      </div>

      {/* Submit Button */}
      <div className="form-group">
        <button onClick={handleSubmitReport} disabled={!description || !selectedCategory || !urgency}>
          Submit Report
        </button>
      </div>

      {/* Report History */}
      {reportHistory.length > 0 && (
        <div className="report-history">
          <h3>Report History</h3>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Description</th>
                <th>Urgency</th>
                <th>Date Submitted</th>
              </tr>
            </thead>
            <tbody>
              {reportHistory.map((report) => (
                <tr key={report.id}>
                  <td>{report.category}</td>
                  <td>{report.description}</td>
                  <td>{report.urgency}</td>
                  <td>{report.dateSubmitted}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default IssueReport;

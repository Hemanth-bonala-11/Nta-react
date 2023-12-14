import React, { useState } from 'react';
import '../css/AddCourse.css' // Make sure to import your CSS file

const AddCourse = () => {
  const [courseTitle, setCourseTitle] = useState('');
  const [courseCategory, setCourseCategory] = useState('programming');
  const [courseDescription, setCourseDescription] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [videoFiles, setVideoFiles] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    // You can access form data in the state variables (courseTitle, courseCategory, etc.)
  };

  return (
    <div className="create-course-container">
      <h1>Create a New Course</h1>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="courseTitle">Course Title:</label>
        <input
          type="text"
          id="courseTitle"
          value={courseTitle}
          onChange={(e) => setCourseTitle(e.target.value)}
          required
        />

        <label htmlFor="courseCategory">Category:</label>
        <select
          id="courseCategory"
          value={courseCategory}
          onChange={(e) => setCourseCategory(e.target.value)}
          required
        >
          <option value="programming">Programming</option>
          <option value="design">Design</option>
          <option value="business">Business</option>
        </select>

        <label htmlFor="courseDescription">About Course:</label>
        <textarea
          id="courseDescription"
          value={courseDescription}
          onChange={(e) => setCourseDescription(e.target.value)}
          required
        ></textarea>

        <label htmlFor="pdfFile">Upload PDF File &#128193;:</label>
        <input
          type="file"
          id="pdfFile"
          accept=".pdf"
          onChange={(e) => setPdfFile(e.target.files[0])}
          required
        />

        <label htmlFor="videoFiles">Upload Videos &#128249;:</label>
        <input
          type="file"
          id="videoFiles"
          accept="video/*"
          onChange={(e) => setVideoFiles([...e.target.files])}
          multiple
          required
        />

        <div className="button-container">
          <button type="submit">Create Course</button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;

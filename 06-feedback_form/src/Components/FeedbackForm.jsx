import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {

  const [formData, setFormData] = useState ({
      name: '',
      email: '',
      feedback: '',
      rating: ''
      });

  const handleChange = (event) => {
      const {name, value} = event.target;
      setFormData({
          ...formData,
          [name]: value
          });
      };

  const handleSubmit = (event) => {
      event.preventDefault();

      const confirmationMessage = `
        Name: ${formData.name}
        Email: ${formData.email}
        Feedback: ${formData.feedback}
        rating: ${formData.rating}
        `;

        const isConfirmed = window.confirm(`Please confirm your detauls:\n\n${confirmationMessage}`);

        if (isConfirmed) {
            console.log('Submitting feedback:', formData);
            setFormData({
                name: '',
                email: '',
                feedback: '',
                rating: ''
                });
                alert('Thanks you for your vakueable feedback!');
            }
      };


  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange}/>
        <input type="email" name="email" placeholder="Your email" value={formData.email} onChange={handleChange}/>
        <textarea name="feedback" placeholder="Your feedback" value={formData.feedback} onChange={handleChange}></textarea>
{/*        <input type="box" name="rating" value={formData.rating} onChange={handleChange}/>*/}
        <button type="submit">Submit feedback</button>
        <div style={{display:'flex', gap:'10px', flexDirection:'column'}}>
          <span>Rate us</span>
          <p><input
            type="radio"
            name="rating"
            value="1"
            onChange={handleChange}
          />1</p>
          <p><input
            type="radio"
            name="rating"
            value="2"
            onChange={handleChange}
          />2</p>
          <p><input
            type="radio"
            name="rating"
            value="3"
            onChange={handleChange}
          />3</p>
          <p><input
            type="radio"
            name="rating"
            value="4"
            onChange={handleChange}
          />4</p>
          <p><input
            type="radio"
            name="rating"
            value="5"
            onChange={handleChange}
          />5</p>
        </div>
      </form>
    </>
  );
};

export default FeedbackForm;

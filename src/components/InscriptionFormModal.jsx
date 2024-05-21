import { useState } from "react";
import Modal from 'react-modal';
import './InscriptionFormModal.css';
import emailjs from 'emailjs-com';

Modal.setAppElement('#root');

const InscriptionFormModal = ({ isOpen, onRequestClose }) => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', option: '', specificMessage: '' });
    const [showThankYou, setShowThankYou] = useState(false);
    const [showTextBox, setShowTextBox] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === "option") {
            setShowTextBox(value === "option4");
        }
    };

    const sendEmail = (formData) => {
        const templateParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            option: formData.option,
            specificMessage: formData.specificMessage || 'N/A' // Ensure specificMessage is included even if empty
        };

        emailjs.send(
            'service_c5efdo9', 
            'template_8xe9s9l', 
            templateParams, 
            'ICzwt-huwi4PJLVp6'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail(formData);
        console.log(formData);
        onRequestClose(); // Close the modal after submission
        // Show the thank you message
        setShowThankYou(true);

        // Hide the thank you message after 3 seconds
        setTimeout(() => {
            setShowThankYou(false);
        }, 3000);
    };

    return (
      <>
        <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          contentLabel="Inscription Form"
          className="modal"
          overlayClassName="overlay"
        >
          <h2 className="h2 mb-10">Get Started</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <h4 className="body-1">Name</h4>
              <input className="inputName" type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label className="label">
              <h4 className="body-1">Email</h4>
              <input className="inputEmail" type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label className="label">
              <h4 className="body-1">Phone</h4>
              <input className="inputPhone" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </label>

            <label htmlFor="options" className="label">Select an Option:</label>
            <select id="options" className="selectOption" name="option" value={formData.option} onChange={handleChange}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>

            {showTextBox && (
              <label className="label">
                <h4 className="body-1">Specific Message</h4>
                <textarea
                  className="inputMessage, specific-message"
                  name="specificMessage"
                  value={formData.specificMessage}
                  onChange={handleChange}
                  placeholder="Enter your specific message here"
                  rows="4"
                ></textarea>
              </label>
            )}

            <button className="rounded-3xl p-2 bg-n-5 text-n-8" type="submit">Submit</button>
            <button className="ml-10 rounded-3xl p-2 text-n-1" type="button" onClick={onRequestClose}>Close</button>
          </form>
        </Modal>

        {showThankYou && (
          <div className="thank-you-message">
            Thank you, we'll contact you soon!
          </div>
        )}
      </>
    );
};

export default InscriptionFormModal;

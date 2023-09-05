import React, { useState, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>


function Contact() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation (in milliseconds)
      // Add more AOS options as needed
    });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here, e.g., sending data to a server
    console.log(formData);
    // Clear the form fields after submission
    setFormData({
      name: '',
      email: '',
      description: '',
    });
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
  };

  const columnStyle = {
    flex: 1,
    padding: '20px',
  };

  const contentStyle = {
    textAlign: 'center',
    fontSize: '1.5rem',
  };

  const contentStyleHead = {
    textAlign: 'center',
    fontSize: '2rem',
  };

  const dividerStyle = {
    width: '1px',
    height: '100%',
    background: '#ccc',
  };

  const formStyle = {
    textAlign: 'center',
  };

  const formGroupStyle = {
    margin: '20px',
    textAlign: 'left',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '1.5rem',
  };

  const buttonStyle = {
    backgroundColor: 'rgb(77 173 238)',
    color: '#fff',
    borderRadius: '10px',
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const textinputStyle = {
    fontSize: '1.5rem',
    width: '100%',
    padding: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    color: 'black',
  };

  const textareaStyle = {
    height: '150px',
    fontSize: '1.2rem',
    width: '100%',
    padding: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    color: 'black',
  };

  return (
    <section style={containerStyle} className="contact Cyan bg-gray-700">
      <div style={columnStyle} data-aos="fade-right">
        <div style={contentStyle}>
          <h2 style={contentStyleHead}>Contact Me</h2>
          <p>Email: nazmul.ahammed.nz@gmail.com</p>
          <p>LinkedIn:<a href='https://www.linkedin.com/in/nazmul-ahammed-337b881a9/'> https://www.linkedin.com/in/nazmul-ahammed-337b881a9/</a></p>
          <p>GitHub: <a href='https://github.com/Nazmul-Ahammed'> https://github.com/Nazmul-Ahammed </a></p>
        </div>
      </div>

      <div style={dividerStyle}></div>

      <div style={columnStyle} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
        <div style={formStyle}>
          <h3 style={contentStyleHead}>Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <div style={formGroupStyle}>
              <label htmlFor="name" style={labelStyle}>
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={textinputStyle}
              />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="email" style={labelStyle}>
                Email:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={textinputStyle}
              />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="description" style={labelStyle}>
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                required
                style={textareaStyle}
              ></textarea>
            </div>
            <button type="submit" style={buttonStyle}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

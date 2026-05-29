
import './Contact.css';

export default function Contact() {
  return (
    <div className="contactContainer">
      <div className="contactContent">
        <h1 className="contactTitle">Contact Us</h1>
        <form className="contactForm">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

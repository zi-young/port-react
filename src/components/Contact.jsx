import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import chat from '../assets/img/chat.png'
import user from '../assets/img/user.png'
import contact from '../assets/img/contact.png'

const contactText = [
  {
      link: "mailto:jypark912@naver.com",
      title: "mail : jypark912@naver.com",
  },
];

const Contact = () => {
    const [state, handleSubmit] = useForm("mzblgkbr");
    if (state.succeeded) {
        return <p className="thanks__box">Thanks for joining!</p>;
    }
    return (
        <section id="contact">
        <div className='contact__inner'>
            <div className="chat__box">
                <img className="chatImg" src={chat} alt="chat" />
                <div className="contact__box">
                    <img src={contact} alt="contact" />
                </div>
            </div>
            <div className="form__box">
                <div className="user">
                    <img src={user} alt="userIcon"></img>
                </div>
             <div className="form__inner">
                    <form onSubmit={handleSubmit}>
                        <div className="email__box">
                            <span>메일보내기</span>
                            <svg className="CustomLink-module--icon--edbbc" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"><circle cx="9" cy="9" r="9" fill="currentColor"></circle><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 6 3 3-3 3"></path></svg>
                        </div>
                        <label htmlFor="email"></label>
                        <input
                            id="email"
                            type="email" 
                            name="email"
                            placeholder="Email Address"
                        />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                        <textarea
                            placeholder="message"
                            id="message"
                            name="message"
                        />
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                        <button type="submit" disabled={state.submitting}>
                            Submit
                        </button>
                    </form>
             </div>
             <div className="title__box">
                 <h2 className="contact__title">Contact</h2>
                    <div className="contact__text">
                        <div className="text">
                            {contactText.map((contact, key) => (
                                <div key={key}>
                                    <a
                                        href={contact.link}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        {contact.title}
                                    </a>
                                </div>
                            ))}
                        </div>
                   </div>
             </div>
          </div>
        </div>
        </section>
    );
};

export default Contact;
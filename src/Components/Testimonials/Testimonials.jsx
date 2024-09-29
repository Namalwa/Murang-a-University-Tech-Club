
import React from 'react';
import Title from '../Title/Title'; 
import './Testimonials.css';
import testimonies from '../Data/testimonies'; 

function TestimonyCard({ customerAvatar, customerName, title, text }) {
    return (
        <div className="testimony-card">
            <div className="testimony-card-customer-details">
                <img src={customerAvatar} alt={customerName} />
                <h4 className="testimony-card-customer-name">{customerName}</h4>
            </div>
            <h4 className="testimony-title">{title}</h4>
            <p className="testimony-text">{text}</p>
        </div>
    );
}

function Testimonials() {
    return (
        <section className="testimonials-section">
            <Title text="TESTIMONIALS" />

            <div className="testimonies-container">
                {testimonies.map((testimony, i) => (
                    <TestimonyCard
                        key={i}
                        customerAvatar={testimony.customerAvatar}
                        customerName={testimony.customerName}
                        title={testimony.title}
                        text={testimony.text}
                    />
                ))}
            </div>
        </section>
    );
}

export default Testimonials;





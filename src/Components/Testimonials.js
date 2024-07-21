import TestimonialCard from "./TestimonialCard";
import '../App.css';

function Testimonials(props) {
    return (
        <div className="testimonials">
            <h1>Testimonials</h1>
            <div className="testimonials-section-cards">
                {props.testimonialsItems.map(item => (
                    <TestimonialCard item={item} />
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
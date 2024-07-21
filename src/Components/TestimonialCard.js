import '../App.css';

function TestimonialCard(props) {
    return (
        <div className="testimonials-card">
            <p>Rate: {props.item.rating}</p>
            <div className="testimonial-card-image-name">
                <img className="testimonial-card-image" alt={props.item.name} src={props.item.imageSrc} />
                <p>{props.item.name}</p>
            </div>
            <p>{props.item.reviewText}</p>
        </div>
    );
}

export default TestimonialCard;
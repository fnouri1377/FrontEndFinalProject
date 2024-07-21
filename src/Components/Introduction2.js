import '../App.css';
import Chef1 from '../Icon Assets/restaurant chef B.jpg';
import Chef2 from '../Icon Assets/Mario and Adrian A.jpg';

function Introduction2() {

    return (
        <div className="intro intro2">
            <div className="intro-left">
                <h1 className="intro-h1">Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div className="intro-right intro2-right">
                <img className="intro-image intro2-image intro2-image1" alt="Chef1" src={Chef1} />
                <img className="intro-image intro2-image intro2-image2" alt="Chef2" src={Chef2} />
            </div>
        </div>
    );
}

export default Introduction2;
import '../App.css';
import Header from './Header';
import Nav from './Nav';

function AboutPage() {
    return (
        <>
            <div className="header-nav">
                <Header />
                <Nav />
            </div>
            <div>
                <h1>About Little Lemon Restaurant</h1>
            </div>
        </>
    );
}

export default AboutPage;
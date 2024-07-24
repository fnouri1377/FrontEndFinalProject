import '../App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function HomePage(props) {
    return (
        <div className="inner-root">
            <div className="header-nav">
                <Header />
                <Nav />
            </div>
            <Main menuItems={props.menuItems} testimonialsItems={props.testimonialsItems} />
            <Footer />
        </div>
    );
}

export default HomePage;
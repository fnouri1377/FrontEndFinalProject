import '../App.css';
import Introduction from './Introduction';
import Introduction2 from './Introduction2';
import MenuSection from './MenuSection';
import Testimonials from './Testimonials';

function Main(props) {
    return (
        <main>
            <Introduction />
            <MenuSection menuItems={props.menuItems} />
            <Testimonials testimonialsItems={props.testimonialsItems} />
            <Introduction2 />
        </main>
    );
}

export default Main;
import '../App.css';
import Header from './Header';
import Nav from './Nav';

function LoginPage() {
    return (
        <>
            <div className="header-nav">
                <Header />
                <Nav />
            </div>
            <div className="empty-page-content">
                <h1>Login Page for Little Lemon Restaurant</h1>
            </div>
        </>
    );
}

export default LoginPage;
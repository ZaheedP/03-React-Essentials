import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';
const reactDescriptions = ["11", "22", "33"];


export default function Header() {
    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {reactDescriptions[1]} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}

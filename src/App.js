import styles from './App.module.scss';
import IntroComponent from './IntroComponent';
import logo from './logo.svg';
import NavbarComponent from './NavbarComponent';
import ValuePropsComponent from './ValuePropsComponent';

export default function App() {
  return (
    <div>
      <NavbarComponent />
      <IntroComponent />
      <ValuePropsComponent />
    </div>
  );
}

import styles from './App.module.scss';
import IntegrationGuidesSection from './IntegrationGuidesSection';
import IntroSection from './IntroSection';
import logo from './logo.svg';
import NavbarComponent from './NavbarComponent';
import ValuePropSection from './ValuePropSection';

export default function App() {
  return (
    <div>
      <NavbarComponent />
      <IntroSection />
      <ValuePropSection />
      <IntegrationGuidesSection />
    </div>
  );
}

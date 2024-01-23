import styles from './App.module.scss';
import IntegrationGuidesSection from './IntegrationGuidesSection';
import IntroSection from './IntroSection';
import logo from './logo.svg';
import Navbar from './Navbar';
import NewSection from './NewSection';
import PreviewSection from './PreviewSection';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Test from './Test';
import ValuePropSection from './ValuePropSection';
import VideoSection from './VideoSection';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </main>
    </>
  );
}

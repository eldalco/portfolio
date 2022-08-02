import styles from "../styles/Home.module.css";
import SectionHero from "../components/SectionHero";
import SectionEducation from "../components/SectionEducation";
import SectionSkills from "../components/SectionSkills";
import SectionPortfolio from "../components/SectionPortfolio";
import SectionContact from "../components/SectionContact";
import Nav from "../components/Nav";
import Head from "../components/Head";

export default function Home() {
  return (
    <div>
      <Head />
      <Nav />
      <SectionHero />
      <SectionEducation />
      <SectionSkills />
      <SectionPortfolio />
      <SectionContact />
    </div>
  );
}

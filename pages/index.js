import styles from '../styles/Home.module.css'
import SectionHero from '../components/SectionHero'
import SectionSkills from '../components/SectionSkills'
import SectionPortfolio from '../components/SectionPortfolio'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div>
      <Nav />
      <SectionHero />
      <SectionSkills />
      <SectionPortfolio />
    </div>
  )
}

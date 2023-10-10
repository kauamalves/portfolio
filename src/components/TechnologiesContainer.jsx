import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiPhp,
  DiMysql,
  DiSass,
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  { id: 'html', name: "HTML5", icon: <DiHtml5 />},
  { id: 'css', name: "CSS3", icon: <DiCss3 /> },
  { id: 'js', name: "JavaScript", icon: <DiJsBadge /> },
  { id: 'react', name: "React JS", icon: <DiReact /> },
  { id: 'sass', name: "SASS", icon: <DiSass /> },
  { id: 'php', name: "PHP 8", icon: <DiPhp /> },
  { id: 'mysql', name: "MySQL", icon: <DiMysql /> },
];

function TechnologiesContainer() {
  return (
    <section className='technologiesContainer'>
      <h2>Tecnologias</h2>
      <div className="technologiesGrid">
        {technologies.map((tech) => (
          <div className="technologyCard" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technologyInfo">
              <h3>{tech.name}</h3>
              <p>{tech.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer
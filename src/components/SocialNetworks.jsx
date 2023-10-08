import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'
import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    { name: 'linkedin', icon: <FaLinkedinIn/>, href: 'https://linkedin.com/kauamalves'},
    { name: 'github', icon: <FaGithub/>, href: 'https://github.com/kauamalves'},
    { name: 'instagram', icon: <FaInstagram/>, href: 'https://instagram.com/justkmzs'},
]

function SocialNetworks() {
  return (
    <section id="socialNetworks">
        {socialNetworks.map((network) => (
            <a 
            href={network.href} 
            className='socialBtn' 
            id={network.name} 
            key={network.name}
            target='_blank'>
                {network.icon}
            </a>
        ))}
    </section>    
)
}

export default SocialNetworks
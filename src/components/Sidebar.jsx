import '../styles/components/sidebar.sass';

import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';

function Sidebar() {
  return (
    <aside id="sidebar">
      <p className="title">Desenvolvedor Fullstack</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="https://github.com/kauamalves" target="_blank" className="btn">Download Currículo</a>
    </aside>
  );
}

export default Sidebar;

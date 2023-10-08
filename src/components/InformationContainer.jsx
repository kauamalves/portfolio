import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

import '../styles/components/informationcontainer.sass'

function InformationContainer() {
    return (
        <section id='information'>
            <div className="infoCard">
                <AiFillPhone id='phoneIcon' />
                <div className="infos">
                    <h3>Telefone</h3>
                    <p>(79) 99627-8597</p>
                </div>

            </div>

            <div className="infoCard">
                <AiOutlineMail id='emailIcon' />
                <div className="infos">
                    <h3>E-mail</h3>
                    <p>kauademeloalves.kk@gmail.com</p>
                </div>

            </div>

            <div className="infoCard">
                <AiFillEnvironment id='pinIcon' />
                <div className="infos">
                    <h3>Localização</h3>
                    <p>Lagarto / SE</p>
                </div>
            </div>
        </section>
    )
}

export default InformationContainer
import './styles/footer-style.css';

function Footer() {
    return(
        <div className="footer w-full h-full mt-[-3rem]">
            <div className="footer-wrapper">
                <div className='footer-wrapper-upper'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#d4d4d4" fill-opacity="1"
                            d="M0,256L48,245.3C96,235,192,213,288,218.7C384,224,480,256,576,250.7C672,245,768,203,864,202.7C960,203,1056,245,1152,266.7C1248,288,1344,288,1392,288L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                        </path>
                    </svg>
                </div>
                
                <div className="footer-middle flex justify-around mb-[2rem] mx-[9.5rem]">
                    <div className="footer-left-section">
                        <h3 className='text-2xl mb-[3rem]'>INFORMACJE</h3>
                        <p className='mb-[2rem]'>Kontakt: +48 889 963 663</p>
                        <p>Email: granica.szczepanski@gmail.com</p>
                    </div>
                    <div className="footer-right-section">
                    <iframe className='iframeMap' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d311615.31373162684!2d16.94947!3d52.39771100000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b11b5255555%3A0x1e91474e6b71acba!2sNa%20Miasteczku%208%2F52%2C%2061-144%20Pozna%C5%84%2C%20Polska!5e0!3m2!1spl!2sus!4v1695556760579!5m2!1spl!2sus"
                     width="500" height="250" style={{border: 0}} allowfullscreen=""
                      loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="footer-bottom flex justify-center items-center">
                    <p>&copy;Website was created by <i>OgRepDev</i></p>
                </div>
            </div>
        </div>
    );
    
}

export default Footer;
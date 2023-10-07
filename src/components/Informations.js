import profImg from './styles/imgs/prof.jpg'

function Informations() {
    return (
        <div className="informations">
            <div className="info-wrapper flex justify-center items-center w-full px-[9.5rem]">
                <div className="info-right w-[30%] flex justify-center items-center">
                    <img src={profImg} alt="Michał" className='w-[300px]' />
                </div>
                <div className="info-left text-center ml-[6rem] text-3xl w-[70%] flex justify-center items-center flex-col">
                    <h3>Nazywam się <span className='font-bold'>Michał Szczepański</span><br />
                    i zajmuję się profesjonalnym świadczeniem <br />
                    <span className='font-bold'>usług geodezyjnych.</span></h3>
                    <p className='text-xl mt-[1rem]'>
                        Wykorzystuję w swej pracy nowoczesny i niezawodny sprzęt – to absolutna <br />
                        konieczność przy obsłudze inwestycji liniowych i kubaturowych. <br />
                        Dzięki temu spełniam oczekiwania najbardziej wymagających klientów. <br />
                        Zastosowanie nowoczesnych technologii pomiarowych <br />
                        pozwala mi na wykonywanie pomiarów rzetelnie i precyzyjnie, <br />
                        a podział nieruchomości, czy rozgraniczenia odpowiada warunkom technicznym.
                    </p>
                    <p className='text-2xl font-bold mt-[3rem]'>
                        Obszar działania:
                    </p>
                    <p className='font-italic text-gray-600 text-xl'>
                        powiat poznański, powiat szamotulski, Miasto Poznań
                    </p>
                </div>
            </div>
            <div className='info-wrapper-middle mt-[5rem] px-[9.5rem]'>
                <div className='flex justify-center items-center wrap text-gray-500 text-xl'>
                Założona przeze mnie firma GRANICA świadczy profesjonalne usługi w zakresie geodezji na terenie Miasta Poznania oraz powiatu poznańskiego, 
                szamotulskiego i obornickiego. Współpraca oraz zaangażowanie specjalistów z jakimi współpracuję pozwala klientom indywidualnym oraz 
                firmowym zapewnić spokój, bezpieczeństwo oraz pewność, że planowana inwestycja przeprowadzona zostanie zgodnie z wymaganymi normami prawnymi.
                </div>
            </div>
        </div>
    );
}

export default Informations;
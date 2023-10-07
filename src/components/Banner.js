import './styles/Banner-style.css';

function Banner() {
    return (
        <div className="banner px-[9.5rem] h-[370px]">
            <div className='banner-wraper h-full'>
                <div className="banner-content h-full flex flex-col justify-center items-center">
                    <h1 className='text-4xl text-white mb-[30px]'>Geodeta | Geodezja | Usługi geodezyjne</h1>
                    <p className='text-xl text-white'>Poznań, Szamotuły i okolice</p>
                </div>
            </div>
            
        </div>
    );
}

export default Banner;
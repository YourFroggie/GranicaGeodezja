import oneImg from './styles/imgs/1.jpg';
import twoImg from './styles/imgs/2.jpg';
import threeImg from './styles/imgs/3.jpg';
import fourImg from './styles/imgs/4.jpg';
import fiveImg from './styles/imgs/5.jpg';
import sixImg from './styles/imgs/6.jpg';
import sevenImg from './styles/imgs/7.jpg';
import eightImg from './styles/imgs/8.jpg';

import './styles/gallery.css'

function Gallery() {
    return (
        <div className="gallery w-full">
            <div className="gallery-wrapper w-full flex justify-center items-center flex-col">
                <h2 className='text-3xl mt-[2rem] mb-[3rem]'>GALERIA</h2>
                <div className='gallery-imgs'>
                    <img src={oneImg} className="gallery-img h-[300px]"  />
                    <img src={twoImg} className="gallery-img h-[300px]"  />
                    <img src={threeImg} className="gallery-img h-[300px]"  />
                    <img src={fourImg} className="gallery-img h-[200px]"  />
                    <img src={eightImg} className="gallery-img h-[200px]"  />
                    <img src={fiveImg} className="gallery-img h-[200px]"  />
                    <img src={sixImg} className="gallery-img h-[200px]"  />
                    <img src={sevenImg} className="gallery-img h-[200px]"  />
                </div>
                
            </div>
        </div>
    );
}


export default Gallery;
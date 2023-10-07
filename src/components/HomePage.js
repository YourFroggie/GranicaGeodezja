import { Link } from "react-router-dom";
import Banner from "./Banner";
import MainInfo from "./MainInfo";

import img2020 from './styles/imgs/2020.png'
import img2021 from './styles/imgs/220221.png'
import img2022 from './styles/imgs/best2022.png'

function HomePage() {
    return (
        <div className="HomePage">
            <Banner />
            <div className="awards">
                <h2 className="text-4xl flex justify-center items-center mt-[2rem] mb-[2rem]">
                    Najlepsi Geodeci w Szamotułach i w Poznaniu
                </h2>
                <div className="awards-wrapper flex flex-col">
                    <div className="awards-imgs flex justify-center items-center">
                        <img src={img2020} alt="2020" className="w-[200px] mr-[8rem]"/>
                        <img src={img2021} alt="2021" className="w-[200px]"/>
                    </div>
                    <div className="awards-imgs-best flex justify-center items-center">
                        <img src={img2022} alt="2022" className="w-[200px] mt-[-5rem]"/>
                    </div>
                </div>
                
            </div>
            <MainInfo 
                title='Co to jest Geodezja?'
                desc='Geodezja jest dziedziną, która powstała na bazie matematyki i geometrii. Początki geodezji sięgają 3-5 tysięcy lat przed naszą erą, 
                kiedy to stało się istotne zmierzenie odległości, kąta prostego czy powierzchni kawałka pola uprawnego. 
                Współcześnie obejmuje przede wszystkim prace, które opierają się na specjalistycznych pomiarach w celu np. 
                opisu rzeźby terenu czy sporządzenia mapy sytuacyjno-wysokościowej na potrzeby m.in. przeprowadzenia melioracji terenu.'
            />
            <MainInfo 
                title='Kim jest Geodeta?'
                desc='Geodeta nie przez przypadek traktowany jest jako najważniejszy specjalista na placu budowy, 
                ponieważ jako pierwszy się na nim pojawia oraz jako ostatni z niego schodzi. Zakres koniecznych do zrealizowania prac, 
                polegających przede wszystkim na wykonaniu precyzyjnych pomiarów oraz opracowaniu map, jest naprawdę szeroki. 
                Doskonale zdajemy sobie sprawę z tego, że inwestorom budowlanym bardzo zależy na tym, aby oferta usług geodezyjnych miała charakter kompleksowy. 
                Dlatego też zadbaliśmy o to, aby przy wykorzystaniu najnowocześniejszego dostępnego na rynku sprzętu oraz naszego doświadczenia podjąć się każdego, 
                nawet skomplikowanego wyzwania. Swoją ofertę z zakresu geodezji kierujemy do mieszkańców powiatu poznańskiego – w tym m.in. samej stolicy Wielkopolski oraz Szamotuł.'
            />
            <div className="offers-button-section flex justify-center items-center mt-[10rem] mb-[5rem]">
                <Link to='/offers'><button className="w-[200px] bg-transparent hover:bg-[#3f3f3f] text-black font-semibold hover:text-white py-2 px-4 border border-[#d4d4d4] hover:border-transparent rounded">OFERTA</button></Link>
            </div>
        </div>
    );
}

export default HomePage;
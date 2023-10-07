function Offers() {
    return (
        <div className="offers mt-[2rem]">
            <div className="offers-wrapper px-[9.5rem]">
                <div className="offers-title flex justify-center items-center mb-[2rem]">
                    <h1 className="text-3xl underline">OFERTA</h1>
                </div>
                <div className="offers-offersChoice flex justify-center flex-col">
                    <p className="mb-[2rem] text-xl"> Oferta firmy GRANICA skierowana jest zarówno do Klientów indywidualnych, jak i firm budowlanych czy projektowych. 
                        W zakresie świadczonych usług geodezyjnych znajduje się wykonanie całościowych prac – począwszy od opracowania projektu, 
                        poprzez jego realizację, a na inwentaryzacjach powykonawczych inwestycji kończąc.
                    </p>
                    <p className="mb-[1rem] font-bold">
                        Świadczone usługi geodezyjne obejmują: 
                    </p>
                    <ul className="ml-[1rem]">
                        <li>- wykonanie geodezyjnych pomiarów sytuacyjno-wysokościowych</li>
                        <li>- sporządzanie map geodezyjnych, w tym map do celów projektowych i prawnych </li>
                        <li>- przeprowadzanie inwentaryzacji i pomiarów powykonawczych sieci, przyłączy i budynków </li>
                        <li>- tyczenie obiektów budowlanych </li>
                        <li>- geodezyjna obsługa inwestycji </li>
                        <li>- wykonywanie rozgraniczeń i podziałów nieruchomości </li>
                        <li>- sporządzanie dokumentacji do celów prawnych</li>
                    </ul>
                    <p className="mt-[2rem]">
                    W razie jakichkolwiek pytań związanych z działalnością firmy i 
                    świadczonych usług geodezyjnych zapraszam do kontaktu telefonicznego. Chętnie udzielę Państwu szczegółowych informacji na ten temat.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Offers;
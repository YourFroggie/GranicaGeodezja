function MainInfo(props) {
    return (
        <div className="main-info mt-[50px] mb-[50px] px-[150px]">
            <div className="main-info-wrapper w-full">
                <h3 className="text-2xl mb-[20px]">{props.title}</h3>
                <hr className="mb-[20px] bg-black"/>
                <p className="text-gray-600">{props.desc}</p>
            </div>
        </div>
    );
}

export default MainInfo;
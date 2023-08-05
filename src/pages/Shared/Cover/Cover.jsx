// eslint-disable-next-line react/prop-types
const Cover = ({ img, heading, subHeading, height, font }) => {

    return (
        <div style={{ backgroundImage: `url("${img}")`, minHeight: `${height}` }} className=" bg-cover bg-center flex items-center justify-center">
            <div className='w-1/2 mx-auto text-center flex items-center justify-center flex-col h-[350px] bg-black bg-opacity-50 text-white bs-head-font'>
                <h1 style={{ fontSize: `${font}` }} className="uppercase">{heading}</h1>
                <p className="text-2xl">{subHeading}</p>
            </div>
        </div>
    );
};

export default Cover;
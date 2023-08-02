
// eslint-disable-next-line react/prop-types
const Cover = ({ img, heading, subHeading, height, font }) => {
    console.log(height);
    return (
        <div style={{ backgroundImage: `url("${img}")` }} className={`h-[${height}] bg-cover bg-center flex items-center justify-center`}>
            <div className='w-1/2 mx-auto text-center flex items-center justify-center flex-col h-[350px] bg-black bg-opacity-50 text-white bs-head-font'>

                <h1 className={`text-[${font}] uppercase`}>{heading}</h1>
                <p>{subHeading}</p>
            </div>
        </div>
    );
};

export default Cover;
// eslint-disable-next-line react/prop-types
const OrderBtn = ({ title }) => {
    return (
        <button className="h-16 border-b-4 border-black rounded-lg px-[30px] mb-8  block mx-auto">
            {title}
        </button>
    );
};

export default OrderBtn;
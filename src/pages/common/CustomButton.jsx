const CustomButton = ({ text = "Get Started Free", onClick }) => (
  <button
    onClick={onClick}
    className="px-8 py-3 border border-white rounded-full text-white text-lg font-medium bg-transparent hover:bg-white hover:text-black transition duration-300 shadow-md hover:shadow-xl"
  >
    {text}
  </button>
);

export default CustomButton;

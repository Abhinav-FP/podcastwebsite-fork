const CustomButton = ({ text = "Get Started Free", onClick, icon }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center gap-3 rounded-[40px] border border-[#FFFFFF] text-[#C0BBB8] font-[400] 
      font-inter py-2  px-5 transition duration-300 shadow-md hover:shadow-xl " >
    {icon}
    {text}
  </button>
);



export default CustomButton;

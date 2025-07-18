const CustomButton = ({ text = "Get Started Free", onClick, icon }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center gap-3 rounded-[40px] button-bg font-[400] 
      font-inter py-2  px-5 " >
    {icon}
    {text}
  </button>
);



export default CustomButton;

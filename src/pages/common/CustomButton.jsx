const CustomButton = ({ text = "Get Started Free", onClick, icon }) => (
  <button
    onClick={onClick}
    className="
      flex items-center justify-center gap-[10px]
      w-full sm:w-[187px] md:w-[200px] 
      h-[35px] md:h-[39px]
      rounded-[40px] border border-[#999999]
      text-[#999999] text-sm md:text-lg font-medium 
      bg-transparent 
      transition duration-300 
      shadow-md hover:shadow-xl
    "
  >
    {icon}
    {text}
  </button>
);



export default CustomButton;

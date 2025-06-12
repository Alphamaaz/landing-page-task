import icon from '../images/tick_g.svg'

const PricingCard = ({
  title,
  price,
  per,
  bgColor,
  textColor,
  buttonColor,
  features,
  isPopular,
}) => (
  <div
    className={`border border-black rounded-[20px] md:rounded-[45px] p-6 w-full md:w-[370px] ${bgColor} ${textColor} relative`}
    style={{ boxShadow: "0px 5px 0px 0px #191A23" }}
  >
    {isPopular && (
      <div className="absolute top-5 right-5 bg-lime-400 text-black text-[18px] px-3 py-1 rounded-full font-[400">
        Popular
      </div>
    )}
    <h3 className="text-[18px] md:text-[30px] font-[500] mb-2">{title}</h3>
    <p className="text-[30px] md:text-[50px] font-[500] mb-1">
      {price} <span className="text-base font-medium">{per}</span>
    </p>
    <button
      className={`w-full py-2 md:py-4 mt-4 rounded-[14px] font-semibold ${buttonColor}`}
    >
      Get Started
    </button>
    <button
      className={`w-full py-2 md:py-4 mt-3 rounded-[14px] border ${
        textColor === "text-black" ? "border-black" : "border-white"
      }`}
    >
      Request a quote
    </button>
    {/* divider  */}
    {isPopular ? (
      <div
        className="my-8 md:my-10"
        style={{
          border: "1px solid",
          borderImageSource:
            "linear-gradient(90deg, #000000 0%, #FFFFFF 49.52%, #000000 100%)",
          borderImageSlice: 1,
        }}
      ></div>
    ) : (
      <div
        className="my-8 md:my-10 border"
        style={{
          borderImage:
            "linear-gradient(90deg, #FFFFFF 0%, #000000 49.52%, #FFFFFF 100%)",
          borderImageSlice: 1,
          borderWidth: "1px",
          borderStyle: "solid",
        }}
      ></div>
    )}

    <ul className="mt-6 space-y-2">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-3">
          <img
            src={icon}
            alt="icon"
            className="h-[18px] md:h-[20px] w-[18px] md:w-[20px] mt-[7px]"
          />
          <span className="text-[16px] md:text-[18px] font-[400] mt-1">
            {f}
          </span>
        </li>
      ))}
    </ul>
  </div>
);
 export default PricingCard
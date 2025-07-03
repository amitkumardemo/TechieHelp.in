import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img, rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "text-yellow-400" : "text-gray-500"}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card bg-gray-800">
      <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
      <div className="flex items-center mb-4">{renderStars()}</div>
      <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-6">
        {content}
      </p>

      <div className="flex flex-row items-center">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          {title && (
            <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
              {title}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;

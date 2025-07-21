import quote from "../assets/Get Quote.png";

const reviews = [
  {
    review:
      "Copiqat made it easy for me as a beginner, I just pick a trader, set my risk and let it run, I've seen steady growth and i know nothing about trading.",
    name: "Fatima A.",
    direction: "start",
  },
  {
    review:
      "I don't have time to analyze charts, so this is perfect for me. I set my preferences, picked two trader, and now i just watch my portfolio grow.",
    name: "Daniel A.",
    direction: "end",
  },
  {
    review:
      "I've used other copy trading platforms before, but this one feels more transparent. The stats are clean, and the dashboard is user-friendly.",
    name: "Tolu.",
    direction: "start",
  },
];

const Reviews = () => {
  return (
    <section className="container mx-auto py-12 bg-black px-2">
      <div className="py-8 flex flex-col gap-1 w-full justify-center text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-primary">
          Positive review from Traders
        </h1>
        <span className="text-sm font-normal text-white">
          What Traders have to say about their experience with Copiqat
        </span>
      </div>
      <div className="flex flex-col w-full gap-y-8 justify-center py-4 ">
        {reviews.map((item) => (
          <div className={`flex w-full justify-${item.direction}`}>
            <div className="flex flex-col w-[80%] md:w-[60%] justify-start bg-primary rounded-3xl py-6 px-6">
              <div className="w-8">
                <img src={quote} className="object-cover w-full" alt="" />
              </div>
              <span className="w-full text-sm lg:text-lg text-black py-2 px-3 ">
                {item.review}
              </span>
              <div className="w-full flex justify-end px-3">
                <span className="text-sm text-black font-semibold">
                  {item.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;

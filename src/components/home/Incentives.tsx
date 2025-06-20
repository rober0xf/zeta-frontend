interface IncentivesInterface {
  Name: string;
  ImageSrc: string;
  Description: string;
}

const incentives: IncentivesInterface[] = [
  {
    Name: "Free shipping",
    ImageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
    Description:
      "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    Name: "10-year warranty",
    ImageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
    Description:
      "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },
  {
    Name: "Exchanges",
    ImageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
    Description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
];

function Incentives() {
  return (
    <div className="bg-white">
      <div className="py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none flex flex-col items-center">
          <div className="max-w-3xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              We built our business on customer service
            </h2>
            <p className="mt-4 text-gray-500">
              At the beginning at least, but then we realized we could make a
              lot more money if we kinda stopped caring about that. Our new
              strategy is to write a bunch of things that look really good in
              the headlines, then clarify in the small print but hope people
              don't actually read it.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3 w-full justify-items-center">
            {incentives.map((incentive) => (
              <div key={incentive.Name} className="sm:flex lg:block text-center lg:text-left">
                <div className="sm:flex-shrink-0 flex justify-center lg:justify-start">
                  <img className="h-16 w-16" src={incentive.ImageSrc} alt="" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-gray-900">
                    {incentive.Name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {incentive.Description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Incentives;

import { ArrowRight } from "@mui/icons-material";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const NewsBlog = () => {
  return (
    <div className="bg-neutral-600 pt-56 pb-36">
      <div data-aos="fade-up" data-aos-duration="1500">
        <div className="container mx-auto  text-center">
          <h4 className="text-blue-600 text-xl font-semibold ">
            Recent News & Update
          </h4>
          <h2 className="text-4xl font-semibold text-white ">
            Upcoming Cars & Events
          </h2>
          <p className="text-center w-1/3 text-white mx-auto pt-4">
            If you are looking for a new and used car dealership, follow this
            link for a quick and easy way to order your new.
          </p>
        </div>
        <div className="container pt-10 flex gap-6 mx-auto">
          <div className="blogCard flex-1 rounded shadow bg-neutral-700">
            <div className="relative p-5">
              <img
                src="https://i.ibb.co/6s6gryL/this-is-one-horizontal-portrait-handsome-young-businessman-sitting-car-talking-car-dealer-standing-n.jpg"
                alt=""
                className="rounded"
              />
              <div className="px-4 py-1 bg-blue-600 text-white shadow rounded absolute right-6 bottom-6">
                <p className="text-sm">12, January, 2023</p>
              </div>
            </div>
            <div className="content px-5 pb-5 text-white">
              <h4 className="text-xl font-semibold ">
                BMW Will Spend $870 Million To Make EVs and Batteries in Mexico
              </h4>
              <p className="py-3">
                {`BMW is earmarking €800 million, or $866 million at current exchange rates, to begin production of its upcoming EVs and batteries in Mexico. It might be more appropriate to cite current exchange rates between the euro and peso now that Mexico is becoming a hotspot of EV production. In that case, BMW is investing a veritable fortune of 16.3 billion pesos to make its “Neue Klasse” fully-electric vehicles.The German automaker says these EVs will use newly-developed round lithium-ion battery cells. BMW designed these to increase energy density by over 20 percent, and to improve the rate of charge and overall range of its EVs by 30 percent. BMW plans to make the batteries in Mexico, hence the $866 million investment, per Reuters.`.slice(
                  0,
                  250
                )}
                ...
              </p>
              <span className="text-blue-600 font-bold hover:cursor-pointer">
                Read More{" "}
                <BsArrowRight className="inline ml-2 font-bold text-xl" />
              </span>
            </div>
          </div>
          <div className="blogCard flex-1  rounded shadow bg-neutral-700">
            <div className="relative p-5">
              <img
                src="https://i.ibb.co/GkKmxWZ/young-couple-talking-sales-person-car-showroom.jpg"
                alt=""
                className="rounded"
              />
              <div className="px-4 py-1 bg-blue-600 text-white shadow rounded absolute right-6 bottom-6">
                <p className="text-sm">09, November, 2022</p>
              </div>
            </div>
            <div className="content px-5 pb-5 text-white">
              <h4 className="text-xl font-semibold ">
                Consumer Reports 10 Least Satisfying Cars to Own in 2023
              </h4>
              <p className="py-3">
                {`Sometimes you buy a car thats better than you expected it to be. Sometimes you get one that delivers exactly what you were looking for. But sadly, sometimes you end up with a car that ends up being worse than expected. You might still be able to live with it, but you definitely wouldnt buy it again.To help you avoid ending up in that last scenario, check out the 10 vehicles that Consumer Reports named the least satisfying to own following its latest reader survey. And while youre here, we also have the 10 most satisfying vehicles for this year, which you can read here.`.slice(
                  0,
                  250
                )}
                ...
              </p>
              <span className="text-blue-600 font-bold hover:cursor-pointer">
                Read More{" "}
                <BsArrowRight className="inline ml-2 font-bold text-xl" />
              </span>
            </div>
          </div>
          <div className="blogCard flex-1  rounded shadow bg-neutral-700">
            <div className="relative p-5">
              <img
                src="https://i.ibb.co/0y9HxfQ/auto-mechanic-his-customers-talking-while-examining-vehicle-breakdown-workshop-during-coronavirus-pa.jpg"
                alt=""
                className="rounded"
              />
              <div className="px-4 py-1 bg-blue-600 text-white shadow rounded absolute right-6 bottom-6">
                <p className="text-sm">19, October, 2022</p>
              </div>
            </div>
            <div className="content px-5 pb-5 text-white">
              <h4 className="text-xl font-semibold ">
                Tesla Model Y price up $1,000 after U.S. relaxes tax credit
                terms
              </h4>
              <p className="py-3">
                {`Tesla increased the price of the Model Y Long Range to $54,990,
                and the Model Y Performance to $57,990, an increase of $1,000
                each, according to current and previous prices posted on its
                website. It was the second increase in price for the Model Y
                Long Range over the past two weeks. The models remain 15% and
                17% cheaper, respectively, than they were before Tesla slashed
                prices last month to stoke demand, before accounting for the
                $7,500 tax credit buyers now qualify to receive`.slice(0, 250)}
                ...
              </p>

              <span className="text-blue-600 font-bold hover:cursor-pointer">
                Read More{" "}
                <BsArrowRight className="inline ml-2 font-bold text-xl" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBlog;

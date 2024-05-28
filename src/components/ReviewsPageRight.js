import GiveReviewStar from "./GiveReviewStar";
import UserReview from "./UserReview";

export default function ReviewsPageRight() {
  let details = [
    {
      name: "Chandler",
      desc: "Hey, This is amazing. I did a Tour.",
    },
    {
      name: "Joey",
      desc: "Hello phoebe, I did a Tapas Tour with Born Bike Tours Barcelona, it was very good and very interesting. ",
    },
    {
      name: "Ross",
      desc: "Hice un Tour de Tapas con Born Bike Tours Barcelona, me fue muy bien y fue muy interesante. Nuestro guía fue muy amable, un tour seguro y las Tapas de la Fresca.",
    },
    {
      name: "Rachel",
      desc: "Hice un Tour de Tapas con Born Bike Tours Barcelona, me fue muy bien y fue muy interesante. Nuestro guía fue muy amable, un tour seguro y las Tapas de la Fresca.",
    },
    {
      name: "Monica",
      desc: "Hice un Tour de Tapas con Born Bike Tours Barcelona, me fue muy bien y fue muy interesante. Nuestro guía fue muy amable, un tour seguro y las Tapas de la Fresca.",
    },
  ];

  return (
    <div>
      <div className="p-3 flex flex-col w-full ">
        <GiveReviewStar />
        <div className="flex justify-end w-full md:w-full mx-auto ">
          Filter:
          <select className="outline-0 font-bold" name="filter">
            <option value="0">None</option>
            <option value="1">5 Stars</option>
            <option value="2">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">2 Stars</option>
            <option value="5">1 Stars</option>
          </select>
        </div>
        <div className="m-auto w-4/5 md:w-auto md:m-0">
          {details.map((detail, index) => (
            <UserReview name={detail.name} desc={detail.desc} key={index} />
          ))}
        </div>
      </div>
      <div className="pagination flex justify-center items-center">
        <a href="#" className=" ml-2 border rounded w-7 h-7 text-center ">
          &laquo;
        </a>
        <a href="#" className="active ml-2 border rounded w-7 h-7 text-center ">
          1
        </a>
        <a href="#" className="ml-2 border rounded text-center w-7 h-7">
          2
        </a>
        <a href="#" className="ml-2 border rounded text-center w-7 h-7">
          3
        </a>
        <a href="#" className="ml-2 border rounded text-center w-7 h-7">
          4
        </a>
        <a href="#" className="ml-2 border rounded text-center w-7 h-7">
          5
        </a>
        <a href="#" className="ml-2 border rounded text-center w-7 h-7">
          &raquo;
        </a>
      </div>
    </div>
  );
}

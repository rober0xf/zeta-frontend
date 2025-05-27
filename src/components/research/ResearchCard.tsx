import Categories from "./ResearchCategories";

export interface ResearchData {
  Title: string;
  Description: string;
  ImageUrl: string;
  Category: CategoriesClass;
  Href: string;
}

export class CategoriesClass {
  name: Categories;

  constructor() {
    this.name = Categories.Prediction;
  }
}

interface ResearchCardProps {
  data: ResearchData;
  index: number;
}

function ResearchCard({ data, index }: ResearchCardProps) {
  return (
    <div
      onMouseEnter={() => {
        const card_title = document.getElementById(index.toString());
        card_title?.classList.add("text-orange-500");
      }}
      onMouseLeave={() => {
        const card_title = document.getElementById(index.toString());
        card_title?.classList.remove("text-orange-500");
      }}
      className="flex flex-col overflow-hidden rounded-lg shadow-lg"
    >
      <div className="flex-shrink-0">
        <img className="h-96 w-full object-cover" src={data.ImageUrl} alt="" />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className="text-xl font-medium text-gray-800">
            <a href={data.Href} className="hover:underline">
              {data.Category.name}
            </a>
          </p>
          <a href={data.Href} className="mt-2 block">
            <p
              id={index.toString()}
              className="lg:text-4xl text-2xl font-semibold text-gray-900 transition duration-300 ease-in-out pt-4 pb-6 "
            >
              {data.Title}
            </p>
            <p className="mt-3 text-lg text-gray-700">{data.Description}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResearchCard;

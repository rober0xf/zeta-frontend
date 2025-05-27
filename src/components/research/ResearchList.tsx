import ResearchCard from "./ResearchCard";
import { ResearchData } from "./ResearchCard";
import Categories from "./ResearchCategories";

const posts: ResearchData[] = [
  {
    Title: "Boost your conversion rate",
    Href: "#",
    Category: { name: Categories.Prediction },
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    ImageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  },
  {
    Title: "How to use search engine optimization to drive sales",
    Href: "#",
    Category: { name: Categories.LLM },
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    ImageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  },
  {
    Title: "Coding a prediction to Topuria vs Oliveira",
    Href: "#",
    Category: { name: Categories.Prediction },
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    ImageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  },
];

function ResearchList() {
  return (
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-full">
        <div className="mx-auto xl:mx-12 mt-12 grid max-w-lg gap-40 lg:max-w-none lg:grid-cols-2">
          {posts.map((post, index) => (
            <ResearchCard data={post} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResearchList;

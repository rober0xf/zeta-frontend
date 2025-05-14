import Categories from "./BlogCategories";

export class CategoriesClass {
  name: Categories;
  href: string;
  color?: string;

  constructor() {
    this.name = Categories.Article;
    this.href = "";
  }
}
export class AuthorClass {
  name: string;
  href: string;
  imageUrl: string;

  constructor() {
    this.name = "";
    this.href = "";
    this.imageUrl = "";
  }
}
export interface Post {
  Title: string;
  href: string;
  Category: CategoriesClass;
  Description: string;
  Date: Date;
  Author: AuthorClass;
  imageUrl?: string;
}

const posts: Post[] = [
  {
    Title: "Boost your conversion rate",
    href: "#",
    Category: {
      name: Categories.Article,
      href: "#",
      color: "bg-indigo-100 text-indigo-800",
    },
    Description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    Date: new Date("Mar 16, 2020"),
    Author: {
      name: "Paul York",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    Title: "How to use search engine optimization to drive sales",
    href: "#",
    Category: {
      name: Categories.Video,
      href: "#",
      color: "bg-pink-100 text-pink-800",
    },
    Description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    Date: new Date("Mar 10, 2020"),
    Author: {
      name: "Dessie Ryan",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    Title: "Discover the most optimal models to prediction",
    href: "#",
    Category: {
      name: Categories.Research,
      href: "#",
      color: "bg-green-100 text-green-800",
    },
    Description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.",
    Date: new Date("Feb 12, 2020"),
    Author: {
      name: "Easer Collins",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

function BlogList() {
  return (
    <div className="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Recent publications
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
            massa dictumst amet. Sapien tortor lacus arcu.
          </p>
        </div>
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.Title}>
              <div>
                <a href={post.Category.href} className="inline-block">
                  <span
                    className={classNames(
                      post.Category.color,
                      "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium",
                    )}
                  >
                    {post.Category.name}
                  </span>
                </a>
              </div>
              <a href={post.href} className="mt-4 block">
                <p className="text-xl font-semibold text-gray-900">
                  {post.Title}
                </p>
                <p className="mt-3 text-base text-gray-500">
                  {post.Description}
                </p>
              </a>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href={post.Author.href}>
                    <span className="sr-only">{post.Author.name}</span>
                    <img
                      className="h-10 w-10 rounded-full"
                      src={post.Author.imageUrl}
                      alt=""
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a href={post.Author.href}>{post.Author.name}</a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time>
                      {post.Date.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                    <span aria-hidden="true">&middot;</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogList;

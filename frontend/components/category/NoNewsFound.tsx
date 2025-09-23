import CategoryBreadcrumb from "./CategoryBreadcrumb";
import RightSidebar from "./RightSidebar";

const NoNewsFound = () => {
  return (
    <section className="mx-auto lg:w-8/12 px-4 lg:px-0 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
        {/* main */}
        <div className="lg:col-span-8">
          <CategoryBreadcrumb />

          {/* Error Messages */}
          <div className="border border-gray-200 rounded-sm p-4 text-center">
            <span className=" text-red-500  text-xl font-normal">
              This Sub Category has no news.
            </span>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <RightSidebar />
        </div>
      </div>
    </section>
  );
};

export default NoNewsFound;

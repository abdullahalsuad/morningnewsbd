import { submitNews } from "@/app/actions/newsActions";

export default function PostNews() {
  return (
    <div className=" bg-gray-50 p-4 md:p-8">
      <div className="mx-auto max-w-3xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Post a News Article
        </h1>

        <form action={submitNews} className="space-y-6">
          {/* TITLE */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              required
              placeholder="Enter news title"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A4466]"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              required
              rows={5}
              placeholder="Write news description..."
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A4466]"
            ></textarea>
          </div>

          {/* AUTHOR INFO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Author Name
              </label>
              <input
                type="text"
                name="author_name"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                className="w-full rounded-md border border-gray-300 px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Author Image
              </label>
              <input
                type="text"
                name="author_image"
                className="w-full rounded-md border border-gray-300 px-3 py-2"
              />
            </div>
          </div>

          {/* IMAGES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cover Image
              </label>
              <input
                type="text"
                name="cover_image"
                className="w-full rounded-md border border-gray-300 px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image Caption
              </label>
              <input
                type="text"
                name="image_caption"
                className="w-full rounded-md border border-gray-300 px-3 py-2"
              />
            </div>
          </div>

          {/* DATE */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Publication Date
            </label>
            <input
              type="date"
              name="publication_date"
              required
              className="w-full md:w-1/2 rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          {/* SUBMIT */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full md:w-auto rounded-md bg-[#0A4466] px-6 py-2 text-white font-medium hover:bg-[#093955] transition"
            >
              Submit News
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

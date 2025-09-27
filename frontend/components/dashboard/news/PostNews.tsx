"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { fetchParentCategories } from "@/lib/parentCategoryAPI";
import { fetchChildCategories } from "@/lib/childCategoryAPI";
import { ParentCategory, ChildCategory } from "@/types/categoriesTypes";
import { submitNews } from "@/app/actions/newsActions";

export default function PostNews() {
  const [parents, setParents] = useState<ParentCategory[]>([]);
  const [children, setChildren] = useState<ChildCategory[]>([]);
  const [selectedParent, setSelectedParent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [slug, setSlug] = useState<string>("");

  useEffect(() => {
    loadParents();
    loadChildren();
  }, []);

  // load parent category
  const loadParents = async () => {
    try {
      const data = await fetchParentCategories();
      setParents(data);
    } catch (err) {
      console.error("Failed to load parents:", err);
    }
  };

  // load child category
  const loadChildren = async () => {
    try {
      const data = await fetchChildCategories();
      setChildren(data);
    } catch (err) {
      console.error("Failed to load children:", err);
    }
  };

  // Auto-generate slug from title
  const handleTitleChange = (val: string) => {
    setTitle(val);
    setSlug(val.toLowerCase().trim().replace(/\s+/g, "-"));
  };

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-3xl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">
          Post a News Article
        </h1>

        <form action={submitNews} className="space-y-8">
          {/* TITLE + SLUG */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              name="title"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              required
              placeholder="Enter news title"
            />

            <label className="block text-sm font-medium text-gray-700 mb-1 mt-2">
              Slug
            </label>
            <Input
              type="text"
              name="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="mt-2"
              required
              placeholder="Slug auto-generated"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description <span className="text-red-500">*</span>
            </label>
            <Textarea
              name="description"
              required
              rows={100}
              placeholder="Write news description..."
            />
          </div>

          {/* CATEGORY + SUBCATEGORY + STATUS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Parent Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category <span className="text-red-500">*</span>
              </label>
              <Select
                name="parentCategoryId"
                value={selectedParent}
                onValueChange={(val) => setSelectedParent(val)}
              >
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue placeholder="Select Parent Category" />
                </SelectTrigger>
                <SelectContent>
                  {parents.map((p) => (
                    <SelectItem
                      key={p._id}
                      value={p._id}
                      className="cursor-pointer"
                    >
                      {p.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Child Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subcategory (optional)
              </label>
              <Select name="childCategoryId" defaultValue="none">
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue placeholder="None" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none" className="cursor-pointer">
                    None
                  </SelectItem>
                  {children
                    .filter((c) => c.parentId?._id === selectedParent)
                    .map((c) => (
                      <SelectItem
                        key={c._id}
                        value={c._id}
                        className="cursor-pointer"
                      >
                        {c.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            {/* Status */}
            {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <Select name="status" defaultValue="published">
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="published" className="cursor-pointer">
                    Published
                  </SelectItem>
                  <SelectItem value="scheduled" className="cursor-pointer">
                    Scheduled
                  </SelectItem>
                </SelectContent>
              </Select>
            </div> */}
          </div>

          {/* AUTHOR */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Author Name <span className="text-red-500">*</span>
            </label>
            <Input type="text" name="author_name" required />
          </div> */}

          {/* IMAGES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cover Image URL <span className="text-red-500">*</span>
              </label>
              <Input type="text" name="cover_image" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image Caption
              </label>
              <Input type="text" name="image_caption" />
            </div>
          </div>

          {/* DATE */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Publication Date <span className="text-red-500">*</span>
            </label>
            <Input type="date" name="publication_date" required />
          </div>

          {/* SUBMIT */}
          <div className="flex justify-center items-center">
            <Button
              type="submit"
              className="px-20 py-3 text-[18px] cursor-pointer bg-blue-950"
            >
              Post News
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

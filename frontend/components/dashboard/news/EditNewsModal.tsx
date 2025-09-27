"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetchParentCategories } from "@/lib/parentCategoryAPI";
import { fetchChildCategories } from "@/lib/childCategoryAPI";
import { updateNews } from "@/lib/newsAPI";
import { ParentCategory, ChildCategory } from "@/types/categoriesTypes";
import { NewsItem } from "@/types/newsTypes";
import { toast } from "sonner";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  news: NewsItem | null;
  onUpdated: () => void;
}

export default function EditNewsModal({
  isOpen,
  onClose,
  news,
  onUpdated,
}: Props) {
  const [parents, setParents] = useState<ParentCategory[]>([]);
  const [children, setChildren] = useState<ChildCategory[]>([]);
  const [formData, setFormData] = useState<Partial<NewsItem>>({});

  useEffect(() => {
    const load = async () => {
      try {
        setParents(await fetchParentCategories());
        setChildren(await fetchChildCategories());
      } catch (err) {
        console.error(err);
      }
    };
    load();
  }, []);

  useEffect(() => {
    if (news) {
      setFormData({
        ...news,
        slug: news.slug || news.title.toLowerCase().trim().replace(/\s+/g, "-"),
      });
    }
  }, [news]);

  const handleChange = (key: string, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleUpdate = async () => {
    if (!news?._id) return;
    try {
      await updateNews(news._id, formData);
      toast.success("News updated successfully");
      onUpdated();
      onClose();
    } catch (err) {
      console.error(err);
      toast.error("Failed to update news");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-full rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Edit News</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <Input
              placeholder="Title"
              value={formData.title || ""}
              onChange={(e) => {
                const val = e.target.value;
                handleChange("title", val);
                handleChange(
                  "slug",
                  val.toLowerCase().trim().replace(/\s+/g, "-")
                );
              }}
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Slug
            </label>
            <Input
              placeholder="Slug"
              value={formData.slug || ""}
              onChange={(e) => handleChange("slug", e.target.value)}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <Textarea
              placeholder="Description"
              rows={5}
              value={formData.description || ""}
              onChange={(e) => handleChange("description", e.target.value)}
            />
          </div>

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Parent Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <Select
                value={formData.parentCategoryId?._id || ""}
                onValueChange={(val) =>
                  handleChange(
                    "parentCategoryId",
                    parents.find((p) => p._id === val) || null
                  )
                }
              >
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue placeholder="Select Parent Category" />
                </SelectTrigger>
                <SelectContent className="w-full">
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

            {/* Subcategory */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subcategory
              </label>
              <Select
                value={formData.childCategoryId?._id || "none"}
                onValueChange={(val) =>
                  handleChange(
                    "childCategoryId",
                    val === "none"
                      ? null
                      : children.find((c) => c._id === val) || null
                  )
                }
              >
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue placeholder="Select Child Category" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectItem value="none" className="cursor-pointer">
                    None
                  </SelectItem>
                  {children
                    .filter(
                      (c) => c.parentId?._id === formData.parentCategoryId?._id
                    )
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
          </div>

          {/* Cover Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cover Image URL
            </label>
            <Input
              placeholder="Cover Image URL"
              value={formData.coverImage?.url || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  coverImage: { ...formData.coverImage, url: e.target.value },
                })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cover Image Caption
            </label>
            <Input
              placeholder="Cover Image Caption"
              value={formData.coverImage?.imgCaption || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  coverImage: {
                    ...formData.coverImage,
                    imgCaption: e.target.value,
                  },
                })
              }
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Publication Date
            </label>
            <Input
              type="date"
              value={
                formData.publicationDate
                  ? new Date(formData.publicationDate)
                      .toISOString()
                      .split("T")[0]
                  : ""
              }
              onChange={(e) =>
                handleChange(
                  "publicationDate",
                  new Date(e.target.value).toISOString()
                )
              }
            />
          </div>
        </div>

        <DialogFooter className="flex justify-end gap-3 mt-6">
          <Button
            variant="outline"
            onClick={onClose}
            className="cursor-pointer"
          >
            Cancel
          </Button>
          <Button onClick={handleUpdate} className="cursor-pointer">
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

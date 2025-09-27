"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash2, Plus } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChildCategory, ParentCategory } from "@/types/categoriesTypes";
import {
  createChildCategory,
  deleteChildCategory,
  fetchChildCategories,
  updateChildCategory,
} from "@/lib/childCategoryAPI";
import { fetchParentCategories } from "@/lib/parentCategoryAPI";
import { toast } from "sonner";

const ChildCategoryTable = () => {
  const [children, setChildren] = useState<ChildCategory[]>([]);
  const [parents, setParents] = useState<ParentCategory[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<ChildCategory | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    parentId: "",
  });
  const [loading, setLoading] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    loadChildren();
    loadParents();
  }, []);

  // load child categories
  const loadChildren = async () => {
    try {
      const data = await fetchChildCategories();
      setChildren(data);
    } catch (err) {
      console.error("Failed to load children:", err);
    }
  };

  // load parent categories
  const loadParents = async () => {
    try {
      const data = await fetchParentCategories();
      setParents(data);
    } catch (err) {
      console.error("Failed to load parents:", err);
    }
  };

  // Modal for EDIT and CREATE
  const openModal = (item: ChildCategory | null = null) => {
    setEditingItem(item);
    setFormData(
      item
        ? {
            name: item.name,
            slug: item.slug,
            parentId: item.parentId?._id || "",
          }
        : { name: "", slug: "", parentId: "" }
    );
    setIsOpen(true);
  };

  // Save child categories
  const handleSave = async () => {
    if (!formData.name || !formData.slug) {
      alert("Name and slug are required");
      return;
    }

    setLoading(true);
    try {
      if (editingItem) {
        await updateChildCategory(editingItem._id, formData);
        toast.success("Subcategory updated successfully");
      } else {
        await createChildCategory(formData);
        toast.success("Subcategory added successfully");
      }
      setIsOpen(false);
      loadChildren();
    } catch (err) {
      alert((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  // Delete child categories
  const handleDelete = async (id: string) => {
    try {
      await deleteChildCategory(id);
      toast.success("Subcategory deleted successfully");
      loadChildren();
    } catch (err) {
      alert((err as Error).message);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button onClick={() => openModal()}>
          <Plus className="w-4 h-4 mr-2" /> Add Child Category
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead>Parent</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {children.length > 0 ? (
            children.map((child) => (
              <TableRow key={child._id}>
                <TableCell>{child.name}</TableCell>
                <TableCell>{child.slug}</TableCell>
                <TableCell>{child.parentId?.name || "-"}</TableCell>
                <TableCell className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openModal(child)}
                    className="cursor-pointer"
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => setDeleteId(child._id)}
                    className="cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-gray-500">
                No child categories found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Add/Edit Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="rounded-2xl">
          <DialogHeader>
            <DialogTitle>
              {editingItem ? "Edit Child Category" : "Add Child Category"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <Input
              placeholder="Slug"
              value={formData.slug}
              onChange={(e) =>
                setFormData({ ...formData, slug: e.target.value })
              }
            />
            <Select
              value={formData.parentId || "none"}
              onValueChange={(val) =>
                setFormData({
                  ...formData,
                  parentId: val === "none" ? "" : val,
                })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Parent Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                {parents.map((p) => (
                  <SelectItem key={p._id} value={p._id}>
                    {p.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              className="w-full cursor-pointer"
              onClick={handleSave}
              disabled={loading}
            >
              {loading
                ? "Saving..."
                : editingItem
                ? "Save Changes"
                : "Create Child"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/*  Delete Confirmation Modal */}
      <Dialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <DialogContent className="rounded-2xl">
          <DialogHeader>
            <DialogTitle>Delete Child Category</DialogTitle>
          </DialogHeader>
          <p className="text-gray-600">
            Are you sure you want to delete this child category? This action
            cannot be undone.
          </p>
          <div className="flex justify-end gap-2 mt-4">
            <Button
              variant="outline"
              onClick={() => setDeleteId(null)}
              className="cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              className="cursor-pointer"
              variant="destructive"
              onClick={async () => {
                if (deleteId) {
                  await handleDelete(deleteId);
                  setDeleteId(null);
                }
              }}
            >
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChildCategoryTable;

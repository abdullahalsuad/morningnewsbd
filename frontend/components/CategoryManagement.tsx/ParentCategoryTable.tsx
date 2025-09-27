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
  fetchParentCategories,
  createParentCategory,
  updateParentCategory,
  deleteParentCategory,
} from "@/lib/parentCategoryAPI";
import { ParentCategory } from "@/types/categoriesTypes";
import { toast } from "sonner";

const ParentCategoryTable = () => {
  const [parents, setParents] = useState<ParentCategory[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<ParentCategory | null>(null);
  const [formData, setFormData] = useState({ name: "", slug: "" });
  const [loading, setLoading] = useState(false);

  // 🆕 state for delete confirmation
  const [deleteId, setDeleteId] = useState<string | null>(null);

  // Fetch on mount
  useEffect(() => {
    loadParents();
  }, []);

  // load parent category
  const loadParents = async () => {
    try {
      const data = await fetchParentCategories();
      setParents(data);
    } catch (err) {
      console.error("Failed to load categories:", err);
    }
  };

  // Modal for EDIT and CREATE
  const openModal = (item: ParentCategory | null = null) => {
    setEditingItem(item);
    setFormData(
      item ? { name: item.name, slug: item.slug } : { name: "", slug: "" }
    );
    setIsOpen(true);
  };

  // Save child categories
  const handleSave = async () => {
    if (!formData.name || !formData.slug) {
      toast.warning("Name and slug are required");
      return;
    }

    setLoading(true);
    try {
      if (editingItem) {
        await updateParentCategory(editingItem._id, formData);
        toast.success("Category updated successfully");
      } else {
        await createParentCategory(formData);
        toast.success("Category created successfully");
      }
      setIsOpen(false);
      loadParents();
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || err.message || "Something went wrong";
      console.error(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Delete child categories
  const handleDelete = async (id: string) => {
    try {
      await deleteParentCategory(id);
      toast.success("Category deleted successfully");
      loadParents();
    } catch (err) {
      alert((err as Error).message);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button onClick={() => openModal()}>
          <Plus className="w-4 h-4 mr-2" /> Add Parent Category
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead>Created</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {parents.length > 0 ? (
            parents.map((parent) => (
              <TableRow key={parent._id}>
                <TableCell>{parent.name}</TableCell>
                <TableCell>{parent.slug}</TableCell>
                <TableCell>
                  {new Date(parent.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openModal(parent)}
                    className="cursor-pointer"
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => setDeleteId(parent._id)}
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
                No categories found
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
              {editingItem ? "Edit Parent Category" : "Add Parent Category"}
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
            <Button
              className="w-full  cursor-pointer"
              onClick={handleSave}
              disabled={loading}
            >
              {loading
                ? "Saving..."
                : editingItem
                ? "Save Changes"
                : "Create Category"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Modal */}
      <Dialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <DialogContent className="rounded-2xl">
          <DialogHeader>
            <DialogTitle>Delete Parent Category</DialogTitle>
          </DialogHeader>
          <p className="text-gray-600">
            Are you sure you want to delete this parent category? Its children
            will be **unlinked**, not deleted.
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
              variant="destructive"
              className="cursor-pointer"
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

export default ParentCategoryTable;

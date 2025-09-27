"use client";

import { useEffect, useState } from "react";
import { Eye, Edit3, Trash2 } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchNews, fetchSingleNews, deleteNews } from "@/lib/newsAPI";
import { toast } from "sonner";
import { NewsItem } from "@/types/newsTypes";
import EditNewsModal from "./EditNewsModal";

export default function AllNews() {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);

  const loadNews = async () => {
    try {
      const data = await fetchNews();
      setNewsList(data);
    } catch {
      toast.error("Failed to fetch news");
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  const handleView = async (id: string) => {
    try {
      const data = await fetchSingleNews(id);
      setSelectedNews(data);
      setIsModalOpen(true);
    } catch {
      toast.error("Failed to load news");
    }
  };

  const openDeleteDialog = (id: string) => {
    setDeleteId(id);
    setIsDeleteOpen(true);
  };

  const confirmDelete = async () => {
    if (!deleteId) return;
    try {
      await deleteNews(deleteId);
      toast.success("News deleted successfully");
      setIsDeleteOpen(false);
      setDeleteId(null);
      loadNews();
    } catch {
      toast.error("Failed to delete news");
    }
  };

  const openEditDialog = (news: NewsItem) => {
    setEditingNews(news);
    setIsEditOpen(true);
  };

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <Card className="w-full max-w-7xl mx-auto shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">All News</CardTitle>
        </CardHeader>
        <CardContent>
          {newsList.length === 0 ? (
            <div className="flex items-center justify-center min-h-[50vh]">
              <p className="text-gray-500 text-lg">No news articles found.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cover</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Parent Category</TableHead>
                    <TableHead>Child Category</TableHead>
                    <TableHead>Publication Date</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {newsList.map((news) => (
                    <TableRow key={news._id}>
                      {/* Cover */}
                      <TableCell>
                        {news.coverImage?.url?.startsWith("http") ? (
                          <div className="w-16 h-16 relative">
                            <Image
                              src={news.coverImage.url}
                              alt={news.coverImage.imgCaption || news.title}
                              fill
                              className="object-cover rounded-md"
                            />
                          </div>
                        ) : (
                          <span className="text-gray-400 italic">No image</span>
                        )}
                      </TableCell>

                      {/* Title */}
                      <TableCell className="font-semibold max-w-[180px] truncate">
                        {news.title}
                      </TableCell>

                      {/* Author */}
                      <TableCell>{news.author?.name || "—"}</TableCell>

                      {/* Parent Category */}
                      <TableCell>{news.parentCategoryId}</TableCell>

                      {/* Child Category */}
                      <TableCell>{news.childCategoryId || "—"}</TableCell>

                      {/* Publication Date */}
                      <TableCell>
                        {formatDateTime(news.publicationDate)}
                      </TableCell>

                      {/* Created At */}
                      <TableCell>{formatDateTime(news.createdAt)}</TableCell>

                      {/* Status */}
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            news.status === "published"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {news.status}
                        </span>
                      </TableCell>

                      {/* Actions */}
                      <TableCell className="text-center">
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => handleView(news._id)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                          >
                            <Eye size={18} />
                          </button>
                          <button
                            onClick={() => openEditDialog(news)}
                            className="p-2 text-green-600 hover:bg-green-50 rounded-full"
                          >
                            <Edit3 size={18} />
                          </button>
                          <button
                            onClick={() => openDeleteDialog(news._id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* View Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              {selectedNews?.title}
            </DialogTitle>
          </DialogHeader>
          {selectedNews && (
            <div className="space-y-4">
              {selectedNews.coverImage?.url?.startsWith("http") && (
                <div className="w-full relative h-60 sm:h-72">
                  <Image
                    src={selectedNews.coverImage.url}
                    alt={
                      selectedNews.coverImage.imgCaption || selectedNews.title
                    }
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              )}
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {selectedNews.description}
              </p>
              <div className="text-sm text-gray-500 space-y-1">
                <p>
                  <strong>Status:</strong> {selectedNews.status}
                </p>
                <p>
                  <strong>Published:</strong>{" "}
                  {new Date(selectedNews.publicationDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
        <DialogContent className="max-w-sm rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              Confirm Delete
            </DialogTitle>
          </DialogHeader>
          <p className="text-gray-600">
            Are you sure you want to delete this news? This action cannot be
            undone.
          </p>
          <DialogFooter className="flex justify-end gap-3 mt-4">
            <Button variant="outline" onClick={() => setIsDeleteOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Modal */}
      <EditNewsModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        news={editingNews}
        onUpdated={loadNews}
      />
    </main>
  );
}

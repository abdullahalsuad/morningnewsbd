"use client";

import { useEffect, useState } from "react";
import { getAllUsers, updateUserRole } from "@/lib/userApi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { User, ROLES, Role } from "@/types/userTypes";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // ✅ AM/PM format
  });
};

const AllUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch {
        toast.error("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleRoleChange = async (id: string, role: Role) => {
    setUpdating(id);
    try {
      const updated = await updateUserRole(id, role);
      setUsers((prev) =>
        prev.map((u) => (u._id === id ? { ...u, role: updated.role } : u))
      );
      toast.success(`${updated.name} is now ${updated.role}`);
    } catch {
      toast.error("Failed to update role");
    } finally {
      setUpdating(null);
    }
  };

  return (
    <Card className="w-full max-w-6xl mx-auto mt-8 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">
          User Management
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="animate-spin h-8 w-8 text-gray-500" />
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Number</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead>Updated At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user._id}>
                  <TableCell className="font-medium flex items-center gap-2">
                    {user.image && (
                      <img
                        src={user.image}
                        alt={user.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    )}
                    {user.name}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.number}</TableCell>
                  <TableCell>
                    <Select
                      value={user.role}
                      onValueChange={(val) =>
                        handleRoleChange(user._id, val as Role)
                      }
                      disabled={updating === user._id}
                    >
                      <SelectTrigger className="w-36">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        {ROLES.map((role) => (
                          <SelectItem key={role} value={role}>
                            {role.charAt(0).toUpperCase() + role.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {updating === user._id && (
                      <Loader2 className="animate-spin h-4 w-4 ml-2 inline text-gray-400" />
                    )}
                  </TableCell>
                  <TableCell>{formatDate(user.createdAt)}</TableCell>
                  <TableCell>{formatDate(user.updatedAt)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
};

export default AllUser;

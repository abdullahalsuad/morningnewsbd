"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ParentCategoryTable from "./ParentCategoryTable";
import ChildCategoryTable from "./ChildCategoryTable";

const CategoryManagement = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
          Category Management
        </h1>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="parents" className="w-full">
        <TabsList className="flex flex-wrap gap-2 border  border-gray-200">
          <TabsTrigger
            value="parents"
            className="px-3 py-2 text-sm md:text-base font-medium rounded-md transition-all data-[state=active]:bg-blue-950 data-[state=active]:text-white hover:text-blue-950 cursor-pointer"
          >
            Parent Categories
          </TabsTrigger>
          <TabsTrigger
            value="children"
            className="px-3 py-2 text-sm md:text-base font-medium rounded-md transition-all data-[state=active]:bg-blue-950 data-[state=active]:text-white hover:text-blue-950 cursor-pointer"
          >
            Child Categories
          </TabsTrigger>
        </TabsList>

        {/* Parent Tab */}
        <TabsContent
          value="parents"
          className="p-4 md:p-6 mt-4 bg-white rounded-xl shadow-sm border border-gray-100 overflow-x-auto"
        >
          <ParentCategoryTable />
        </TabsContent>

        {/* Child Tab */}
        <TabsContent
          value="children"
          className="p-4 md:p-6 mt-4 bg-white rounded-xl shadow-sm border border-gray-100 overflow-x-auto"
        >
          <ChildCategoryTable />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CategoryManagement;

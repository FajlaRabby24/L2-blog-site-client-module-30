import HistoryTable from "@/components/modules/user/history/HistoryTable";
import PaginationControls from "@/components/ui/pagination-controls";
import { blogService } from "@/services/blogService";

const Histroypage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  const response = await blogService.getBlogPosts({ page });
  const posts = response?.data?.data || [];

  const pagination = response.data.pagination || {
    limit: 5,
    page: 1,
    total: 0,
    totalPage: 1,
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Blog post history</h1>
      <HistoryTable posts={posts} />

      <PaginationControls meta={pagination} />
    </div>
  );
};

export default Histroypage;

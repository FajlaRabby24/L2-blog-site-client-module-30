import HistoryTable from "@/components/modules/user/history/HistoryTable";
import { blogService } from "@/services/blogService";

const Histroypage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  const response = await blogService.getBlogPosts({ page });
  const posts = response?.data?.data || [];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Blog post history</h1>
      <HistoryTable posts={posts} />
    </div>
  );
};

export default Histroypage;

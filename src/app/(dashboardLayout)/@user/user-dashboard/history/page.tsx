import HistoryTable from "@/components/modules/user/history/HistoryTable";
import { blogService } from "@/services/blogService";

const Histroypage = async () => {
  const response = await blogService.getBlogPosts();
  const posts = response?.data || [];

  console.log(posts);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Blog post history</h1>
      <HistoryTable posts={posts} />
    </div>
  );
};

export default Histroypage;

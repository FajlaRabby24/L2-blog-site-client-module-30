import CreateBlogFormServer from "@/components/modules/user/createBlog/createBlogFormServer";
import { blogService } from "@/services/blogService";
import { BlogPost } from "@/types";

const CreateBlogPage = async () => {
  const { data } = await blogService.getBlogPosts({}, { cache: "no-store" });

  return (
    <div>
      <CreateBlogFormServer />
      {data?.map((item: BlogPost) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default CreateBlogPage;

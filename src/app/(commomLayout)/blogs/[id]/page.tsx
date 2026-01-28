// ! this can be used only in client component
// import { useParams } from "next/navigation";

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  // const {id} = useParams()

  const { id } = await params;

  return <div>this is dynamic blog page {id}</div>;
};

export default BlogPage;

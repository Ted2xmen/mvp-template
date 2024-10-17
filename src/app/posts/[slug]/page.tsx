import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/shared/blog/blog.api";
// import Alert from "@/app/_components/alert";
// import Container from "@/app/_components/container";
// import Header from "@/app/_components/header";
// import { PostBody } from "@/app/_components/post-body";
// import { PostHeader } from "@/app/_components/post-header";
import markdownStyles from "@/shared/blog/markdownStyles.module.css";
import markdownToHtml from "@/shared/blog/markdownToHtml";

export const CMS_NAME = "Markdown";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PostBody = ({ content }: any) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      {/* <Alert preview={post.preview} /> */}
      {post.preview && "This is a preview"}
      {/* <Container>
        <Header /> */}
      <article className="mb-32">
        {post.title}

        {/* <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          /> */}

        <PostBody content={content} />
      </article>
      {/* </Container> */}
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

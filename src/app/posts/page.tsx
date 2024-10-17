/* eslint-disable @next/next/no-img-element */
import React from "react";
import { getAllPosts } from "@/shared/blog/blog.api";
import Link from "next/link";

const Posts = () => {
  const allPosts = getAllPosts();

  // const heroPost = allPosts[0];

  // const morePosts = allPosts.slice(1);
  return (
    <div className="flex flex-col w-full items-center gap-6">
      {allPosts.map((item, i) => {
        return (
          <div key={i} className="w-full border flex items-center gap-2">
            <Link href={"/posts/" + item.slug}>{item.title}</Link>
            <img src={item.author.picture} alt="ss" className="size-12" />
          </div>
        );
      })}
    </div>
  );
};

export default Posts;

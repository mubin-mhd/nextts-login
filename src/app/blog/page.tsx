"use client";
import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../loading";
import ErrorComponent from "../Error";
import { doGetDataPost } from "../api/clientService/blog-service";
import CardListPost from "@/components/Cards/CardListPost";
import DetailBlog from "./DetailBlog/page";

export default function Blog() {
  const [ids, setIds] = useState<number | null>(null);

  const queryDataPosts = useQuery({
    queryKey: ["data-post"],
    queryFn: doGetDataPost,
  });

  const showDataPost = useMemo(() => {
    if (queryDataPosts.isLoading) {
      return (
        <div className="flex justify-center w-full">
          <Loading />
        </div>
      );
    }
    if (queryDataPosts.isError) {
      return (
        <ErrorComponent
          error={queryDataPosts.error}
          reset={() => {
            queryDataPosts.refetch;
          }}
        />
      );
    }
    return <CardListPost datas={queryDataPosts?.data} setIds={setIds} />;
  }, [queryDataPosts]);

  return (
    <div className="w-full flex justify-between">
      {showDataPost}
      {ids && <DetailBlog ids={ids} />}
    </div>
  );
}

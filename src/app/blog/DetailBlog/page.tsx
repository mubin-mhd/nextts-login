import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { doGetDetailPost } from "@/app/api/clientService/blog-service";
import Loading from "@/app/loading";
import ErrorComponent from "@/app/Error";
import CardDetailPost from "@/components/Cards/CardDetailPost";

export default function DetailBlog({ ids }: any) {
  const queryDetailPost = useQuery({
    queryKey: ["data-post", ids],
    queryFn: () => doGetDetailPost(ids),
  });

  const showDetailPost = useMemo(() => {
    if (queryDetailPost.isLoading) {
      return <Loading />;
    }
    if (queryDetailPost.isError) {
      return (
        <ErrorComponent
          error={queryDetailPost.error}
          reset={() => {
            queryDetailPost.refetch();
          }}
        />
      );
    }
    return <CardDetailPost data={queryDetailPost.data} />;
  }, [queryDetailPost]);

  return (
    <div className="w-2/3">
      <h2>{showDetailPost}</h2>
    </div>
  );
}

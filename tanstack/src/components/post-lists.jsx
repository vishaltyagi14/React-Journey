import { useMutation, useQuery,useQueryClient } from "@tanstack/react-query";
import React from "react";
import "./post-lists.css";
import { addPost, fetchPosts, fetchTags } from "../api/api";

const PostLists = () => {
  const {
    data: postData = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const { data: tagsData = [] } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
  });

    const queryClient = useQueryClient();

  const {
    mutate,
    isError: isPostError,
    isPending,
    error: postError,
    reset,
  } = useMutation({
    mutationFn: addPost,
    onSuccess: () => queryClient.invalidateQueries(["posts"]),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title")?.toString().trim();

    // collect checkbox names where the value is "on"
    const tags = Array.from(formData.entries())
      .filter(([key, value]) => key !== "title" && value === "on")
      .map(([key]) => key);

    if (!title) return;

    mutate({ title, tags });
    e.target.reset();
  };
  return (
    <>
      <div className="composer">
        <form onSubmit={handleSubmit}>
          <input
            className="post-input"
            type="text"
            placeholder="Enter Your Post"
            name="title"
          />
          <div className="tags-list">
            {tagsData.map((ta) => {
              return (
                <label className="tag-item" key={ta.id} htmlFor={ta.name}>
                  <input type="checkbox" name={ta.name} id={ta.name} />
                  <span className="tag-name">{ta.name}</span>
                </label>
              );
            })}
          </div>
          <button>Post</button>
        </form>
      </div>

      <div className="post-list">
        {isLoading && <p>Loading...</p>}
        {isError && <p>{error?.message}</p>}
        <div className="posts">
          {postData.map((post) => {
            return (
              <div className="post-card" key={post.id}>
                <div className="post-title">{post.title}</div>
                <div className="post-tags">
                  {post.tags.map((tag) => {
                    return (
                      <span className="post-tag" key={tag}>
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PostLists;

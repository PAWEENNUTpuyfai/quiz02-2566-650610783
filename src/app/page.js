"use client";

import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { comments } from "@/libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        <PostOwner
          picture="/profileImages/MY.jpg"
          name="ปวีณนุช เพราะสุนทร"
          id="650610783"
          comment="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
          like="100 คน"
        />
        {comments.map((c) => (
          <Comment
            key={c.username}
            userImagePath={c.userImagePath}
            username={c.username}
            commentText={c.commentText}
            likeNum={c.likeNum}
            replies={c.replies}
          />
        ))}
      </div>
    </div>
  );
}

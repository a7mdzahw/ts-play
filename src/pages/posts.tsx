import styled from "@emotion/styled";
import { useQuery } from "react-query";
import { Post } from "../types";
import { client } from "../utils";
import Link from "../components/link";

const PostCard = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  margin: 12px 0;
`;

const Posts = () => {
  const { data } = useQuery<Post[]>("posts", () => client<Post[]>("/posts"));
  return (
    <div>
      {data?.map((post) => (
        <PostCard key={post.id}>
          <Link to={post.id.toString()}>
            <>
            <IMG src="https://picsum.photos/50" alt="avatar" />
            <H1>{post.title}</H1>
            </>
          </Link>
        </PostCard>
      ))}
    </div>
  );
};

const H1 = styled.h1`
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
`;

const IMG = styled.img`
border-radius: 50%;
padding: 10px;
`;



export default Posts;

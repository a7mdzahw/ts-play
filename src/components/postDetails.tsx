import { Post, User } from "../types";
import { useParams } from "react-router-dom";
import { client } from "../utils";
import { useQuery } from "react-query";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import Loading from "./loading";
import { login, useAuthContext } from "context/authContext";

interface FormData {
  comment: string;
}

const PostDetail = () => {
  const [{isAuth},dispatch] = useAuthContext()
  console.log(isAuth)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();
  const { id } = useParams();
  const {
    data: post,
    isLoading,
    isError,
  } = useQuery<Post>(["post", id], () =>
    client<Post>(`/posts/${id}
  `)
  );
  const { data: users } = useQuery<User[]>("users", () =>
    client<User[]>("/users")
  );
  const username = users?.find((user) => user.id === post?.id)?.name;

  function onSubmit(data: FormData) {
    client<Post>("/posts", {
      body: data,
    })
      .then((res: { id: number }) => console.log(res.id))
      .catch((err) => console.log(err.response));
  }

  if (isLoading) return <Loading />;
  if (isError) return <div>error</div>;

  return (
    <Div>
      <H1>{post?.title}</H1>
      <img src='https://picsum.photos/400' alt="some" width='100%' />
      <p>{post?.body}</p>
      <pre>uploaded by {username}</pre>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="comment">Comment</Label>
        <Input
          type="text"
          id="comment"
          {...register("comment", { required: "required" })}
        />
        <P>{errors.comment?.message}</P>
        <Button color="blue">Submit</Button>
      </form>
      <Button onClick={() => login(dispatch,"1233")}>Login</Button>
    </Div>
  );
};

const Div = styled.div`
  width: 500px;
  margin: auto;
`;

const P = styled.p`
  color: red;
  text-transform: uppercase;
`;

const Input = styled.input`
padding: 16px;
font-size: large;
  display: block;
  border-radius: 8px;
  border: 1px solid #000;
  width: 100%;
`;

const Button = styled.button`
  width: 100%;
  color: white;
  background-color: ${(props) => props.color || "blue"};
  outline: none;
  font-size: 32px;
  border: none;
  border-radius: 10px;
  :hover {
    cursor: pointer;
    background-color: green;
  }
`;

const Label = styled.label`
  font-size: 24px;
  padding-bottom: 20px;
  color: green;
`;

const H1 = styled.h1`
  color: red;
  text-transform: uppercase;
`;

export default PostDetail;

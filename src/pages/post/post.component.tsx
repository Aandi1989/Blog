import * as Styled from "./post.styles";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { usePostsApi } from "@core/store";

const PostPage: React.FC = () => {
  const { getPostsByUserId, cleanPosts, isLoading, postsIds, postsMap } = usePostsApi();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getPostsByUserId(id);
    }
    return () => cleanPosts();
  }, [getPostsByUserId, cleanPosts, id]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Styled.Wrapper>
      {postsIds.length ? (
        postsIds.map((id) => (
          <Styled.ItemsWrapper key={id}>
            <Styled.Item>UserId: {postsMap[id].userId}</Styled.Item>
            <Styled.Item>PostId: {postsMap[id].id}</Styled.Item>
            <Styled.Item>{postsMap[id].title}</Styled.Item>
            <Styled.Item>{postsMap[id].body}</Styled.Item>
          </Styled.ItemsWrapper>
        ))
      ) : (
        <div>There aren't posts for this User</div>
      )}
    </Styled.Wrapper>
  );
};

export default PostPage;

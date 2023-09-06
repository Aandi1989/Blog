const PostsPage: React.FC = () => {
  const { getAllPosts, cleanPosts, isLoading, postsIds, postsMap } = usePostsApi();

  useEffect(() => {
    getAllPosts();
    return () => {
      cleanPosts();
    };
  }, [getAllPosts, cleanPosts]);
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Styled.Wrapper>
      {!!postsIds.length &&
        postsIds.map((id) => (
          <Styled.TodoLink key={id} to={`/posts/${id}`}>
            {postsMap[id].title}
          </Styled.TodoLink>
        ))}
    </Styled.Wrapper>
  );
};
export default PostsPage;

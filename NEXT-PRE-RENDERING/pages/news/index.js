function NewsArticleList({ articles }) {
  return (
    <>
      <h1>List of News Articles</h1>
      {
      articles.map((article) => {
        return (
          <div key={article.id}>
          <h2>
            {article.id} {article.title} | {article.body}
          </h2>
        </div>
        )
      })}
    </>
  );
}

export async function getServerSideProps(content){
  const { params, req, res } = content;
  console.log(req.headers.cookies);
  res.setHeader('Set-Cookies', ['name=Vishnu']);
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
}

export default NewsArticleList;

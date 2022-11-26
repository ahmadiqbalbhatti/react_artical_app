import ArticlesList from "../components/ArticlesList";
import articles from "./article-content";

const ArticlesListPage = (props) => {

    return (
        <>
            <h1>Articles</h1>
            <ArticlesList articles={articles}/>

        </>
    )
}

export default ArticlesListPage;
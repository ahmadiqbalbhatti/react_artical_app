
import {Link} from "react-router-dom";

const ArticlesList = (props) => {

    return (
        <>
            {
                props.articles.map(article => (
                    <div key={article.name}>
                        <Link className={'article-list-item'}  to={`/articles/${article.name}`}>
                            <h2>{article.title}</h2>
                            <p>{article.content[0].substring(0, 150)}...</p>
                        </Link>
                    </div>
                ))
            }
        </>
    );

}


export default ArticlesList;
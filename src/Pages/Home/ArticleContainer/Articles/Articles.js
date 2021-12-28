import { gql, useQuery } from '@apollo/client';
import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import Article from '../Article/Article';

const ARTICLES = gql`

query articles {
    articles {
      id
      title
      content
      create_time
      sub_catagory {
        catagory {
          cat_name
          id
        }
      }
    }
  }

`;

const Articles = () => {

  const { loading, error, data } = useQuery(ARTICLES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const { articles } = data;

  return (
    <>
      <Navigation></Navigation>
      <section className="text-gray-600 body-font overflow-hidden text-left	">
        <div className="container px-5 py-14 mx-auto">
          {
            articles.map(article => <Article
              key={article.id}
              article={article}
            ></Article>)
          }
        </div>
      </section>
    </>
  );
};

export default Articles;
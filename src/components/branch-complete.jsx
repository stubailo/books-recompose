import React from 'react';
import { withState, pure, branch, renderComponent, compose } from 'recompose';
import { gql, graphql } from 'react-apollo';

// Define a very basic loading state component - you could make this
// a nice animation or something
const Loading = () => (
  <div>Loading</div>
);

// Define an HoC that displays the Loading component instead of the
// wrapped component when props.data.loading is true
const displayLoadingState = branch(
  (props) => props.data.loading,
  renderComponent(Loading),
);


// The pure component that renders UI
const BookSearchResultsPure = ({ data: { books } }) => (
  <ul className="bookName">
    {books.map(book =>
      <li key={book.id}>
          {book.title} by {book.author.name}
      </li>
    )}
  </ul>
);

// The GraphQL query wrapper, provides a data prop with a loading
// field on it
const data = graphql(gql`
    query BookSearchQuery($keyword: String!) {
        books(keyword: $keyword) {
            id
            title
            author {
                id
                name
            }
        }
    }
`, {
  options: ({ keyword }) => ({ variables: { keyword } }),
});

// Put everything together!
const BookSearchResults = compose(
  data,
  displayLoadingState,
  pure,
)(BookSearchResultsPure);

// Use recompose to keep the state of the input so that we
// can use functional component syntax
const keyword = withState('keyword', 'setKeyword', '');

const BookSearchPure = ({ keyword, setKeyword }) => (
  <div className="bookList">
    <input
      type="text"
      placeholder="Search Book Here"
      value={ keyword }
      onChange={(e) => setKeyword(e.target.value)}
    />

    <BookSearchResults keyword={keyword} />
  </div>
);

// Attach the state to the pure component
const BookSearch = compose(
  keyword,
  pure,
)(BookSearchPure);

export default BookSearch;

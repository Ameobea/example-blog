import { useParams } from 'react-router-dom'
import gql from 'graphql-tag'
import Post from 'src/components/Blog/Post'

export const query = gql`
  query POST($term: String) {
    postSearch(term: $term) {
      id
      title
      slug
      author
      body
      image
      postedAt
      tags {
        id
        name
      }
    }
  }
`

export const Loader = () => <div>Loading...</div>

const SearchCell = ({ postSearch: posts, variables }) => {
  return (
    <>
      <h2 className="mt-5 text-lg text-indigo-400">
        Found {posts.length} article
        {posts.length == 1 ? '' : 's'} including &ldquo;
        {variables.term}&rdquo;:
      </h2>
      {posts.length ? (
        posts.map((post) => <Post key={post.id} post={post} summary={true} />)
      ) : (
        <h3 className="mt-4 text-xl text-gray-500">
          Try a different search term
        </h3>
      )}
    </>
  )
}

export default SearchCell

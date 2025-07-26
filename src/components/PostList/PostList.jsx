'user strict';

import { PostInfo } from '../PostInfo';

export const PostList = ({ list }) => (
  <div className="PostList">
    {list.map(post => {
      return <PostInfo info={post} key={post.id} />;
    })}
  </div>
);

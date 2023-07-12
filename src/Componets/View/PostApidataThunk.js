import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../Slice/postApiThunkdata';

const PostApidataThunk = () => {
  const { list, status } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts({ d: 1 }));
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading.....</div>;
  }

  return (
    <div>
      <ul>
        {list?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostApidataThunk;

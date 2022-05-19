import { useLocation } from "react-router";
import { useState, useEffect } from "react";

const ViewPosts = () => {
  const state = useLocation();
  const [val, setVal] = useState(0);
  useEffect(() => {
    document.title = `Chat-${val}`;
  });
  return (
    <div>
      {`this page belongs to the ${state.state.name}`}
      <button onClick={() => setVal(val + 1)}>
        Click here to update the chat
      </button>
    </div>
  );
};

export default ViewPosts;

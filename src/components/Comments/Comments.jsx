// not the name intially

import { Link } from "react-router-dom";
export default function Comments() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  // actually we don't want any array as such just for giving the index, we will the index from the map index property and the array should consist of the data only which must be visible

  // this is the page with the data
  const database = [
    { name: "rabbani", age: 21 },
    { name: "munna", age: 20 },
  ];
  return (
    <div>
      {array.map((ele, index) => {
        return (
          <>
            <div>
              <Link
                to={`myprofile/${index}`}
              >{`And this the data from the array ${ele}`}</Link>
            </div>
          </>
        );
      })}
      {database.map((arr, index) => (
        <Link
          key={index}
          to="viewpost"
          state={arr}
        >{`wanna go to ${arr.name}`}</Link>
      ))}
    </div>
  );
}

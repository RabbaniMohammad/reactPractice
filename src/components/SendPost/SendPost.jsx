import { useParams } from "react-router";
// we can actually directly jump to the new page with the data
export default function SendPost() {
  const { id } = useParams();
  const database = [0, 1, 2, 3, 4, 5, 6];
  return (
    <div>
      {database.map((ele) => {
        if (ele == id) return <div>Fount this page</div>;
      })}
    </div>
  );
}

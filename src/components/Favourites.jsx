import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Favourites = () => {
  const myFav = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();

  return (
    <Row>
      <Col>
        <Link to="/" className="m-2 btn btn-success">
          HOME
        </Link>
      </Col>

      <Col sm={12}>
        <ul style={{ listStyle: "none" }}>
          {myFav.map((fav, i) => (
            <li key={i} className="my-4">
              <Button
                className="mx-2"
                variant="success"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FAVOURITES",
                    payload: i,
                  });
                }}
              >
                <FaTrash />
              </Button>
              <Link to={`/${fav}`}>{fav}</Link>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

export default Favourites;

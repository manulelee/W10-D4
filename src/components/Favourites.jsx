import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { Row, Col, Button } from "react-bootstrap";

const Favourites = () => {
  const myFav = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: "none" }}>
          {myFav.map((fav, i) => (
            <li key={i} className="my-4">
              <Button
                variant="danger"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: i,
                  });
                }}
              >
                <FaTrash />
              </Button>

              {fav.company_name}
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

export default Favourites;

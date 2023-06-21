import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { deletePost, getPost } from "../../redux/actions/posts";
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PostDetails = ({ setcurrentId }) => {
  const location = useLocation();
  const post = location.state.post;
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deletePost(post._id));
    navigate('/');
  };

  const handleEdit = () => {
    setcurrentId(post._id);
    navigate('/form');
  };

  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
    <Card className="mb-3 shadow" style={{ minWidth: '20rem', maxWidth: "75%" }}>
      <div className="row">
        <div className="col-md-6">
          <img className="img-fluid" src={post.selectedFile} alt={post.title} />
        </div>
        <div className="col-md-6">
          <Card.Body>
            <Card.Title className="h">{post.title}</Card.Title>
            <Card.Text className="p">{post.message}</Card.Text>
          </Card.Body>
        </div>
      </div>
      <Card.Footer className="text-center">
        <div className="d-flex justify-content-between">
          <Button variant="primary" onClick={handleDelete}>
            <AiFillDelete />
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            <AiFillEdit />
          </Button>
        </div>
      </Card.Footer>
    </Card>
  </div>
)
}
 

export default PostDetails;

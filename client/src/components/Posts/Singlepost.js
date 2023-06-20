import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import "../../index.css"


const Singlepost = ({ post }) => {
const navigate = useNavigate();
  
const openPost = () => navigate(`/posts/${post._id}`, { state: { post } });


  return (
  <Card className="mb-3 shadow custom-button" style={{ maxWidth: '22rem' , maxHeight: '22rem'  , overflow:"hidden" }}>
  <button onClick={openPost} className="btn  border-0"  >
  <div style={{ maxHeight: '15rem', overflow: 'hidden' }}>
          <Card.Img variant="top" src={post.selectedFile} style={{ objectFit: 'cover', height: '100%' }} />
        </div>
  <Card.Body>
    <Card.Title className="h">{post.title}</Card.Title>
    <Card.Text className="p">{post.message}</Card.Text>
  </Card.Body>
  </button>
</Card>

  );
};

export default Singlepost;

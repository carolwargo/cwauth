import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Me from '../../assets/images/Me.png';   

function BasicExample() {
  return (
    <div>
   <div className="row w3-row-padding">
    <div className="col-sm-12 col-md-3 col-lg-3 g-3">
    <Card className='shadow'>
      <Card.Img variant="top" src={Me} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
      <div className="col-sm-12 col-md-3 col-lg-3 g-3">
    <Card className='shadow'>
      <Card.Img variant="top" src={Me} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
      <div className="col-sm-12 col-md-3 col-lg-3 g-3">
    <Card className='shadow'>
      <Card.Img variant="top" src={Me} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
      <div className="col-sm-12 col-md-3 col-lg-3 g-3">
    <Card className='shadow'>
      <Card.Img variant="top" src={Me} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
  );
}

export default BasicExample;
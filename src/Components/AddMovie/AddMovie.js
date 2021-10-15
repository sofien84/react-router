import React , {useState} from 'react'
import {Button, Modal, Form} from "react-bootstrap"
import Rating from '../Rating/Rating';

const AddMovie = ({Addfilm}) => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [rating, setRating] = useState(0)
    
   const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSave = () => {
      let newmovie =  {
              name : name ,  
              url: image ,
              rate : rating ,
              id : Math.random ()
            } 
            Addfilm(newmovie)
            setImage("")
            setName("")
            setRating(0)
            setShow(false)
   }

    return (
        <div>
           <Button variant="primary" onClick={handleShow}>
              +
            </Button>

             <Modal show={show} onHide={handleClose}>
             <Modal.Header closeButton>
                <Modal.Title>Add Your New Movie</Modal.Title>
             </Modal.Header>
              <Modal.Body>
              
                  <Form.Group>
                      <Form.Label> name: </Form.Label>
                           <Form.Control type="text" placeholder="add the  name of movie" value={name} onChange={(e)=>setName(e.target.value)} />
                   </Form.Group> 
                   <Form.Group>
                        <Form.Label> picture: </Form.Label>
                           <Form.Control type="text" placeholder="add the  url of picture movie" value={image} onChange={(e)=>setImage(e.target.value)}/>
                   </Form.Group> 
                   <Form.Group>
                        <Form.Label> rate: </Form.Label>
                        <Rating rate={rating}  setRate={setRating}/>
                   </Form.Group> 

              </Modal.Body>
              <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                 Close
               </Button>
               <Button variant="primary" onClick={handleSave}>
                 Save Changes
                </Button>
                </Modal.Footer>
               </Modal>
          </div>
    )
}

export default AddMovie

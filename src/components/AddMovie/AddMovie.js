import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const AddMovie = ({ add }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [Title, setTitle]  = useState("")
  const [Years, setYears]  = useState("")
  const [NoteImbd, setNoteImbd]  = useState("")
  const [Poster, setPoster]  = useState("")
  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleYears = (e) => {
    setYears(e.target.value)
  }

  const handleNoteImbd = (e) => {
    setNoteImbd(e.target.value)
  }
  const handlePoster = (e) => {
    setPoster(e.target.value)
  }

  const handleAdd = () => {
    let newMovies = { Title, NoteImbd, Years, Poster }
    add(newMovies)
    handleClose()
  }

  return (
    <div>

      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter your title" onChange={(e) => handleTitle(e)} />
          <Form.Label> NoteImbd</Form.Label>
          <Form.Control type="number" placeholder="Enter NoteImbd" onChange={(e) => handleNoteImbd(e)} />
          <Form.Label>Years</Form.Label>
          <Form.Control type="number" placeholder="Enter Years" onChange={(e) => handleYears(e)} />
          <Form.Label>Poster</Form.Label>
          <Form.Control type="url" placeholder="Enter Poster" onChange={(e) => handlePoster(e)} />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            add movie
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default AddMovie
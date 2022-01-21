import React, { useState } from 'react';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { useDispatch, useSelector } from 'react-redux';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { getPosts } from './features/postsSlice';
import { changeName, changeUsername, changeEmail, changeStreet, changeSuite, changeCity } from './features/usersSlice'


function UserData({ id, name, username, email, street, suite, city, phone, website }) {


  const dispatch = useDispatch()
  const { posts, loading } = useSelector((state) => state.posts)
  const [expanded, setExpanded] = React.useState(false);
  const [showPosts, setShowPost] = React.useState(false)
  const [newName, setNewName] = useState()
  const [newUsername, setNewUsername] = useState()
  const [newEmail, setNewEmail] = useState()
  const [newStreet, setNewStreet] = useState()
  const [newSuite, setNewSuite] = useState()
  const [newCity, setNewCity] = useState()

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handlePosts = () => {
    const userId = id
    setShowPost((prev) => !prev)
    dispatch(getPosts(userId))
  }

  return <div key={id} className='user' style={{ display: "flex", flexDirection: "column", width: "250px", marginBottom: "20px" }}>
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header">
        <Typography sx={{ width: '33%', flexShrink: 0 }}> User </Typography>
        <Typography sx={{ color: 'text.secondary' }}>{id}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField id="standard-basic" label="Name" variant="standard" defaultValue={name} onChange={(e) => setNewName(e.target.value)} />
          <Button variant="outlined" disabled={!newName ? "true" : ""} onClick={() => { dispatch(changeName({ id: id, name: newName })) }} sx={!newName ? { display: "none" } : { height: "40px", color: "green", cursor: "pointer", border: "none" }} >
            <CheckCircleOutlineRoundedIcon/>
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField id="standard-basic" label="Username" variant="standard" defaultValue={username} onChange={(e) => setNewUsername(e.target.value)} sx={{ marginTop: "10px" }} />
          <Button variant="outlined" disabled={!newUsername ? "true" : ""} onClick={() => { dispatch(changeUsername({ id: id, username: newUsername })) }} sx={!newUsername ? {display: "none"}:{ height: "40px", color: "green", cursor: "pointer", border: "none" }}>
            <CheckCircleOutlineRoundedIcon />
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField id="standard-basic" label="Email" variant="standard" defaultValue={email} onChange={(e) => setNewEmail(e.target.value)} sx={{ marginTop: "10px" }} />
          <Button variant="outlined" disabled={!newEmail ? "true" : ""} onClick={() => { dispatch(changeEmail({ id: id, email: newEmail })) }} sx={!newEmail ? {display: "none"}: { height: "40px", color: "green", cursor: "pointer", border: "none" }} >
            <CheckCircleOutlineRoundedIcon />
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField id="standard-basic" label="Street" variant="standard" defaultValue={street} onChange={(e) => setNewStreet(e.target.value)} sx={{ marginTop: "10px" }} />
          <Button variant="outlined" disabled={!newStreet ? "true" : ""} onClick={() => { dispatch(changeStreet({ id: id, street: newStreet })) }} sx={!newStreet ? {display: "none"}: { height: "40px", color: "green", cursor: "pointer", border: "none" }} >
            <CheckCircleOutlineRoundedIcon />
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField id="standard-basic" label="Suite" variant="standard" defaultValue={suite} onChange={(e) => setNewSuite(e.target.value)} sx={{ marginTop: "10px" }} />
          <Button variant="outlined" disabled={!newSuite ? "true" : ""} onClick={() => { dispatch(changeSuite({ id: id, suite: newSuite })) }} sx={!newSuite ? {display: "none"} : { height: "40px", color: "green", cursor: "pointer", border: "none" }} >
            <CheckCircleOutlineRoundedIcon />
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField id="standard-basic" label="City" variant="standard" defaultValue={city} onChange={(e) => setNewCity(e.target.value)} sx={{ marginTop: "10px" }} />
          <Button variant="outlined" disabled={!newCity ? "true" : ""} onClick={() => { dispatch(changeCity({ id: id, city: newCity })) }} sx={!newCity ? {display: "none"} : { height: "40px", color: "green", cursor: "pointer", border: "none" }} >
            <CheckCircleOutlineRoundedIcon />
          </Button>
        </Box>
        <TextField id="standard-basic" label="Phone" variant="standard" value={phone} sx={{ marginTop: "10px" }} />
        <TextField id="standard-basic" label="Website" variant="standard" value={website} sx={{ marginTop: "10px" }} />
        <Button variant="outlined" sx={{ marginTop: "15px" }} onClick={handlePosts}>{!showPosts ? "Get user's posts" : "Hide posts"}</Button>
      </AccordionDetails>
    </Accordion>
    {showPosts ? <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ width: '33%', flexShrink: 0 }}>User{id}/Posts</Typography>
      </AccordionSummary >
      {posts.map((post) =>
        <AccordionDetails key={post.id}>
          <Typography>Id: {post.id}</Typography>
          <Typography>Title: {post.title}</Typography>
          <Typography>Body: {post.body}</Typography>
        </AccordionDetails>)}
    </Accordion> : ""}
  </div>;
}

export default UserData;

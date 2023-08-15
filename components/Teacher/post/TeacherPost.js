import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const PostApp = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editPostId, setEditPostId] = useState(null);
  const [fileUpload, setFileUpload] = useState(null);

  const handleEdit = (postId) => {
    const postToEdit = posts.find((post) => post.id === postId);
    if (postToEdit) {
      setEditPostId(postId);
      setPostTitle(postToEdit.title);
      setPostContent(postToEdit.content);
      setIsEditing(true);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditPostId(null);
    setPostTitle("");
    setPostContent("");
    setFileUpload(null);
  };
  const isImageFile = (file) => {
    return file.type.startsWith("image/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing && editPostId !== null) {
      // Update existing post
      const updatedPost = {
        id: editPostId,
        title: postTitle,
        content: postContent,
        file: fileUpload, // Include the uploaded file in the post data
      };
      setPosts((prevPosts) =>
        prevPosts.map((post) => (post.id === editPostId ? updatedPost : post))
      );
      handleCancelEdit();
    } else {
      // Create new post
      const newPost = {
        id: Date.now(),
        title: postTitle,
        content: postContent,
        file: fileUpload, // Include the uploaded file in the post data
      };
      setPosts([...posts, newPost]);
      setPostTitle("");
      setPostContent("");
      setFileUpload(null);
    }
  };

  const handleDelete = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileUpload(file);
  };

  const renderPostList = () => {
    return posts.map((post) => (
      <Card key={post.id} className="my-4">
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            <AccessTimeIcon fontSize="small" />
            {new Date(post.id).toLocaleString()}
          </Typography>
          <Typography
            variant="h6"
            component="h2"
            className="text-blue-600 font-semibold"
          >
            {post.title}
          </Typography>
          <Typography className="text-gray-700">{post.content}</Typography>
        </CardContent>
        {isEditing && editPostId === post.id ? (
          <CardActions>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleCancelEdit}
            >
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Save
            </Button>
          </CardActions>
        ) : (
          <CardActions>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleEdit(post.id)}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDelete(post.id)}
            >
              Delete
            </Button>
          </CardActions>
        )}
        {post.file && (
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              Uploaded File:
            </Typography>
            {isImageFile(post.file) ? (
              <img
                src={URL.createObjectURL(post.file)}
                alt={post.file.name}
                style={{ maxWidth: "100%", maxHeight: "200px" }}
              />
            ) : (
              <iframe
                src={URL.createObjectURL(post.file)}
                title={post.file.name}
                width="100%"
                height="400px"
              ></iframe>
            )}
          </CardContent>
        )}
      </Card>
    ));
  };

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ width: "100%", maxWidth: "600px" }}
      >
        <Typography variant="h5" className="text-2xl font-bold">
          {isEditing ? "Update Post" : "Create New Post"}
        </Typography>
        <TextField
          label="Post Title"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          fullWidth
          variant="outlined"
          className="input-field"
        />
        <TextField
          label="Post Content"
          multiline
          rows={4}
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          fullWidth
          variant="outlined"
          className="input-field"
        />
        {/* File Upload */}
        <input type="file" onChange={handleFileChange} />
        {isEditing ? (
          <div className="action-buttons">
            <Button
              variant="contained"
              color="secondary"
              onClick={handleCancelEdit}
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
          </div>
        ) : (
          <Button type="submit" variant="contained" color="primary">
            Create Post
          </Button>
        )}
      </form>
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          overflowY: "auto",
          maxHeight: "500px",
        }}
      >
        <div className="post-list">{renderPostList()}</div>
      </div>
    </Container>
  );
};

export default PostApp;

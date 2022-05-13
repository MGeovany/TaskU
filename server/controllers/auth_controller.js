import PostMessage from '../models/userModels.js'

export const authMethods = async (req, res)=>{

  return res.json('hola');

}

export const getPost = async (req, res) =>{
  try {
    const postMessage = await PostMessage.find(); 

    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({message: error.message});
    
  }
}

export const createPost = async (req, res) =>{
  const post = req.body;

  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({message: error.message})
    
  }

  res.send('POST')
}


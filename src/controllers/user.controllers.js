import { asyncHandler } from "../utils/asyncHandler.js"

const registerUser  = asyncHandler( async (req, res) =>{
     
       res.status(500).json({
        message: "Tinkal Kumar"
      })
     
    // get user details from frontend
    // validation - not empty
    // check if user if already exist;username,email
    // check for image, check for avatar
    // upload them to cloudnary, avatar
    // create user object - create entry in db
    //remove pasword and refresh token feild from response
    // check for user creation 
    //return response

})

export {
  registerUser,
}
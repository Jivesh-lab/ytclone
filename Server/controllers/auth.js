import users from "../models/Auth.js";

// POST /auth/login
export const login = async (req, res) => {
	const { email, name, image } = req.body || {};

	if (!email) {
		return res.status(400).json({ message: 'email is required' });
	}

	try {
		const existingUser = await users.findOne({ email });

		if (!existingUser) {
			try {
				const newUser = await users.create({ email, name, image });
				return res.status(200).json({ result: newUser });
			} catch (err) {
				console.error('Error creating user:', err);
				return res.status(500).json({ message: 'something went wrong' });
			}
		} else {
			return res.status(200).json({ result: existingUser });
		}
	} catch (error) {
		console.error('Auth login error:', error);
		return res.status(500).json({ message: 'something went wrong' });
	}
};
export const updateprofile=async(req,res)=>{
	const {id:_id}=req.param
	const {channelname,description}=req.body
	 if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(500).json({ message: "User unavailable..." });
  }
  try {
    const updatedata = await users.findByIdAndUpdate(
      _id,
      {
        $set: {
          channelname: channelname,
          description: description,
        },
      },
      { new: true }
    );
    return res.status(201).json(updatedata);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }

}

export default { login };



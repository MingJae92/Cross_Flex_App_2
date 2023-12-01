import express from "express";

const loginRoute = (RegisterModel) => {
  const router = express.Router();

  router.post("/", async (req, res) => {
    try {
      const { username, email } = req.body; // Assuming you are getting username and email from the request body

      const registeredUser = await RegisterModel.findOne({ username, email });

      if (registeredUser) {
        console.log(registeredUser, "USER FOUND!!! YOU ARE NOW LOGGED IN!!!");
        return res.status(200).json({ message: "USER FOUND!!!", registeredUser });
      } else {
        console.log("USER NOT FOUND");
        return res.status(404).json({ message: "USER NOT FOUND" });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "SERVER ERROR!!!", err });
    }
  });

  return router;
};

export default loginRoute;

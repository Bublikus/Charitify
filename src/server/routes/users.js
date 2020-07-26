import { Router } from "express";
import { UserController } from "../controllers";
const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await UserController.getUsers();
    return res.send({
      err: false,
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: true, data: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await UserController.createUser(req.body);
    return res.send({
      err: false,
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: true, data: error.message });
  }
});

export default router;
import { Router } from "express";
import { OrganizationController } from "../controllers";
import { isAuthed } from "../middlewares/auth";
import errorResponse from "../utils/errorResponse";
const router = Router();

router.get("/", isAuthed, async (req, res) => {
  try {
    const data = await OrganizationController.getOrganizations();
    return res.send({
      err: false,
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json(errorResponse(error));
  }
});

router.post("/", isAuthed, async (req, res) => {
  try {
    const data = await OrganizationController.createOrganization(req.body);
    return res.send({
      err: false,
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json(errorResponse(error));
  }
});

export default router;

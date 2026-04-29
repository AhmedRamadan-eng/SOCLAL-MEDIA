import { Request, Response, Router } from "express";
import AuthService from "./auth.service";
import { SuccessResponse } from "../../common/exceptions/success.responce";
import { sigupSchema } from "./auth.validation";
import { validation } from "../../middleware/middleware.validation";

const router = Router();

/* ==================== LOGIN ==================== */
router.post("/login", async (req: Request, res: Response) => {
  const data = await AuthService.loign(req.body);

  return SuccessResponse({
    res,
    message: "login success",
    status: 200,
    data
  });
});

/* ==================== SIGNUP ==================== */
router.post(
  "/signup",
  validation(sigupSchema),
  async (req: Request, res: Response) => {
    const data = await AuthService.signup(req.body);
   data.result.username

    return SuccessResponse({
      res,
      message: "signup success",
      status: 201,
      data
    });
  }
);

export default router;
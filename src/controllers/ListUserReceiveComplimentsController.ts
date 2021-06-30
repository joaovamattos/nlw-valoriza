import { Request, Response } from "express";
import { ListUserReceiveComplementsService } from "../services/ListUserReceiveComplementsService";

class ListUserReceiveComplimentsController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;

    const listUserRecieveComplimentsService =
      new ListUserReceiveComplementsService();

    const compliments = await listUserRecieveComplimentsService.execute(
      user_id
    );

    return res.json(compliments);
  }
}

export { ListUserReceiveComplimentsController };

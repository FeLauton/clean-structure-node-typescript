import { Request, Response } from "express";
import { CreateUserController } from "../controllers/create-user/create-user";
import { DeleteUserController } from "../controllers/delete-user/delete-user";
import { GetUsersController } from "../controllers/get-users/get-users";
import { UpdateUserController } from "../controllers/update-user/update-user";
import { MongoCreateUserRepository } from "../repositories/create-user/mongo-create-user";
import { MongoDeleteUserRepository } from "../repositories/delete-user/mongo-delete-user";
import { MongoGetUsersRepository } from "../repositories/get-users/mongo-get-users";
import { MongoUpdateUserRepository } from "../repositories/update-user/mongo-update-user";

export const getUsers = async (request: Request, response: Response) => {
  const mongoGetUsersRepository = new MongoGetUsersRepository();

  const getUsersController = new GetUsersController(mongoGetUsersRepository);

  const { body, statusCode } = await getUsersController.handle();

  response.status(statusCode).send(body);
};

export const createUser = async (request: Request, response: Response) => {
  const mongoCreateUserRepository = new MongoCreateUserRepository();

  const createUserController = new CreateUserController(
    mongoCreateUserRepository
  );

  const { body, statusCode } = await createUserController.handle({
    body: request.body,
  });

  response.status(statusCode).send(body);
};

export const updateUser = async (request: Request, response: Response) => {
  const mongoUpdateUserRepository = new MongoUpdateUserRepository();

  const updateUserController = new UpdateUserController(
    mongoUpdateUserRepository
  );

  const { body, statusCode } = await updateUserController.handle({
    body: request.body,
    params: request.params,
  });

  response.status(statusCode).send(body);
};

export const deleteUser = async (request: Request, response: Response) => {
  const mongoDeleteUserRepository = new MongoDeleteUserRepository();

  const deleteUserController = new DeleteUserController(
    mongoDeleteUserRepository
  );

  const { body, statusCode } = await deleteUserController.handle({
    params: request.params,
  });

  response.status(statusCode).send(body);
};

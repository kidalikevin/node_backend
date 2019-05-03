import { Request, Response } from 'express';
import { Jwt } from '../config/jwt';
import env from 'dotenv';
import { UserController } from '../controllers/UserController';
import { LocationController } from '../controllers/LocationController';
import { BragController } from '../controllers/BragController';
import { ChatController } from '../controllers/ChatController';
import { CommentController } from '../controllers/CommentController';
import { SocialCountersController } from '../controllers/SocialCountersController';

env.config();

export class Routes {
  public UserController: UserController = new UserController();
  public LocationController: LocationController = new LocationController();
  public BragController: BragController = new BragController();
  public ChatController: ChatController = new ChatController();
  public CommmentController: CommentController = new CommentController();
  public SocialCountersController: SocialCountersController = new SocialCountersController();
  public jwt: Jwt = new Jwt();

  public routes(app: any): void {
    const apiprefix = process.env.API_V1;

    // Welcome api note
    app.route('/').get((req: Request, res: Response, next: any) => {
      res.status(200).send({
        message: 'Welcome Ringa API v.0.1',
      });
    });

    /* Manage users */
    /*---------------*/
    app
      .route(`${apiprefix}/users`)
      .post(this.UserController.addNewUser)
      .get(this.jwt.validateToken, this.UserController.getUsers);
    app
      .route(`${apiprefix}/users/login`)
      .post(this.UserController.login);
    app
      .route(`${apiprefix}/users/:userId`)
      .get(this.jwt.validateToken, this.UserController.getUserWithID)
      .put(this.jwt.validateToken, this.UserController.updateUser)
      .delete(this.jwt.validateToken, this.UserController.deleteUser);

    /* Manage Locations */
    /*----------------*/
    app
      .route(`${apiprefix}/locations`)
      .post(this.jwt.validateToken, this.LocationController.addNewLocation)
      .get(this.jwt.validateToken, this.LocationController.getLocations);
    app
      .route(`${apiprefix}/locations/user/:userId`)
      .get(this.LocationController.getLocationByUserId);
    app
      .route(`${apiprefix}/locations/:locationId`)
      .get(this.jwt.validateToken, this.LocationController.getLocationWithID)
      .put(this.jwt.validateToken, this.LocationController.updateLocation)
      .delete(this.jwt.validateToken, this.LocationController.deleteLocation);

    /* Manage Brag */
    /*----------------*/
    app
      .route(`${apiprefix}/brags`)
      .post(this.jwt.validateToken, this.BragController.addNewBrag)
      .get(this.jwt.validateToken, this.BragController.getBrags);
    app
    .route(`${apiprefix}/brags/user/:userId`)
    .get(this.jwt.validateToken, this.BragController.getBragByUserId);
    app
      .route(`${apiprefix}/brags/:bragId`)
      .get(this.jwt.validateToken, this.BragController.getBragWithID)
      .put(this.jwt.validateToken, this.BragController.updateBrag)
      .delete(this.jwt.validateToken, this.BragController.deleteBrag);

    /* Manage Chat */
    /*----------------*/
    app
      .route(`${apiprefix}/chat`)
      .post(this.jwt.validateToken, this.ChatController.addNewChat)
      .get(this.jwt.validateToken, this.ChatController.getChats);
    app
      .route(`${apiprefix}/chat/connection/:connection`)
      .get(this.jwt.validateToken, this.ChatController.getChatByConnectionId);
    app
      .route(`${apiprefix}/chat/:chatId`)
      .get(this.jwt.validateToken, this.ChatController.getChatWithID)
      .put(this.jwt.validateToken, this.ChatController.updateChat)
      .delete(this.jwt.validateToken, this.ChatController.deleteChat);

    /* Manage Comment */
    /*----------------*/
    app
      .route(`${apiprefix}/comments`)
      .post(this.jwt.validateToken, this.CommmentController.addNewComment)
      .get(this.jwt.validateToken, this.CommmentController.getComments);
    app
      .route(`${apiprefix}/comments/entry/:entryId`)
      .get(this.jwt.validateToken, this.CommmentController.getCommentByEntryId);
    app
      .route(`${apiprefix}/comments/:commentId`)
      .get(this.jwt.validateToken, this.CommmentController.getCommentWithID)
      .put(this.jwt.validateToken, this.CommmentController.updateComment)
      .delete(this.jwt.validateToken, this.CommmentController.deleteComment);

    /* Manage Social Counters */
    /*----------------*/
    app
      .route(`${apiprefix}/socialcounters`)
      .post(this.jwt.validateToken, this.SocialCountersController.addNewCounter)
      .get(this.jwt.validateToken, this.SocialCountersController.getSocialcounters);
    app
      .route(`${apiprefix}/socialcounters/entry/:entryId`)
      .get(this.jwt.validateToken, this.SocialCountersController.getSocialCountersByEntryId);
    app
      .route(`${apiprefix}/socialcounters/:socialcounterId`)
      .get(this.jwt.validateToken, this.SocialCountersController.getSocialcounterWithID)
      .put(this.jwt.validateToken, this.SocialCountersController.updateSocialcounter)
      .delete(this.jwt.validateToken, this.SocialCountersController.deleteSocialcounter);
  }
}

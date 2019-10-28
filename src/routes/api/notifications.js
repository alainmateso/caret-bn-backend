import express from 'express';
import notificationController from '../../controllers/notificationController';
import validateToken from '../../middlewares/auth/validateToken';
import checkId from '../../middlewares/checkId';

const { allNotifications, oneNotification, switchRead } = notificationController;
const router = express.Router();

/**
 * @swagger
 * /notifications/:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Notifications
 *     name: Get All Notifications
 *     summary: Get All Notifications
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     responses:
 *       '200':
 *         description: Your Notifications!
 *       '404':
 *         description: No Notification Found!
*/
/**
 * @swagger
 * /notifications/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Notifications
 *     name: Get A Notification
 *     summary: Get A Notification
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         schema:
 *          type: integer
 *          example: 3
 *     responses:
 *       '200':
 *         description: Your Notifications!
 *       '404':
 *         description: No Notification Found!
*/
/**
 * @swagger
 * /notifications/{id}/mark:
 *   patch:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Notifications
 *     name: Mark a Notification as read/unread
 *     summary: Mark a Notification as read/unread
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         schema:
 *          type: integer
 *          example: 3
 *     responses:
 *       '200':
 *         description: This notification has been marked as read/unread!
 *       '404':
 *         description: No Notification Found!
*/

router.get('/', validateToken, allNotifications);
router.get('/:id', validateToken, checkId, oneNotification);
router.patch('/:id/mark', validateToken, checkId, switchRead);

export default router;

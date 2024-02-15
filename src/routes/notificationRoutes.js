const express = require('express');
const router = express.Router();
const NotificationController = require('../controllers/notificationController');

// Define routes for notification-related operations

// POST /api/notifications
router.post('/', NotificationController.sendNotification);

module.exports = router;

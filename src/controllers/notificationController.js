const NotificationService = require('../services/notificationService');

const NotificationController = {
  sendNotification: async (req, res) => {
    const { recipients, message } = req.body;
    try {
      await NotificationService.sendNotification(recipients, message);
      res.status(201).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = NotificationController;

// File routes
const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');
const uploadMiddleware = require('../middleware/uploadMiddleware');
const authMiddleware = require('../middleware/authMiddleware');
// Upload a file
router.post('/upload', authMiddleware, uploadMiddleware.single('file'), fileController.uploadFile);
// Download a file
router.get('/download/:id', authMiddleware, fileController.downloadFile);
// Delete a file
router.delete('/delete/:id', authMiddleware, fileController.deleteFile);
module.exports = router;

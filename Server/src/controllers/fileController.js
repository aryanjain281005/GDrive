// File controller
const path = require('path');
const fs = require('fs');promises;
const File = require('../models/File'); 
const User = require('../models/User');

// Upload a file
exports.uploadFile = async (req, res) => {
    try {
        const file = new File({
            filename: req.file.filename,
            originalname: req.file.originalname,
        });
        await file.save();
        res.status(201).json({ message: 'File uploaded successfully', file });
    } catch (err) {
        res.status(500).json({ error: 'File upload failed' });
    }       
};

// Download a file  
exports.downloadFile = async (req, res) => {
    try {
        const file = await File.findById(req.params.id);
        if (!file) {
            return res.status(404).json({ error: 'File not found' });
        }
        const filePath = path.join(__dirname, '..', 'uploads', file.filename);
        res.download(filePath, file.originalname);
    } catch (err) {
        res.status(500).json({ error: 'File download failed' });
    }
};

// Delete a file    
exports.deleteFile = async (req, res) => {
    try {
        const file = await File.findById(req.params.id);
        if (!file) {
            return res.status(404).json({ error: 'File not found' });
        }   
        const filePath = path.join(__dirname, '..', 'uploads', file.filename);
        await fs.unlink(filePath);
        await file.remove();
        res.status(200).json({ message: 'File deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'File deletion failed' });
    }   
};

const Log = require('../models/Log');

// @desc    Get all logs
// @route   GET /api/v1/logs
// @access  Public
exports.getLogs = async (req, res, next) => {
    try {
        const logs = await Log.find();

        return res.status(200).json({
            success: true,
            count: logs.length,
            data: logs
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}
// @desc    Add log
// @route   POST /api/v1/logs
// @access  Public
exports.addLog = async (req, res, next) => {
    try {
        const { text, amount } = req.body;

        const log = await Log.create(req.body);

        return res.status(201).json({
            success: true,
            data: log
        });
    } catch (err) {
        if(err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
    
    
    
}

// @desc    Delete log
// @route   DELETE /api/v1/logs/:id
// @access  Public
exports.deleteLog = async (req, res, next) => {
    try {
        const log = await Log.findById(req.params.id);

        if(!log) {
            return res.status(404).json({
                success: false,
                error: 'No log found'
            });
        }

        await log.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}
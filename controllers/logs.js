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
        return res.sendStatus(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}
// @desc    Add log
// @route   POST /api/v1/logs
// @access  Public
exports.addLog = async (req, res, next) => {
    res.send('POST log');
}

// @desc    Delete log
// @route   DELETE /api/v1/logs/:id
// @access  Public
exports.deleteLog = async (req, res, next) => {
    res.send('DELETE log');
}
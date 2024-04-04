// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const { createUser, setPermissions } = require('../controllers/userController');

// Routes for creating new users and setting permissions
router.post('/create', createUser); // Superuser-only route
router.put('/:userId/permissions', setPermissions); // Superuser-only route

module.exports = router;

const { addMessage, getMessages } = require("../controllers/messageController");
const router = require("express").Router();
const express = require('express');

router.post("/addmsg/", addMessage);
router.post("/getmsg/", getMessages);

module.exports = router;

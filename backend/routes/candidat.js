const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();
const prisma = new PrismaClient();

// Récupérer tous les candidats
router.get('/', async (req, res) => {
  try {
    const candidates = await prisma.candidat.findMany();
    res.json(candidates);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

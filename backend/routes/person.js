const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();
const prisma = new PrismaClient();

// Ajouter une nouvelle personne
router.post('/', async (req, res) => {
  const { firstName, lastName, phoneNumber, email, affiliation } = req.body;

  try {
    const person = await prisma.personne.create({
      data: {
        firstName,
        lastName,
        phoneNumber,
        email,
        affiliation
      }
    });

    res.status(201).json(person);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Filtrer les personnes de l'ACE
router.get('/ace', async (req, res) => {
  try {
    const acePersons = await prisma.personne.findMany({
      where: { affiliation: 'ACE' }
    });

    res.json(acePersons);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

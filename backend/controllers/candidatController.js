const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Créer un nouveau candidat
exports.createCandidate = async (req, res) => {
  const { firstName, lastName, profilePicture } = req.body;

  try {
    const candidate = await prisma.candidat.create({
      data: {
        firstName,
        lastName,
        profilePicture
      }
    });

    res.status(201).json(candidate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

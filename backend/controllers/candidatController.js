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

// Récupérer la liste des candidats
exports.getCandidates = async (req, res) => {
  try {
    const candidates = await prisma.candidat.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        profilePicture: true
      }
    });

    const formattedCandidates = candidates.map(candidate => ({
      fullName: `${candidate.firstName} ${candidate.lastName}`,
      profilePicture: candidate.profilePicture
    }));

    res.json(formattedCandidates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

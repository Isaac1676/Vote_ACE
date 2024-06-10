const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Créer une nouvelle personne
exports.createPerson = async (req, res) => {
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
};

// Voter pour un candidat
exports.voteForCandidate = async (req, res) => {
  const { personId, candidateId } = req.params;

  try {
    const person = await prisma.personne.findUnique({
      where: { id: parseInt(personId) }
    });

    if (!person) {
      return res.status(404).json({ message: 'Person not found' });
    }

    if (person.voteToken <= 0) {
      return res.status(400).json({ message: 'No vote tokens available' });
    }

    const candidate = await prisma.candidat.findUnique({
      where: { id: parseInt(candidateId) }
    });

    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    await prisma.$transaction([
      prisma.candidat.update({
        where: { id: candidate.id },
        data: { votes: candidate.votes + 1 }
      }),
      prisma.personne.update({
        where: { id: person.id },
        data: { voteToken: 0 }
      }),
      prisma.vote.create({
        data: {
          personId: person.id,
          candidateId: candidate.id
        }
      })
    ]);

    res.json({ message: 'Vote successful' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

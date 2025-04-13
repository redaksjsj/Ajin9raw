const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createCourse = async (req, res) => {
  const { title, description, categoryId } = req.body;
  const userId = req.user.userId; // récupéré depuis le token

  try {
    const newCourse = await prisma.course.create({
      data: {
        title,
        description,
        category: { connect: { id: parseInt(categoryId) } },
        teacher: { connect: { id: userId } },
      },
    });

    res.status(201).json({ message: "Cours créé avec succès", course: newCourse });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};

module.exports = { createCourse };

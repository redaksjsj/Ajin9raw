const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const category = await prisma.category.create({
      data: { name },
    });
    res.status(201).json({ message: "Catégorie créée", category });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};

module.exports = { createCategory };

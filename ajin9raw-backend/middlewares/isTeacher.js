const isTeacher = (req, res, next) => {
    if (req.user.role !== "teacher") {
      return res.status(403).json({ message: "Accès réservé aux enseignants." });
    }
    next();
  };
  
  module.exports = isTeacher;
  
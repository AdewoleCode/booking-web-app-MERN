import jwt from "jsonwebtoken";


export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(500).json({ message: "You're not authenticated!" });
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return res.status(500).json({ message: "You're not authenticated!" });;
    req.user = user;
    console.log(req.user, " verify");
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      console.log(req.user, " verified token");
      next();
    } else {
      return res.status(500).json({ message: "You're not an authenticated user!" });
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      console.log(req.user, " verified admin");
      next();
    } else {
      return res.status(500).json({ message: "You're not authenticated admin" });
    }
  });
};
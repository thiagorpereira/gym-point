import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth'

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if(!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  // Bearer[0], "eyJ...wLInjh3o7vbaLw[1]"
  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    req.adminId = decoded.id;
    return next();
  } catch (err) {
      return res.status(401).json({ error: 'Token invalid'});
  }

};

import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';
import Admin from '../models/Admin';

class SessionController{
  async store(req, res) {
    const { email, password} = req.body;

    const admin = await Admin.findOne({ where : { email} });

    if (!admin) {
      return res.status(401).json({ error: "Admin not found"});
    }

    if(!(await admin.checkPassword(password))){
      return res.status(401).json({ erros: 'Password does not match'});
    }

    const { id, name } = admin;

    return res.json({
      admin: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}
export default new SessionController();

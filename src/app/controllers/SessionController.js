import Admin from '../models/Admin';

class SessionController{
  async store(req, res) {
    const { email } = req.body;

    const admin = await Admin.findOne({ where : { email} });

    if (!admin) {
      return res.status(400).json({ error: "Admin not found"});
    }

    const { id, name } = admin;

    return res.json({
      admin: {
        id,
        name,
        email,
      },
    })
  }
}
export default new SessionController();

import Admin from '../models/Admin';

class AdminController {
  async store(req, res) {

    const adminExists = await Admin.findOne({ where : { email: req.body.email} });
    if (adminExists) {
      return res.status(400).json({ error: "Admin already exists"});
    }
    const { id, name, email } = await Admin.create(req.body);
    return res.json({ id, name , email});

  }

}

export default new AdminController();

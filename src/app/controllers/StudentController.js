import * as Yup from 'yup';
import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number()
        .positive()
        .integer()
        .required(),
      weight: Yup.number()
        .positive()
        .required(),
      height: Yup.number()
        .positive()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email } = req.body;

    const studentExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExists) {
      return res.status(401).json({ error: 'Student already exists' });
    }

    const { id, name, age, weight, height } = await Student.create(req.body);

    return res.json({ id, name, email, age, weight, height });
  }
}

export default new StudentController();

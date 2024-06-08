import Estudiante from "../database/models/student.js";

export const getEstudiantes = async (req, res) => {
  try {
    const estudiantes = await Estudiante.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "No se pueden obtener los datos de los estudiantes",
    });
  }
};

export const getEstudiantePorId = async (req, res) => {
  try {
    const id = req.params.id;
    const estudiante = await Estudiante.findById(id);
    res.status(200).json(estudiante);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "No se pudo obtener los datos del estudiante",
    });
  }
};

export const crearEstudiante = async (req, res) => {
  try {
    const { legajo } = req.body;
    const searchStudent = await Estudiante.findOne({ legajo });
    if (searchStudent)
      res.status(404).json({
        message: `Ya existe un estudiante con el legajo ${legajo}`,
      });

    const newStudent = new Estudiante(req.body);
    await newStudent.save();
    res.status(201).json({
      message: "El estudiante se creo con éxito",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Ocurrio un error al crear el estudiante",
    });
  }
};

export const editarEstudiante = async (req, res) => {
  try {
    const id = req.params.id;
    const searchedStudent = await Estudiante.findById(id);
    if (!searchedStudent)
      res.status(404).json({
        message: "No se encontro el estudiante a editar",
      });

    await Estudiante.findByIdAndUpdate(id, req.body);
    res.status(200).json({
      message: "El estudiante se edito con éxito",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Ocurrio un error al editar el estudiante",
    });
  }
};

export const eliminarEstudiante = async (req, res) => {
  try {
    const id = req.params.id;
    const searchedStudent = await Estudiante.findById(id);
    if (!searchedStudent)
      res.status(404).json({
        message: "No se encontro el estudiante a eliminar",
      });

    await Estudiante.findByIdAndDelete(id);
    res.status(200).json({
      message: "Estudiante eliminado con éxito",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Ocurrio un error al intentar eliminar el estudiante",
    });
  }
};

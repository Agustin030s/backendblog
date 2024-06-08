import {
  createStudent,
  deleteStudent,
  getAllStudents,
  getStudentById,
  getStudentByLegajo,
  updateStudent,
} from "../database/estudiante.db.js";

export const getEstudiantes = async (req, res) => {
  try {
    const estudiantes = await getAllStudents();
    res.status(200).json(estudiantes);
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
    const estudiante = await getStudentById(id);
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
    console.log(req.body);
    const searchStudent = await getStudentByLegajo(legajo);
    if (searchStudent) {
      return res.status(404).json({
        message: `Ya existe un estudiante con el legajo ${legajo}`,
      });
    }

    await createStudent(req.body);
    res.status(201).json({
      message: "El estudiante se creó con éxito",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Ocurrió un error al crear el estudiante",
    });
  }
};

export const editarEstudiante = async (req, res) => {
  try {
    const id = req.params.id;
    const searchedStudent = await getStudentById(id);
    if (!searchedStudent)
      res.status(404).json({
        message: "No se encontro el estudiante a editar",
      });

    await updateStudent(id, req.body);
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
    const searchedStudent = await getStudentById(id);
    if (!searchedStudent)
      res.status(404).json({
        message: "No se encontro el estudiante a eliminar",
      });

    await deleteStudent(id);
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

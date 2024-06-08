import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema({
  nombreCompleto: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 80,
  },
  Edad: {
    type: Number,
    required: true,
    min: 0,
    max: 150,
  },
  legajo: {
    type: Number,
    required: true,
    min: 10000,
    max: 100000,
  },
  email: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 340,
    validate: {
      validator: (valor) => {
        const pattern =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return pattern.test(valor);
      },
      message: (props) => `${props.value} no es un email válido`,
    },
    unique: true,
  },
  descripcion: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 300,
  },
  github: {
    type: String,
    minLength: 3,
    maxLength: 150,
  },
});

const Estudiante = mongoose.model("datos", studentSchema);

export default Estudiante;

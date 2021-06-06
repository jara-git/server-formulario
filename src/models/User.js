const { Schema, model } = require("mongoose");
//model es lo que se va a manipular, buscar, modifiacr,..
//schema es estructura de lo que se va a guardar en la bd

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        surname: { type: String, required: true },
        age: { type: Number, required: true },
        dni: { type: String, required: true },
        bday: { type: Date, required: true },
        favColor: { type: String, required: true },
        sex: { type: String, required: true }
    },
    {

        versionKey: false,
        //dato de cuando fue creado o actualizado
        timestamps: true,
    }
);

module.exports = model("User", userSchema);

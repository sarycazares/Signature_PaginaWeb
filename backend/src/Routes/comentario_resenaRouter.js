const express = require('express');
const router = express.Router();

const comentario_resenaController = require('../Controllers/com_resenaController');

router.post("/comres", comentario_resenaController.conentarioResena_create);

//router.put("/student/update", student_controller.student_update);
//router.delete("/student/:id", student_controller.student_delete);
//router.delete("/student", student_controller.student_delete);

//router.get("/student", student_controller.student_getAll);
//router.get("/student/:id", student_controller.student_getById);


module.exports = router;
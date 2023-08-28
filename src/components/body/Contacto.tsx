import axios from "axios";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

export default function Contacto({ title }: { title: string }) {
  const initialValues = {
    name: "",
    last_name: "",
    phone: "",
    email: "",
    whatsapp: "",
    comentario: "",
  };

  interface FormValues {
    name: string;
    last_name: string;
    phone: string;
    email: string;
    whatsapp: string;
    comentario: string;
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Campo requerido"),
    last_name: Yup.string().required("Campo requerido"),
    phone: Yup.string().required("Campo requerido"),
    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("Campo requerido"),
    whatsapp: Yup.string().required("Campo requerido"),
    comentario: Yup.string().required("Campo requerido"),
  });

  const handleSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/messages",
        values
      );
      console.log("Response:", response.data);
      // Mensaje enviado correctamente
      Swal.fire({
        icon: "success",
        title: "Mensaje enviado exitosamente",
        text: "Tu mensaje ha sido enviado con éxito.",
      });

      // Restablecer los campos del formulario
      resetForm();
    } catch (error) {
      console.log(error);
      // Manejar errores en caso de fallo en el envío
      Swal.fire({
        icon: "error",
        title: "Error de mensaje",
        text: "No se puede enviar el mensaje.",
      });
    }
  };
  return (
    <div>
      <p className="flex justify-center font-bold text-5xl">{title}</p>
      <div className="flex items-center justify-center lg:p-12 mt-6">
        <div className="mx-auto w-full max-w-[1000px]">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors }) => (
              <Form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Nombre:
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main"
                      placeholder="Ingrese su nombre"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Apellido:
                    </label>
                    <Field
                      type="text"
                      id="last_name"
                      name="last_name"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main"
                      placeholder="Ingrese su apellido"
                    />
                    <ErrorMessage
                      name="last_name"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Telefono:
                    </label>
                    <Field
                      type="text"
                      id="phone"
                      name="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main"
                      placeholder="+000000000000"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      email:
                    </label>
                    <Field
                      type="text"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main"
                      placeholder="xxxxxxx@xxxx.xxx"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Whatsapp"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Whatsapp:
                    </label>
                    <Field
                      type="text"
                      id="whatsapp"
                      name="whatsapp"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main"
                      placeholder="+000000000000"
                    />
                    <ErrorMessage
                      name="whatsapp"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Comentario:
                    </label>
                    <Field
                      type="text"
                      id="comentario"
                      name="comentario"
                      as="textarea" // Usar el elemento <textarea> en lugar de <input>
                      rows={5} // Definir el número de filas
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main"
                      placeholder="Ingrese su comentario"
                    />
                    <ErrorMessage
                      name="comentario"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>
                <div className="my-2">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-main hover:text-black text-white font-semibold rounded"
                    disabled={Object.keys(errors).length > 0}
                  >
                    Enviar Mensaje
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

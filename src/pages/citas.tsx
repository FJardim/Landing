import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { NavBar } from "../components/navBar/navBar";
import portada from "../assets/image/portadaDos.jpg";
import axios from "axios";
import jsPDF from "jspdf";
import Swal from "sweetalert2";
import { format, getDate, parse } from "date-fns";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

const checkAppointmentAvailability = async (date: Date) => {
  const { data } = await axios.post<
    {
      date: string;
      apoointmentsCount: number;
      isFull: boolean;
    }[]
  >("http://localhost:3000/appointment/availability", { date });

  return data;
};

const getAvailabletimes = async (date: string) => {
  const { data } = await axios.post(
    "http://localhost:3000/appointment/available-times",
    { date }
  );

  return data;
};

export default function Citas() {
  //obtener el queryString citas?documentId=1
  const router = useRouter();
  const documentId = router.query.documentId as string;
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [excludedDates, setExcludedDates] = useState<Date[]>([]);
  const [times, setTimes] = useState<string[]>([]);

  const [documentName, setDocumentName] = useState<{
    name: string;
    tipoDocuments: string;
    fileSetting: string;
  }>({
    name: "",
    tipoDocuments: "",
    fileSetting: "",
  });
  const [selectedTime, setSelectedTime] = useState<string>("");
  const { token, user, isAuthenticated } = useAuth();
  const excludedDatesDaysOfMonth = excludedDates.map(getDate);
  const minDate = new Date();
  const formattedSelectedDate = selectedDate
    ? format(selectedDate, "yyyy-MM-dd")
    : "";

  const handleMonthChange = async (date: Date) => {
    const daysOfMonth = await checkAppointmentAvailability(date);

    const excludedDates = daysOfMonth
      .filter((day) => day.isFull)
      .map((day) => parse(day.date, "yyyy-MM-dd", new Date()));

    setExcludedDates(excludedDates);
  };

  //peticion a la api
  const getDocumentsId = async (documentId: number) => {
    try {
      const response = await axios.get(
        "http://localhost:3000/documents/" + documentId
      );
      const documentName = response.data;
      setDocumentName(documentName);
      // console.log(documentName.name);
      // console.log(documentName);
    } catch (error) {
      console.error("Error al hacer la petición:", error);
    }
  };
  //citas
  const [dataCitas, setDataCitas] = useState<{
    name_doc: string;
    appointment_date: string;
    appointment_time: string;
    documents_id: string;
    user_id: string;
    imagen: File | null;
  }>({
    name_doc: "",
    appointment_date: "",
    appointment_time: "",
    documents_id: "",
    user_id: "",
    imagen: null,
  });

  //agregar una cita
  const addAppointment = async () => {
    const formData = new FormData();

    if (
      formattedSelectedDate &&
      selectedTime &&
      documentName.name &&
      dataCitas.imagen
    ) {
      formData.append("name_doc", documentName.name);
      formData.append("appointment_date", formattedSelectedDate);
      formData.append("appointment_time", selectedTime);
      formData.append("documents_id", documentId);
      formData.append("user_id", user?.id.toString() ?? "");
      formData.append("file", dataCitas.imagen);
    } else {
      return alert("Seleccione una fecha, hora, documento y archivo válidos.");
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/appointment",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Generar el PDF con los datos de la cita
      const imgData =
        "data:image/png;base64,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";

      const pdf = new jsPDF();
      //Agregar el logo
      pdf.addImage(imgData, "PDF", 15, 40, 50, 20);
      pdf.text("Comprobante de Cita", 10, 80);
      pdf.text(`Solicitado por: ${user?.name}`, 10, 110);
      pdf.text(`Correo Electrónico: ${user?.email}`, 10, 120);
      pdf.text(`Teléfono: ${user?.mobile_phone}`, 10, 130);
      pdf.text(`Nombre del Documento: ${documentName.name}`, 10, 140);
      pdf.text(`Fecha de la Cita: ${formattedSelectedDate}`, 10, 150);
      pdf.text(`Hora de la Cita: ${selectedTime}`, 10, 160);

      pdf.save("comprobante.pdf");

      // Obtener la versión base64 del PDF generado
      const pdfBase64 = pdf.output("datauristring");

      // Mostrar mensaje de éxito con Swal y el enlace al PDF
      Swal.fire({
        icon: "success",
        title: "Cita Agregada",
        text: "La cita se ha agregado exitosamente.",
        confirmButtonText: "ok",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "La fecha y hora seleccionadas no están disponibles, Vuelva a recargar la pagina y agendar otro día.",
      });
    }
  };

  useEffect(() => {
    handleMonthChange(minDate);
  }, []);

  useEffect(() => {
    if (formattedSelectedDate) {
      getAvailabletimes(formattedSelectedDate).then(setTimes);
    }
  }, [formattedSelectedDate]);

  useEffect(() => {
    if (router.query.documentId) {
      const documentId = parseInt(router.query.documentId as string); // Convertir a número
      getDocumentsId(documentId);
    }
  }, [router.query.documentId]);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push({
        pathname: "/",
        query: { login: true },
      });
    }
  }, [isAuthenticated]);

  return (
    <div className="bg-[#D9D9D9]">
      <div
        className=""
        style={{
          backgroundImage: `url(${portada.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <NavBar />
      </div>
      <div className="p-4">
        <p className="text-cyan-600 text-center lg:text-2xl text-3xl font-semibold p-4">
          Solicitud de Cita
        </p>
        <div className="lg:flex flex-col lg:flex-row lg:mt-12">
          <div className="w-full lg:w-1/2 lg:pr-2 text-center">
            <DatePicker
              onChange={setSelectedDate}
              onMonthChange={handleMonthChange}
              inline
              excludeDates={excludedDates}
              selected={selectedDate}
              minDate={minDate}
            />
            <div className="flex mt-4 lg:mx-24 text-center justify-center items-center">
              <div className="w-1/3 text-center">
                <div className="m-auto h-10 w-10 rounded-full bg-white border-2 border-gray-400 mb-2"></div>
                <p>Deshabilitado</p>
              </div>
              <div className="w-1/3 text-center">
                <div className="m-auto h-10 w-10 rounded-full bg-red-500 border-2 border-red-600 mb-2"></div>
                <p>Sin disponibilidad</p>
              </div>
              <div className="w-1/3 text-center">
                <div className="m-auto h-10 w-10 rounded-full bg-[#216ba5] border-2 border-[#216ba5] mb-2"></div>
                <p>Seleccionado</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 mt-4 ">
            <div className="bg-white rounded-md w-full ">
              <div className="px-6 mx-4 pt-6">
                <p className="text-lg font-semibold">Documento: </p>
                <p className="text-base">{documentName.name}</p>
              </div>
              <div className="px-6 m-4">
                <p className="mb-4 text-lg font-semibold">Hora de la Cita:</p>
                <select
                  className="w-72 p-2 border-2 border-gray-400 rounded-md"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                >
                  <option value={""}>Selecciona un horario</option>
                  {times.map((time) => (
                    <option value={time} key={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
              <div className="px-6 m-4">
                <p className="mb-4 text-lg font-semibold"></p>
                <label
                  htmlFor="fileInput"
                  className="mb-4 text-lg font-semibold"
                >
                  Subir Soporte de Pago:
                </label>
                <input
                  type="file"
                  id="fileInput"
                  name="fileInput"
                  className="w-full"
                  onChange={(e) => {
                    if (e.target?.files?.[0]) {
                      setDataCitas({
                        ...dataCitas,
                        imagen: e.target?.files?.[0],
                      });
                    }
                  }}
                />
              </div>
              <div className="text-center p-6 w-full">
                <button
                  className="bg-main text-white text-xl py-2 px-20 rounded-lg"
                  onClick={addAppointment}
                >
                  Agregar Cita
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

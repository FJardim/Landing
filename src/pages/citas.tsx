import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { NavBar } from "../components/navBar/navBar";
import portada from "../assets/image/portadaDos.jpg";
import axios from "axios";
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
  const { token, user } = useAuth();
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
      formData.append("name_doc", "");
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
      console.log(dataCitas);
      console.log("Cita agregada:", response.data);
      console.log(response);
    } catch (error) {
      console.error("Error al agregar la cita:", error);
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
        <div className="flex mt-12">
          <div className="w-1/2 pr-2 text-center">
            <DatePicker
              onChange={setSelectedDate}
              onMonthChange={handleMonthChange}
              inline
              excludeDates={excludedDates}
              selected={selectedDate}
              minDate={minDate}
            />
            <div className="flex mt-4 mx-24 text-center justify-center items-center">
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

          <div className="w-1/2">
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
              <div className="text-center p-6">
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

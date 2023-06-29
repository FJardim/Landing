import React from "react";
import Link from "next/link";
import { NavBar } from "../components/navBar/NavBar";
import portada from "../assets/image/portadaDos.jpg";

export default function Modelos() {
  return (
    <div className="bg-[#D9D9D9]">
      <div
        className=""
        style={{
          backgroundImage: `url(${portada.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "130px",
        }}
      >
        <NavBar />
      </div>
      <div className="p-16">
        <p className="text-cyan-600 text-center text-2xl">
          Modelos - Documentos
        </p>
        <p className="lg:p-4 p-2 text-center lg:text-justify">
          La página web te ofrece diferentes modelos de cartas, de contratos y
          de documentos legales y administrativos para profesionales y para
          particulares. Simplemente completas un formulario y el documento se va
          redactando automáticamente, frente a tus ojos. Luego lo recibís en
          formato Word para poder modificar lo que quieras.
        </p>
        <div className="bg-white p-20">
          <div className="flex items-center">
            <div className="h-7 w-7 rounded-full bg-main"></div>
            <div className="ml-4">
              <p className="text-xl font-semibold">Profesionales</p>
            </div>
          </div>
          <div className="m-4 pl-4 border-l-2 border-gray">
            <div className="m-4 pl-4">
              <div className="flex items-center">
                <div className="h-7 w-7 rounded-full bg-main"></div>
                <div className="ml-4">
                  <p className="text-xl font-semibold">
                    Recursos humanos, derecho laboral
                  </p>
                  <Link href={"/pacto"}>
                    <p className="text-cyan-600 text-xl cursor-pointer">
                      Pacto de No Concurrencia Laboral
                    </p>
                  </Link>
                </div>
              </div>
              <div className="m-4 pl-4 border-l-2 border-gray">
                <div className="flex items-center">
                  <div className="h-7 w-7 rounded-full bg-main"></div>
                  <div className="ml-4">
                    <p className="text-xl font-semibold">
                      Contratos de trabajo
                    </p>
                  </div>
                </div>
                <div className="m-4 pl-4 text-gray-500 border-l-2 border-gray">
                  <p>Contratos de Trabajo Remoto o Teletrabajo</p>
                  <p>Contrato de Trabajo Permanente</p>
                  <p>Contrato de Trabajo a Plazo Fijo</p>
                </div>
              </div>
            </div>
            <div className="m-4 pl-4">
              <div className="flex items-center">
                <div className="h-7 w-7 rounded-full bg-main"></div>
                <div className="ml-4">
                  <p className="text-xl font-semibold">
                    Funcionamiento legales de la empresa
                  </p>
                </div>
              </div>
              <div className="m-4 pl-4 text-gray-500 border-l-2 border-gray">
                <p>Acta de Órgano de Administración de S.A.S. </p>
                <p>Declaración Jurada de Persona Expuesta Políticamente</p>
                <p>Acuerdo de Accionistas</p>
                <p>Fianza</p>
                <p>
                  Intimación a Tratar Renuncia como Directivo de S.A. o S.A.S.
                </p>
                <p> Carta de Liberación de Prenda de Acciones</p>
                <p>Contrato de Prenda de Acciones</p>
                <p>Convenio de Aporte en S.A. o S.A.S.</p>
                <p> Notificación de Transmisión de Cuotas de S.R.L.</p>
                <p>Aviso de Prenda de Acciones de S.A.S.</p>
                <p>Aviso de Transferencia de Acciones de S.A.S.</p>
                <p>Carta de Licencia como Administrador de S.A.S. </p>
                <p>Carta de Asunción como Administrador de S.A.S. </p>
                <p>Carta de Renuncia como Administrador de S.A.S.</p>
                <p>Carta de Licencia como Director de S.A. </p>
                <p>Carta de Asunción como Director de S.A.</p>
                <p>Carta de Renuncia como Director de S.A. </p>
                <p>Carta de Prenda de Acciones de S.A. </p>
                <p>Carta de Transferencia de Acciones de S.A.</p>
                <p>Acta de Directorio de Sociedad Anónima </p>
                <p>Acuerdo de Confidencialidad</p>
                <p>Contrato de Transferencia de Fondo de Comercio </p>
                <p>Notificación de Disolución de Sociedad de Hecho</p>
                <p>Solicitud de Convocatoria de Accionistas de S.A. o S.A.S.</p>
                <p>Acuerdo de Apoderamiento</p>
                <p>Poder General Amplio</p>
              </div>
            </div>
            <div className="m-4 pl-4 ">
              <div className="flex items-center">
                <div className="h-7 w-7 rounded-full bg-main"></div>
                <div className="ml-4">
                  <p className="text-xl font-semibold">Creación de empresa</p>
                </div>
              </div>
              <div className="m-4 pl-4 text-gray-500 border-l-2 border-gray">
                <p>Contrato de Compraventa de Acciones</p>
                <p>Contrato Constitutivo de S.R.L</p>
                <p>Contrato de Sociedad por Acciones Simplificada</p>
                <p>Contrato Constitutivo de Sociedad Anónima</p>
              </div>
            </div>
            <div className="m-4 pl-4 ">
              <div className="flex items-center">
                <div className="h-7 w-7 rounded-full bg-main"></div>
                <div className="ml-4">
                  <p className="text-xl font-semibold">Asuntos Impositivos</p>
                </div>
              </div>
              <div className="m-4 pl-4 text-gray-500 border-l-2 border-gray">
                <p>
                  Declaración Jurada de Beneficiario Final de Persona Jurídica
                </p>
              </div>
            </div>
            <div className="m-4 pl-4 ">
              <div className="flex items-center">
                <div className="h-7 w-7 rounded-full bg-main"></div>
                <div className="ml-4">
                  <p className="text-xl font-semibold">
                    Propiedad intelectual y nuevas Tecnologías
                  </p>
                </div>
              </div>
              <div className="m-4 pl-4 text-gray-500 border-l-2 border-gray">
                <p>Autorización para el uso de imagen</p>
                <p>Política de Privacidad para Sitio Web</p>
                <p>Términos y Condiciones para Sitio Web</p>
              </div>
            </div>
            <div className="m-4 pl-4 ">
              <div className="flex items-center">
                <div className="h-7 w-7 rounded-full bg-main"></div>
                <div className="ml-4">
                  <p className="text-xl font-semibold">Actividad comercial</p>
                </div>
              </div>
              <div className="m-4 pl-4 text-gray-500 border-l-2 border-gray">
                <p>Contrato de Suministro</p>
                <p>Contrato de Agencia</p>
                <p>Modificación de Contrato de Obra o Servicios</p>
                <p>Contrato de Alquiler de Cosas</p>
                <p>Contrato de Compraventa de Cosas</p>
                <p>Notificación de Cesión de Derechos</p>
                <p>Contrato de Cesión de Derechos</p>
                <p>Notificación de Cesión de Cobro de Crédito</p>
                <p>Contrato de Cesión de Cobro de Crédito</p>
                <p>Contrato de Fideicomiso</p>
                <p>Recibo de Pago</p>
                <p>Contrato de Obra o Servicios</p>
                <p>Contrato de Préstamo de Dinero</p>
                <p>Pagaré</p>
              </div>
            </div>
            <div className="m-4 pl-4">
              <div className="flex items-center">
                <div className="h-7 w-7 rounded-full bg-main"></div>
                <div className="ml-4">
                  <p className="text-xl font-semibold">
                    Segmento inmobiliario comercial
                  </p>
                </div>
              </div>
              <div className="m-4 pl-4 text-gray-500 border-l-2 border-gray">
                <p>Contrato de Subalquiler de Inmueble Comercial</p>
                <p>Contrato de Alquiler de Local según Nueva Ley</p>
                <p>Contrato de Alquiler de Oficina según Nueva Ley</p>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="h-7 w-7 rounded-full bg-main"></div>
            <div className="ml-4">
              <p className="text-xl font-semibold">Particulares</p>
            </div>
          </div>
          <div className="m-4 pl-4 border-l-2 border-gray">
            <div className="m-4 pl-4">
              <div className="flex items-center">
                <div className="h-7 w-7 rounded-full bg-main"></div>
                <div className="ml-4">
                  <p className="text-xl font-semibold">Trabajo</p>
                </div>
              </div>
              <div className="m-4 pl-4 text-gray-500 border-l-2 border-gray">
                <p>
                  Comunicación de Inasistencia al Trabajo por
                  Covid-19/Coronavirus
                </p>
                <p>Carta de Cesación del Descuento Sindical</p>
                <p>Solicitud de Desafiliación Sindical</p>
                <div className="m-4 pl-4">
                  <div className="flex items-center">
                    <div className="h-7 w-7 rounded-full bg-main"></div>
                    <div className="ml-4">
                      <p className="text-xl font-semibold text-black">
                        Solicitud de vacaciones
                      </p>
                    </div>
                  </div>
                  <div className="m-4 pl-4 text-gray-500 border-l-2 border-gray">
                    <p>
                      Comunicación de Inasistencia al Trabajo por
                      Covid-19/Coronavirus
                    </p>
                  </div>
                </div>
                <div className="m-4 pl-4">
                  <div className="flex items-center">
                    <div className="h-7 w-7 rounded-full bg-main"></div>
                    <div className="ml-4">
                      <p className="text-xl font-semibold text-black">
                        Tercera edad, medicina, salud
                      </p>
                    </div>
                  </div>
                  <div className="m-4 pl-4 text-gray-500 border-l-2 border-gray">
                    <p>Notificación de Cancelación de Cobertura Médica</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-4 pl-4">
              <div className="flex items-center">
                <div className="h-7 w-7 rounded-full bg-main"></div>
                <div className="ml-4">
                  <p className="text-xl font-semibold">
                    Alojamiento y propiedades
                  </p>
                </div>
              </div>
              <div className="m-4 pl-4 text-gray-500 border-l-2 border-gray">
                <p>Contrato de Locación de Cochera</p>
                <p>
                  Notificación de Terminación de Contrato de Alquiler Continuado
                </p>
                <p>
                  Notificación de Terminación con Causa de Contrato de
                  Subalquiler
                </p>
                <p>Intimación de Pago de Subalquiler Vencido</p>
                <p>
                  Notificación de Terminación con Causa de Contrato de Alquiler
                </p>
                <p>Notificación de Rechazo de Sublocación de Inmueble</p>
                <p>
                  Contrato de Alquiler Temporario de Vivienda Turística Amoblada
                </p>
                <p>Contrato de Subalquiler de Inmueble Residencial</p>
                <p>Hipoteca Inmobiliaria</p>
                <p>Notificación de Terminación de Boleto de Compraventa</p>
                <p>Modificación de Contrato de Alquiler</p>
                <p>Recibo de Inmueble Alquilado</p>
                <p>Intimación de Pago de Alquiler Vencido</p>
                <p>
                  Notificación de Resolución Anticipada de Contrato de Alquiler
                  de Inmueble
                </p>
                <p>Notificación de Sublocación de Inmueble</p>
                <p>Contrato de Alquiler de Vivienda según Nueva Ley</p>
                <p>Carta Oferta de Compra de Inmueble</p>

                <div className="m-4 pl-4">
                  <div className="flex items-center">
                    <div className="h-7 w-7 rounded-full bg-main"></div>
                    <div className="ml-4">
                      <p className="text-xl font-semibold text-black">
                        Reformas y trabajos inmobiliarios
                      </p>
                    </div>
                  </div>
                  <div className="m-4 pl-4 text-gray-500 border-l-2 border-gray">
                    <p>Solicitud de Autorización de Reformas en Departamento</p>
                  </div>
                </div>
                <div className="m-4 pl-4">
                  <div className="flex items-center">
                    <div className="h-7 w-7 rounded-full bg-main"></div>
                    <div className="ml-4">
                      <p className="text-xl font-semibold text-black">
                        Condominio
                      </p>
                    </div>
                  </div>
                  <div className="m-4 pl-4 text-gray-500 border-l-2 border-gray">
                    <p>Notificación de Cambio de Domicilio Consorcial</p>
                    <p>
                      Solicitud de Convocatoria de Asamblea de Consorcio de
                      Propiedad Horizontal
                    </p>
                    <p>Reglamento de Propiedad Horizontal</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-4 pl-4">
              <div className="flex items-center">
                <div className="h-7 w-7 rounded-full bg-main"></div>
                <div className="ml-4">
                  <p className="text-xl font-semibold">
                    Vida familiar, matrimonio, divorcio
                  </p>
                </div>
              </div>
              <div className="m-4 pl-4 text-gray-500 border-l-2 border-gray">
                <p>Pacto de Convivencia en Pareja Estable</p>
                <p>Convenio de División de Herencia</p>
                <p>Notificación de Prestación de Alimentos</p>
                <p>Notificación de Terminación de Unión Convivencial</p>
                <p>Convenio de Alimentos</p>
                <p>Convenio de Responsabilidad Parental</p>
              </div>
            </div>
            <div className="m-4 pl-4">
              <div className="flex items-center">
                <div className="h-7 w-7 rounded-full bg-main"></div>
                <div className="ml-4">
                  <p className="text-xl font-semibold">Vida diaria</p>
                </div>
              </div>
              <div className="m-4 pl-4 text-gray-500 border-l-2 border-gray">
                <p>
                  Intimación a Devolver Una Cosa Prestada Contrato de Donación
                </p>
                <p>
                  Contrato de Intercambio de Cosas Contrato de Préstamo de Cosas
                </p>
                <p>
                  Boleto de Compraventa Inmobiliaria Solicitud para el ejercicio
                </p>
                <p>de derechos sobre Datos Personales</p>
              </div>
            </div>
            <div className="m-4 pl-4">
              <div className="flex items-center">
                <div className="h-7 w-7 rounded-full bg-main"></div>
                <div className="ml-4">
                  <p className="text-xl font-semibold">
                    Gestiones administrativas
                  </p>
                </div>
              </div>
              <div className="m-4 pl-4 text-gray-500 border-l-2 border-gray">
                <p>Carta a la Defensoría del Pueblo de la Nación</p>
                <p>Solicitud de Acceso a la Información Pública</p>
                <p>Solicitud de Vista de Expediente Administrativo</p>
              </div>
            </div>
            <div className="m-4 pl-4">
              <div className="flex items-center">
                <div className="h-7 w-7 rounded-full bg-main"></div>
                <div className="ml-4">
                  <p className="text-xl font-semibold">
                    Procedimientos legales
                  </p>
                </div>
              </div>
              <div className="m-4 pl-4 text-gray-500 border-l-2 border-gray">
                <p>Intimación para el Cese de Injurias y Calumnias</p>
                <p>Descargo por Infracción de Tránsito</p>
              </div>
            </div>
            <div className="m-4 pl-4">
              <div className="flex items-center">
                <div className="h-7 w-7 rounded-full bg-main"></div>
                <div className="ml-4">
                  <p className="text-xl font-semibold">Consumo</p>
                </div>
              </div>
              <div className="m-4 pl-4 text-gray-500 border-l-2 border-gray">
                <p>Carta de Rechazo de Resumen de Tarjeta de Crédito</p>
                <p>Carta de Cancelación de Contrato de Consumo</p>
                <p>Solicitud de Cancelación de Débito Automático</p>
              </div>
            </div>
            <div className="m-4 pl-4">
              <div className="flex items-center">
                <div className="h-7 w-7 rounded-full bg-main"></div>
                <div className="ml-4">
                  <p className="text-xl font-semibold">Asociaciones</p>
                </div>
              </div>
              <div className="m-4 pl-4 text-gray-500 border-l-2 border-gray">
                <p>Acuerdo de Voluntariado Social</p>
                <p>Solicitud de Convocatoria de Asamblea de Asociación Civil</p>
                <p>Acta Constitutiva de Asociación Civil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

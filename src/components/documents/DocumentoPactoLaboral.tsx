import { Contrato } from "@/components/pages/contrato";
import Image from "next/image";
import React from "react";

type DocumentsPactoLaboralProps = {
  contratoInfo: Contrato;
};

export default function DocumentsPactoLaboral({
  contratoInfo,
}: DocumentsPactoLaboralProps) {
  return (
    <div>
      <div className="p-12 text-xl text-justify">
        <span className="font-semibold">
          CONTRATO DE PACTO DE NO CONCURRENCIA LABORAL
        </span>
        <br />
        En <b>{contratoInfo.ciudad || "[Ciudad]"}</b>, a{" "}
        <b>{contratoInfo.fechaDeCargo || "[Fecha]"}</b>, entre:
        <br />
        <br /> <b>{contratoInfo.nombreEmpresa || "[Nombre de la Empresa]"}</b>,
        con domicilio en{" "}
        <b>{contratoInfo.direccionEmpresa || "[Dirección de la Empresa]"}</b>,{" "}
        representada en este acto por{" "}
        <b>{contratoInfo.nombre || " [nombre y "}</b>{" "}
        <b>{contratoInfo.cargo || "cargo del representante legal]"}</b>, en
        adelante la Empresa, por una parte; <br />
        <br /> <b>
          {contratoInfo.nombreEmpleado || "[Nombre del empleado]"}
        </b>{" "}
        con documento de identidad número{" "}
        <b>{contratoInfo.numeroDni || " [número de DNI "}</b>{" "}
        <b>{contratoInfo.nacionalidad || " y Nacionalidad]"}</b>, domiciliado en{" "}
        <b>{contratoInfo.direccion || " [dirección]"}</b>, en adelante el
        Empleado, por la otra parte; Ambas partes en adelante referidas
        individualmente como la Parte o conjuntamente como las Partes, convienen
        en celebrar el presente Contrato de Pacto de No Concurrencia Laboral,
        sujeto a las siguientes cláusulas y condiciones:
        <br />
        <br />
        <b>1.</b> Objeto del pacto: El presente contrato tiene como objetivo
        establecer las condiciones y obligaciones del Empleado respecto a la no
        concurrencia laboral, a fin de proteger los intereses legítimos y
        comerciales de la Empresa.
        <br />
        <b>2.</b> Duración del pacto: El pacto de no concurrencia laboral
        entrará en vigor a partir de la fecha de firma y tendrá una duración de{" "}
        <b>{contratoInfo.duracionPacto || "[duración en meses/años]"}</b> a
        contar desde la fecha de terminación de la relación laboral entre el
        Empleado y la Empresa.
        <br />
        <b>3.</b> Obligaciones del Empleado: a. Durante el período de duración
        del pacto, el Empleado se compromete a no participar directa o
        indirectamente en ninguna actividad que compita con los intereses
        comerciales de la Empresa. b. El Empleado se compromete a no trabajar
        para, asesorar, ser socio o tener algún tipo de vínculo laboral o
        comercial con cualquier empresa, entidad o persona física que compita
        directa o indirectamente con la Empresa, en el mismo rubro o área de
        actividad. c. El Empleado se compromete a mantener la más estricta
        confidencialidad respecto a la información, conocimientos técnicos,
        secretos comerciales y cualquier otro dato relevante que haya adquirido
        durante su relación laboral con la Empresa. d. El Empleado se compromete
        a no solicitar ni aceptar, directa o indirectamente, la contratación de
        clientes, proveedores o empleados de la Empresa, ni interferir de
        cualquier manera en las relaciones comerciales de la Empresa.
        <br />
        <b>4.</b> Contraprestación económica: Como contraprestación por el pacto
        de no concurrencia laboral, la Empresa se compromete a abonar al
        Empleado una compensación económica mensual de{" "}
        <b>
          {contratoInfo.monto || "[monto]"}{" "}
          {contratoInfo.tipoMonto || "[tipoMonto]"}
        </b>{" "}
        durante el período de duración del pacto. El pago se realizará{" "}
        <b> {contratoInfo.metodoPago || "[métodos pago "} </b>
        <b> {contratoInfo.fechaPago || "y fecha de pago]"}</b>. En caso de
        incumplimiento por parte de la Empresa en el pago de dicha compensación,
        el Empleado quedará liberado de sus obligaciones establecidas en este
        contrato.
        <br />
        <b>5.</b> Cláusula penal: En caso de incumplimiento total o parcial de
        cualquiera de las obligaciones establecidas en el presente contrato, el
        Empleado se obliga a pagar a la Empresa una suma equivalente a{" "}
        <b>
          {contratoInfo.numMonto && contratoInfo.denoMonto
            ? `${contratoInfo.numMonto} ${contratoInfo.denoMonto}`
            : "[monto o porcentaje]"}
        </b>{" "}
        <b>{contratoInfo.porcentMonto ? contratoInfo.porcentMonto : null}</b> de
        la última remuneración mensual percibida por el Empleado. Esta cláusula
        no exime a la Empresa del derecho a reclamar daños y perjuicios
        adicionales. <br />
        <b>6.</b> Confidencialidad: El Empleado se compromete a mantener la más
        estricta confidencialidad respecto a cualquier información confidencial
        o privilegiada de la Empresa a la que haya tenido acceso durante su
        relación laboral. Esta obligación de confidencialidad se mantendrá
        incluso después de la terminación de la relación laboral. El Empleado se
        compromete a no divulgar, revelar o utilizar dicha información para su
        propio beneficio o para perjudicar los intereses de la Empresa.
        <br />
        <b>7.</b> Ley aplicable y jurisdicción: El presente contrato se regirá e
        interpretará de acuerdo con las leyes de la República Argentina. Para
        cualquier controversia derivada del presente contrato, las Partes se
        someten a la jurisdicción de los tribunales competentes de{" "}
        <b>{contratoInfo.ciudadJurisciccion || "[ciudad]"}</b>. lugarConformidad
        <br />
        <b>8.</b> Las cláusulas anteriores constituyen el acuerdo completo entre
        las Partes y reemplazan cualquier otro acuerdo o entendimiento anterior
        relacionado con el pacto de no concurrencia laboral. <br />
        <br />
        Las Partes manifiestan su conformidad con el contenido de este contrato
        al suscribirlo en <b>{contratoInfo.lugarConformidad || "[lugar]"}</b> en
        la fecha antes mencionada.
        <br />
        <br />
        <b>
          {contratoInfo.nombreEmpresa || "[Nombre de la Empresa]"}{" "}
          {contratoInfo.nombreEmpleado || "[Nombre del empleado]"}
        </b>{" "}
        Representante Legal Empleado <br />
        <br />
        <div className="flex">
          {contratoInfo.firmaUno && (
            <Image
              src={contratoInfo.firmaUno}
              alt="firmaUno"
              width={300}
              height={150}
            />
          )}
          {contratoInfo.firmaDos && (
            <Image
              src={contratoInfo.firmaDos}
              alt="firmaDos"
              width={300}
              height={150}
            />
          )}
        </div>
        <div className="flex justify-between p-14">
          <p>{contratoInfo.nombreEmpleado || "[Nombre del empleado]"}</p>
          <p>{contratoInfo.nombreEmpresa || "[Nombre de la Empresa]"}</p>
        </div>
      </div>
    </div>
  );
}

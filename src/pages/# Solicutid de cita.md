# Solicutid de cita

- Se hace una petición al backend con el mes seleccionado tipo

```json
{
  "month": 1
}
```

- El backend chequea todos los días del mes y se trae la propiedad is_full que es false si el numero de citas para ese día es menor al numero de horarios ej:

```sql
SELECT
    IF(COUNT(id) >= 5, 1, 0) AS is_full,
    appointment_date
FROM
    appointments
GROUP BY
    appointment_date
```

Respuesta:

```json
[
  {
    "date": "2023-08-24",
    "isFull": true
  },
  {
    "date": "2023-08-25",
    "isFull": false
  }
]
```

```json
[""]
```

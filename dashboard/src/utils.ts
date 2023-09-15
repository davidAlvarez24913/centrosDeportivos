export const changeLanguageDay = (day: string) => {
  let dia = "";

  if ("Sunday" === day) dia = "Domingo";
  if ("Monday" === day) dia = "Lunes";
  if ("Tuesday" === day) dia = "Martes";
  if ("Wednesday" === day) dia = "Miercoles";
  if ("Thursday" === day) dia = "Jueves";
  if ("Friday" === day) dia = "Viernes";
  if ("Saturday" === day) dia = "Sabado";
  return dia;
};

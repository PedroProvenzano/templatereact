import LocalizedStrings from "react-localization";

let strings = new LocalizedStrings({
  es: {
    ttle: "Casa del té",
    menu: {
      prof: "Perfil",
      lgout: "Cerrar sesión",
    },
    frm: {
      inpt: {
        pass: "Contraseña",
        usr: "Usuario",
      },
      msg: {
        lgn: "Iniciar sesión",
      },
      err: {
        min: "Requiere minimo 4 caracteres",
        req: "Campo requerido",
      },
    },
    btn: {
      load: "Cargando..",
      lgn: "Ingresar",
    },
  },
});

export default strings;

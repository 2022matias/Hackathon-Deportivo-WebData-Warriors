import React from "react";

function Info() {
  return (
    <section className="info">
      <div className="divider"></div>
      <h2 className="info__title">
        <span className="info__title_color">En WebData Warrios,</span>{" "}
        analizamos los datos históricos de partidos proporcionados por la FIFA.
        <br />
        ¡Únete a nosotros para descubrir el poder de los datos en el deporte!
      </h2>
      <p className="info__paragraph">
        En la actualidad, el fútbol es más que un deporte; refleja cultura,
        pasión y es clave para análisis detallado.
        <br />
        Usando tecnología y datos, exploramos los enfoques analíticos, revelando
        patrones en enfrentamientos entre selecciones desde 1993.
        <br />
        Nuestra base no solo muestra resultados, también datos contextuales que
        revelan dinámicas entre equipos y torneos, desvelando claves del éxito
        en el fútbol internacional.
      </p>
      <div className="divider"></div>
    </section>
  );
}

export default Info;
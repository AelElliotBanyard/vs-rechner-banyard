const HausratMain = () => {
  return (
    <>
      <main className="main">
        <div className="hausrat">
          <div className="section">
            <h1>Hausratversicherung</h1>
            <div className="explain">
              <h2>Was ist eine Hausratversicherung?</h2>
              <p>
                Eine Hausratversicherung{" "}
                <b>versichert Schäden an Ihrem Hausrat</b>, die durch Feuer,
                Diebstahl, Wasser oder Elementarereignisse entstanden sind. Als
                Hausrat gelten <b>bewegliche Sachen</b> in der Wohnung oder im
                Haus – inkl. Keller, Garage, Estrich, Garten oder Balkon.
              </p>
              <p>Folgende Gegenstände sind im Normalfall versichert:</p>
              <ul>
                <li>Möbel</li>
                <li>Elektrogeräte</li>
                <li>Kleidung</li>
                <li>Schmuck, Uhren und andere Wertsachen</li>
                <li>Vorhänge, Vasen, Teppiche</li>
                <li>Sportartikel wie Velos und Ski</li>
                <li>weitere Einrichtungsgegenstände</li>
              </ul>
            </div>
            <div className="pay">
              <div className="does">
                <h2>Welche Schäden zahlt die Hausratversicherung?</h2>
                <p>
                  Abgedeckt sind Schäden am Hausrat durch{" "}
                  <b>
                    Feuer, Wasser, Elementarereignisse wie etwa Sturmtiefs und
                    Einbruchdiebstahl.
                  </b>{" "}
                  Zusätzlich können Sie{" "}
                  <b>
                    Glasbruchschäden oder den einfachen Diebstahl ausserhalb der
                    Wohnung
                  </b>{" "}
                  versichern. Auch <b>anderweitige Kosten und Umtriebe</b> als
                  Folge eines Schadensfalls sind mitversichert. Dazu zählen etwa
                  Kosten für den Ersatz der Schlösser, Hotelübernachtungen oder
                  Aufräum-, Reinigungs- und Entsorgungsarbeiten.
                </p>
              </div>
              <div className="doesnt">
                <h2>Welche Schäden zahlt die Hausratversicherung nicht?</h2>
                <p>
                  Grundsätzlich gilt: Die{" "}
                  <b>Deckung der Hausratversicherung variiert</b> je nach
                  Police. Prüfen Sie deshalb die Ausschlüsse in den Allgemeinen
                  Versicherungsbedingungen. In den meisten Fällen sind
                  Ereignisse im Zusammenhang mit Krieg, inneren Unruhen und
                  Atomkraft von der Versicherung ausgeschlossen. Auch Schäden,
                  die Sie mit Absicht herbeiführen, sind von der
                  Hausratversicherung nicht gedeckt. Für Schäden am Eigentum von
                  Dritten brauchen Sie eine <b>Privathaftpflichtversicherung</b>
                  .
                </p>
              </div>
              <div className="you">
                <h2>Was muss ich selbst zahlen?</h2>
                <p>
                  Bei der Hausratversicherung reicht die Spanne des
                  Selbstbehalts üblicherweise <b>von 200 bis 500 Franken</b>.
                  Der Selbstbehalt wird von der Schadenssumme abgezogen. Ihn
                  müssen Sie selbst bezahlen. Tipp: Achten Sie darauf, dass Sie
                  den Selbstbehalt und die Deckungen an Ihre aktuellen
                  Lebensumstände anpassen. So stellen Sie sicher, dass Sie nicht
                  zu viel bezahlen oder unterversichert sind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HausratMain;

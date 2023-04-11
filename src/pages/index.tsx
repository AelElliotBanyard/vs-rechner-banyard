export default function Home() {
  return (
    <>
      <main className="main">
        <div className="welcome">
          <div className="section">
            <h1>Wilkommen!</h1>
            <p>
              Dies ist der Versicherungsrechner erstellt von{" "}
              <a href="https://github.com/AelElliotBanyard" target="_blank">
                Ael Banyard
              </a>
              .
            </p>
            <p>
              Er ist noch in der Entwicklung, aber Sie können schon jetzt
              berechnen was ihre Hausratsversicherung im Falle von einem Schaden
              auszahlen.
            </p>
            <p>
              Diese Web-App wurde erstellt im Rahmen eines Pilot Projekts an der
              <a href="https://www.bbw.ch/" target="_blank">
                BBW
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

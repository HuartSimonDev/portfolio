function MainPage() {
    const birthdate = new Date("2000-09-07");
    const interval = new Date().getTime() - birthdate.getTime();
    const myAge = new Date(interval).getFullYear() - 1970;

    return (
        <div className="p-10">
            <h1>Huart Simon</h1>
            <h2>Développeur Web</h2>
            <p className="pt-10">
                Salut ! Moi c’est Simon, j’ai {myAge} ans et je suis passionné
                par la programmation. Je viens tout juste d’être diplômé en
                Développement d’Applications à la Haute École Henallux IESN, et
                je suis prêt à débuter ma carrière de développeur. Je suis
                passionné par les jeux vidéo et j’aime réaliser différents
                projets personnels, qu’il s’agisse d’applications web, mobiles
                ou même de jeux vidéo sur Unity. Mon objectif est de travailler
                sur des projets concrets aux côtés de personnes expérimentées
                afin d’apprendre et de progresser davantage.
            </p>
        </div>
    );
}

export default MainPage;

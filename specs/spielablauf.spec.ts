describe('Spielablauf Go Fish', () => {

    it ('52 Spielkartten vorbereiten', () => {
        const spielkartenFactory = new spielkartenFactory();
        const karten : Karte[] = spielkartenFactory.erzeugen();

        expect(karten.length).toBe(52);
    });
})
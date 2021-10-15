import SpielkartenFactory from "../src/factories/SpielkartenFactory";
import Karte from "../src/factories/SpielkartenFactory";

describe('Spielablauf Go Fish', () => {

    it ('52 Spielkartten vorbereiten', () => {
        const spielkartenFactory = new SpielkartenFactory();

        const karten : Karte[] = spielkartenFactory.erzeugen();

        expect(karten.length).toBe(52);
    });
})
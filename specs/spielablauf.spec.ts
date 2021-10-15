import SpielkartenFactory from "../src/factories/SpielkartenFactory";
import Karte from "../src/value-types/Karte";

describe('Spielablauf Go Fish', () => {

    it ('52 Spielkarten vorbereiten', () => {
        const spielkartenFactory = new SpielkartenFactory();

        const karten : Karte[] = spielkartenFactory.erzeugen();

        expect(karten.length).toBe(52);
    });
})
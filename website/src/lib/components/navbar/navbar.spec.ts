import { describe, expect, it, beforeEach } from 'vitest';
import Navbar from "./navbar.svelte";

describe("Navbar", () => {
    let instance: Navbar;

    beforeEach(() => {
        const host = document.createElement('div');
        document.body.append(host);
        instance = new Navbar({ target: host });
    });

    it("Should create", () => {
        expect(instance).toBeTruthy();
    });

    it("Sample test", () => {
        expect(1 + 3).equal(4);
    });
})
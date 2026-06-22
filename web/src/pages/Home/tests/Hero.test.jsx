// @vitest-environment jsdom

import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import {render,screen} from '@testing-library/react';
import Hero from '../_components/Hero.jsx';

describe("Finds the Hero component",()=>{
    test("Checks if image is loaded",()=>{
        render(<Hero/>);
        const heroImg = screen.getByAltText("Home Hero");
        expect(heroImg).toBeInTheDocument();
    });

    test("Checks if the CTA button is loaded",()=>{
        render(<Hero/>);
        const heroBtn = screen.getAllByTestId("hero-primary-cta")[0];
        expect(heroBtn).toBeInTheDocument();
    });
});
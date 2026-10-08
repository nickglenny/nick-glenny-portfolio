import { createElement, useEffect, useRef, } from "react";
import { drawablyArrow, drawablyBadge, drawablyButton, drawablyCard, drawablyCheckbox, drawablyCircle, drawablyDivider, drawablyHighlight, drawablyInput, drawablyList, drawablyRadio, drawablySelect, drawablyTextarea, drawablyToggle, drawablyUnderline, } from "./controls.js";
function useSketch(attach, deps) {
    const ref = useRef(null);
    useEffect(() => {
        if (!ref.current)
            return;
        const sketch = attach(ref.current);
        return () => sketch.destroy();
    }, deps);
    return ref;
}
export function DrawablyButton({ seed, roughness, boil, stroke, fill, paper, width, variant, state, tone, className, children, ...rest }) {
    const sketchRef = useRef(null);
    const ref = useSketch((el) => (sketchRef.current = drawablyButton(el, { seed, roughness, boil, stroke, fill, paper, width, variant, state, tone })), [seed, roughness, boil, stroke, fill, paper, width, variant, tone, className]);
    useEffect(() => {
        sketchRef.current?.setState(state ?? "idle");
    }, [state]);
    return createElement("button", { type: "button", ...rest, className, ref }, children);
}
export function DrawablyCheckbox({ seed, roughness, boil, stroke, fill, paper, width, className, ...rest }) {
    const ref = useSketch((el) => drawablyCheckbox(el, { seed, roughness, boil, stroke, fill, paper, width }), [seed, roughness, boil, stroke, fill, paper, width, className]);
    return createElement("span", { className, ref }, createElement("input", { ...rest, type: "checkbox" }));
}
export function DrawablyInput({ seed, roughness, boil, stroke, fill, paper, width, className, ...rest }) {
    const ref = useSketch((el) => drawablyInput(el, { seed, roughness, boil, stroke, fill, paper, width }), [seed, roughness, boil, stroke, fill, paper, width, className]);
    return createElement("span", { className, ref }, createElement("input", rest));
}
export function DrawablyRadio({ seed, roughness, boil, stroke, fill, paper, width, className, ...rest }) {
    const ref = useSketch((el) => drawablyRadio(el, { seed, roughness, boil, stroke, fill, paper, width }), [seed, roughness, boil, stroke, fill, paper, width, className]);
    return createElement("span", { className, ref }, createElement("input", { ...rest, type: "radio" }));
}
export function DrawablyToggle({ seed, roughness, boil, stroke, fill, paper, width, className, ...rest }) {
    const ref = useSketch((el) => drawablyToggle(el, { seed, roughness, boil, stroke, fill, paper, width }), [seed, roughness, boil, stroke, fill, paper, width, className]);
    return createElement("span", { className, ref }, createElement("input", { ...rest, type: "checkbox", role: "switch" }));
}
export function DrawablyDivider({ seed, roughness, boil, stroke, fill, paper, width, className, ...rest }) {
    const ref = useSketch((el) => drawablyDivider(el, { seed, roughness, boil, stroke, fill, paper, width }), [seed, roughness, boil, stroke, fill, paper, width, className]);
    return createElement("hr", { ...rest, className, ref });
}
export function DrawablyCard({ seed, roughness, boil, stroke, fill, paper, width, className, children, ...rest }) {
    const ref = useSketch((el) => drawablyCard(el, { seed, roughness, boil, stroke, fill, paper, width }), [seed, roughness, boil, stroke, fill, paper, width, className]);
    return createElement("div", { ...rest, className, ref }, children);
}
function decoration(attach) {
    return function Decoration({ seed, roughness, boil, stroke, fill, paper, width, className, children, ...rest }) {
        const ref = useSketch((el) => attach(el, { seed, roughness, boil, stroke, fill, paper, width }), [seed, roughness, boil, stroke, fill, paper, width, className]);
        return createElement("span", { ...rest, className, ref }, children);
    };
}
export const DrawablyUnderline = decoration(drawablyUnderline);
export const DrawablyHighlight = decoration(drawablyHighlight);
export const DrawablyCircle = decoration(drawablyCircle);
export function DrawablyArrow({ from, to, seed, roughness, boil, stroke, fill, paper, width }) {
    useEffect(() => {
        if (!from.current || !to.current)
            return;
        const sketch = drawablyArrow(from.current, to.current, { seed, roughness, boil, stroke, fill, paper, width });
        return () => sketch.destroy();
    }, [from, to, seed, roughness, boil, stroke, fill, paper, width]);
    return null;
}
export function DrawablyTextarea({ seed, roughness, boil, stroke, fill, paper, width, className, ...rest }) {
    const ref = useSketch((el) => drawablyTextarea(el, { seed, roughness, boil, stroke, fill, paper, width }), [seed, roughness, boil, stroke, fill, paper, width, className]);
    return createElement("span", { className, ref }, createElement("textarea", rest));
}
export function DrawablySelect({ seed, roughness, boil, stroke, fill, paper, width, className, children, ...rest }) {
    const ref = useSketch((el) => drawablySelect(el, { seed, roughness, boil, stroke, fill, paper, width }), [seed, roughness, boil, stroke, fill, paper, width, className]);
    return createElement("span", { className, ref }, createElement("select", rest, children));
}
export function DrawablyBadge({ seed, roughness, boil, stroke, fill, paper, width, variant, className, children, ...rest }) {
    const ref = useSketch((el) => drawablyBadge(el, { seed, roughness, boil, stroke, fill, paper, width, variant }), [seed, roughness, boil, stroke, fill, paper, width, variant, className]);
    return createElement("span", { ...rest, className, ref }, children);
}
export function DrawablyList({ seed, roughness, boil, stroke, fill, paper, width, marker, className, children, ...rest }) {
    const ref = useSketch((el) => drawablyList(el, { seed, roughness, boil, stroke, fill, paper, width, marker }), [seed, roughness, boil, stroke, fill, paper, width, marker, className]);
    return createElement("ul", { ...rest, className, ref }, children);
}

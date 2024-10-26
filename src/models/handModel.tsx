// src/models/handModel.ts
const handsModel = {
  A: new URL('../assets/hands/hand_L.svg', import.meta.url).href,
  B: new URL('../assets/hands/hand_Rock.svg', import.meta.url).href,
  C: new URL('../assets/hands/hand_Meio.svg', import.meta.url).href,
  D: new URL('../assets/hands/hand_Cha.svg', import.meta.url).href,
  E: new URL('../assets/hands/hand_Paz.svg', import.meta.url).href,
};

// Define a type for the keys of the handsModel
export type HandKeys = keyof typeof handsModel;

export default handsModel;
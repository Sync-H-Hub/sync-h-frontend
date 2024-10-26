// src/models/handModel.ts
const handsModel = {
  hand_L: 'path/to/hand_L_image.png',
  hand_Rock: 'path/to/hand_Rock_image.png',
  hand_Paz: 'path/to/hand_Paz_image.png',
  hand_Cha: 'path/to/hand_Cha_image.png',
};

// Define a type for the keys of the handsModel
export type HandKeys = keyof typeof handsModel;

export default handsModel;

// http://www.w3.org/TR/AERT#color-contrast
export const obterCorContraste = (hexColor: string): "black" | "#f0f0f0" => {
  const rgbArray = hexColorToRGB(hexColor);
  const o = Math.round(
    (rgbArray[0] * 299 + rgbArray[1] * 587 + rgbArray[2] * 114) / 1000
  );
  const cor = o > 125 ? "black" : "#f0f0f0";
  return cor;
};

export const obterCorMaisEscura = (hexColor: string) => {
  const rgbArray = hexColorToRGB(hexColor);

  const newRgb = rgbArray.map((value) => {
    return value - 75 <= 0 ? 0 : value - 50;
  });

  return RGBToHexColor(newRgb);
};

const RGBToHexColor = (rgbArray: number[]) => {
  const hex = rgbArray
    .map((value) => {
      return numberToHexadecimal(value);
    })
    .reduce((prevValue, newValue) => {
      return prevValue + newValue;
    });

  return `#${hex}`;
};

const hexColorToRGB = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : [];
};

const numberToHexadecimal = function (rgb: number) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
};

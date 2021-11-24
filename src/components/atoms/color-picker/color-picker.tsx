import { FC, useState } from 'react';
import {
  ChromePicker,
  CirclePicker,
  ColorResult,
  CompactPicker,
} from 'react-color';

export type ColorPickerProps = {
  onChange?: (color: ColorResult) => void;
};

export const ColorPicker: FC<ColorPickerProps> = ({ onChange }) => {
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>('#CE09FF');

  const handleChange = (color: ColorResult) => {
    setSelectedColor(color.hex);

    if (onChange) {
      onChange(color);
    }
  };

  const handleChangeIsPickerVisible = () => {
    setIsPickerVisible((prevState) => !prevState);
  };

  return (
    <div className="color-picker">
      <span className="color-picker__title">
        Color: {selectedColor.toUpperCase()}
      </span>
      <button
        type="button"
        className="color-picker__trigger"
        onClick={handleChangeIsPickerVisible}
        aria-label="Open color picker"
        style={{ backgroundColor: selectedColor }}
      />
      {isPickerVisible && (
        <div className="color-picker__wrapper">
          <ChromePicker color={selectedColor} onChangeComplete={handleChange} />
        </div>
      )}
    </div>
  );
};

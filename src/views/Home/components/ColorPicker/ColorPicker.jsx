import { TextField } from "@shopify/polaris";
import { useState, useCallback } from "react";
import { SketchPicker } from "react-color";
import "./ColorPicker.scss";
function ColorPicker(props) {
  const [isShowBoxColor, setIsShowBoxColor] = useState(false);
  const handleChange = useCallback((newValue) => {
    props.onChange(newValue);
  }, []);
  const handleChangeColor = (color) => {
    props.onChange(color.hex);
    setIsShowBoxColor(false);
  };
  const colorBox = () => {
    return { backgroundColor: props.value };
  };
  return (
    <div className="color-wrapper relative">
      <TextField
        label="Store name"
        value={props.value}
        onChange={handleChange}
        autoComplete="off"
      />
      <div
        className="box-color"
        onClick={() => setIsShowBoxColor(!isShowBoxColor)}
        style={colorBox()}
      ></div>
      {isShowBoxColor ? (
        <SketchPicker
          className="ml-7"
          color={props.value}
          onChange={handleChangeColor}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default ColorPicker;

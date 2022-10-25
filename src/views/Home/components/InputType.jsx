import { Checkbox, Select, TextField } from "@shopify/polaris";
import ColorPicker from "./ColorPicker/ColorPicker";
import CodeEditor from "@uiw/react-textarea-code-editor";
function InputType(props) {
  return (
    <div className="wrapper-input">
      {props.type === "select" ? (
        <Select
          label={props.text}
          options={props.options}
          onChange={props.onChange}
          value={props.value}
        />
      ) : (
        <></>
      )}
      {props.type === "colorPicker" ? (
        <ColorPicker
          value={props.value}
          onChange={props.onChange}
        ></ColorPicker>
      ) : (
        <></>
      )}
      {props.isHaveCheckbox ? (
        <Checkbox
          label={props.checkbox.text}
          onChange={props.onChangeSubCheckbox}
          checked={props.checkbox.value}
        />
      ) : (
        <></>
      )}
      {props.type === "textField" ? (
        <TextField
          label={props.text}
          value={props.value}
          onChange={props.onChange}
          autoComplete="off"
          placeholder={props.placeholder}
        />
      ) : (
        <></>
      )}
      {props.type === "codeEditor" ? (
        <div>
          {props.text}
          <CodeEditor
            value={props.value}
            language="css"
            placeholder={props.placeholder}
            onChange={(e) => props.onChange(e.target.value)}
            padding={15}
            style={{
              fontSize: 12,
              backgroundColor: "#f5f5f5",
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            }}
          />
        </div>
      ) : (
        <></>
      )}
      {props.isInvalid ? (
        <div className="absolute text-red-600">Invalid value!</div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default InputType;

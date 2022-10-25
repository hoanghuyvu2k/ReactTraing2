import {
  ReplaceMajor,
  PaintBrushMajor,
  TextMajor,
} from "@shopify/polaris-icons";
export const tabs = [
  {
    id: "delivery",
    content: "Delivery Date",
  },
  {
    id: "store",
    content: "Store Pickup",
  },
];
export const listSchema = [
  {
    type: "position",
    text: "Widget Position",
    icon: ReplaceMajor,
    contents: [
      { key: "1", text: "Show the calendar at product page", value: false },
      {
        key: "2",
        text: "Require the delivery date before checkout ",
        value: false,
      },
    ],
  },
  {
    type: "apprearance",
    text: "Widget apprearance",
    icon: PaintBrushMajor,
    contents: [
      {
        type: "select",
        text: "Layout",
        key: "layout",
        value: "default",
        options: [
          { label: "Default", value: "default" },
          { label: "Special", value: "special" },
          { label: "Last 7 days", value: "lastWeek" },
          { label: "Last 7 days1", value: "lastWeek1" },
        ],
      },
      {
        type: "select",
        text: "Calendar layout",
        value: "calendar",
        key: "calendarLayout",
        options: [
          { label: "Calendar", value: "calendar" },
          { label: "Yesterday", value: "yesterday" },
          { label: "Last 7 days", value: "lastWeek" },
        ],
        isHaveCheckbox: true,
        checkbox: {
          value: true,
          text: "Always open the calendar",
        },
      },
      {
        type: "select",
        text: "Calendar language",
        key: "calendarLanguage",
        value: "vn",
        options: [
          { label: "Viet Nam", value: "vn" },
          { label: "English", value: "english" },
          { label: "Last 7 days", value: "lastWeek" },
        ],
      },
      {
        type: "select",
        text: "First day of calendar",
        key: "firsrDay",
        value: "monday",
        options: [
          { label: "Monday", value: "monday" },
          { label: "Tuesday", value: "tuesday" },
          { label: "Wednesday", value: "wednesday" },
          { label: "Thursday", value: "thursday" },
          { label: "Friday", value: "friday" },
          { label: "Saturday", value: "sturday" },
          { label: "Sunday", value: "sunday" },
        ],
      },
      {
        type: "select",
        text: "Date format",
        value: "dd/mm/yyyy",
        key: "dateFormat",
        options: [
          { label: "DD/MM/YYYY", value: "dd/mm/yyyy" },
          { label: "YYYY/MM/DD", value: "yyyy/mm/dd" },
        ],
      },
      {
        type: "colorPicker",
        text: "Theme color",
        value: "#f5a623",
        key: "themeColor",
      },
      {
        type: "colorPicker",
        text: "Title color",
        value: "#f5a623",
        key: "titleColor",
      },
      {
        type: "colorPicker",
        text: "Required message text color",
        value: "#f5a623",
        key: "requiredMessage",
      },
    ],
  },
  {
    type: "textWidget",
    text: "Widget Text",
    icon: TextMajor,
    tabs: [
      {
        key: "delivery",
        contents: [
          {
            type: "textField",
            text: "Title",
            value: "",
            key: "deliveryDate",
            placeholder: "Select a delivery date",
          },
          {
            type: "textField",
            text: "Delivery date label",
            value: "",
            key: "deliveryDateLabel",
            placeholder: "Delivery date",
          },
          {
            type: "textField",
            text: "Delivery date title",
            value: "",
            key: "deliveryTitle",
            placeholder: "Delivery date",
          },
          {
            type: "textField",
            text: "Delivery time title",
            value: "",
            key: "deliveryTime",
            placeholder: "Delivery time",
          },
          {
            type: "textField",
            text: "Require message text ",
            value: "",
            key: "message",
            placeholder: "Henry Nguyen",
          },
          {
            type: "codeEditor",
            text: "Custom css",
            key: "customCss",
            value: ` .box-color{
                width: 36px;
                height: 36px;
                position: absolute;
                top: 24px;
                right: 0;
                z-index: 20;
                border-radius: 4px;
                cursor: pointer;
            }`,
          },
        ],
      },
      {
        key: "store",
        contents: [
          {
            type: "textField",
            text: "Store pick up label",
            value: "",
            key: "storeLabel",
            placeholder: "Store pickup",
          },
          {
            type: "textField",
            text: "Message text to require buyers to choose a pickup location",
            value: "",
            key: "storageProduct",
            placeholder: "Choose storage to pick up your product(s)",
          },
          {
            type: "textField",
            text: "Store pickup date title",
            value: "",
            key: "storeDateTitle",
            placeholder: "Delivery date",
          },
          {
            type: "textField",
            text: "Store pickup time title",
            value: "",
            key: "storeTimeTitle",
            placeholder: "Pick up location",
          },
          {
            type: "textField",
            text: "Required message text",
            value: "",
            key: "requiredMessage",
            placeholder: "Please select pick up date before checkout",
          },
        ],
      },
    ],
  },
];

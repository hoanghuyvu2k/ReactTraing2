import "./HeaderCard.scss";
import { Icon } from "@shopify/polaris";
import { ReplaceMajor, ChevronDownMinor } from "@shopify/polaris-icons";

function HeaderCard(props) {
  return (
    <div className="header-card">
      <div className="flex">
        <Icon color="critical" source={props.icon} />
        <div className="ml-2 font-bold ">{props.text}</div>
      </div>
      <div>
        <Icon color="critical" source={ChevronDownMinor} />
      </div>
    </div>
  );
}

export default HeaderCard;

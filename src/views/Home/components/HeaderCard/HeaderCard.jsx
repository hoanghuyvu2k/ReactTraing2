import "./HeaderCard.scss";
import { Icon } from "@shopify/polaris";
import {
  ReplaceMajor,
  ChevronDownMinor,
  ChevronUpMinor,
} from "@shopify/polaris-icons";

function HeaderCard(props) {
  return (
    <div className="header-card">
      <div className="flex">
        <Icon color="critical" source={props.icon} />
        <div className="ml-2 font-bold ">{props.text}</div>
      </div>
      <div className="cursor-pointer" onClick={props.onClickIcon}>
        {props.isShowContent ? (
          <Icon color="critical" source={ChevronDownMinor} />
        ) : (
          <Icon color="critical" source={ChevronUpMinor} />
        )}
      </div>
    </div>
  );
}

export default HeaderCard;

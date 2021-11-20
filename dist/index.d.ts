import * as React from "react";
import "./styles.css";
interface IDetails {
    color?: string;
    styleDetailsContent?: string;
    width?: string;
    bgColor?: string;
    bgHover?: string;
    colorHover?: string;
    borderRadius?: string;
    border?: string;
    summary?: string;
}
declare const CollapseDetails: React.FC<IDetails>;
export default CollapseDetails;

import * as React from "react";
const { useState, useEffect, useRef } = React;

import "./styles.css";

interface IDetails {
  color?: string;
  styleDetailsContent?: string;
  width?: string;
  bgColor?: string;
  bgHover?: string;
  colorHover?: string;
  borderRadius?: string;
  summary?: string;
}
const CollapseDetails: React.FC<IDetails> = ({
  children,
  color,
  styleDetailsContent,
  width,
  bgColor,
  bgHover,
  colorHover,
  borderRadius,
  summary,
  ...rest
}) => {
  const [hoverRef, isHovered] = useHover();
  console.log(hoverRef)

  const styles = {
    styleContainer: {
      width: width || "50rem",
    },
    styleSummary: {
      background: isHovered ? bgHover || "orange" : bgColor || "#e9d41d",
      color: isHovered ? colorHover || "#fff" : color || "#000",
      borderRadius: borderRadius || "0.3em",
    },
  };
  return (
    <main style={styles.styleContainer}>
      <details>
        <summary
          ref={hoverRef}
          style={styles.styleSummary}
          className="details-container__summary "
          {...rest}
        >
          {summary}
        </summary>

        <div className={`details-container__content ${styleDetailsContent}`}>{children}</div>
      </details>
    </main>
  );
};

const  useHover = () => {
  const [hover, setHover] = useState<any>(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleMouseOver = () => setHover(true);
  const handleMouseOut = () => setHover(false);

  useEffect(():(() => void) | void => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref.current]);

  return [ref, hover];
};

export default CollapseDetails;

import React from "react";
import { Image, View, ViewProps } from "react-native";
import Svg, { SvgProps, Path, Defs, Circle, Rect } from "react-native-svg";

import { iconType } from "../../types";
import { DEFAULT_COLORS } from "../../constants";

type props = {
  iconType: iconType;
  light: boolean;
  color?: string;
  width?: number;
  height?: number;
};

const IconRenderer = ({
  iconType,
  light,
  color,
  height = 24,
  width = 24,
}: props) => {
  const svgColor = color
    ? color
    : light
    ? DEFAULT_COLORS.white
    : DEFAULT_COLORS.gray[700];

  switch (iconType) {
    case "map":
      return (
        <Svg fill="none" width={width} height={height}>
          <Path
            stroke={svgColor}
            strokeWidth={1.5}
            d="M8.5 19.334c-1.411.158-3.054 1.081-4.264 1.894-.708.476-1.736-.019-1.736-.872v-9.67c0-.585.255-1.142.722-1.495 1.01-.763 2.914-2.069 4.635-2.499M8.5 19.334c3.318-.371 4.682 3.562 8 3.19m-8-3.19V9.878m8 12.646c1.867-.209 4.14-1.757 5.278-2.617a1.86 1.86 0 0 0 .722-1.495v-9.67c0-.853-1.028-1.348-1.736-.872-.995.669-2.283 1.412-3.495 1.743M16.5 22.524V11.711"
          />
          <Path
            stroke={svgColor}
            strokeWidth={1.5}
            d="M17.962 7.363c0 2.651-2.5 7.2-5 7.2s-5-4.549-5-7.2c0-2.65 2.239-4.8 5-4.8s5 2.15 5 4.8Z"
          />
          <Path
            stroke={svgColor}
            strokeWidth={1.5}
            d="M14.462 7.063a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          />
        </Svg>
      );
    case "mapBold":
      return (
        <Svg fill="none" width={width} height={height}>
          <Path
            fill={svgColor}
            d="M17.25 11.652v10.74c1.692-.457 3.539-1.724 4.528-2.472a1.86 1.86 0 0 0 .722-1.495v-9.67c0-.853-1.028-1.347-1.736-.871-.688.462-1.516.96-2.362 1.332l-.055.162c-.27.767-.643 1.552-1.097 2.274ZM9.25 12.475v6.86c1.278.107 2.264.857 3.25 1.607.986.75 1.972 1.5 3.25 1.607v-9.072c-.746.673-1.694 1.217-2.788 1.217-.98 0-1.836-.441-2.505-.976a7.442 7.442 0 0 1-1.207-1.243ZM7.09 6.948c-1.495.56-3.006 1.606-3.868 2.257A1.86 1.86 0 0 0 2.5 10.7v9.67c0 .852 1.028 1.347 1.736.871 1-.672 2.297-1.42 3.514-1.747V9.837c-.392-.974-.64-1.986-.66-2.89Z"
          />
          <Path
            fill={svgColor}
            fillRule="evenodd"
            d="M17.068 8.93c.262-.747.412-1.48.412-2.097 0-2.396-2.023-4.338-4.518-4.338-2.315 0-4.223 1.671-4.487 3.825-.02.168-.031.34-.031.513 0 2.395 2.259 6.506 4.518 6.506 1.676 0 3.352-2.263 4.106-4.41Zm-4.106-1.013a1.356 1.356 0 1 0 0-2.71 1.356 1.356 0 0 0 0 2.71Z"
            clipRule="evenodd"
          />
        </Svg>
      );
    case "journey":
      return (
        <Svg fill="none" width={width} height={height}>
          <Path
            stroke={svgColor}
            strokeWidth={1.5}
            d="M9.473 3.754a4.281 4.281 0 0 1 6.054 0l5.72 5.719a4.281 4.281 0 0 1 0 6.054l-5.72 5.72a4.281 4.281 0 0 1-6.054 0l-5.72-5.72a4.281 4.281 0 0 1 0-6.054l5.72-5.72Z"
          />
          <Path
            stroke={svgColor}
            strokeLinecap="round"
            strokeWidth={1.5}
            d="m10.5 8.086 1.293-1.293a1 1 0 0 1 1.414 0L14.5 8.086m-2 8.414V7.086m0 9.414v1m0-1a4 4 0 0 1 4-4h1.414m-5.414 4a4 4 0 0 0-4-4H7.086m9.828-2 1.293 1.293a1 1 0 0 1 0 1.414L16.914 14.5m-8.828-4-1.293 1.293a1 1 0 0 0 0 1.414L8.086 14.5"
          />
        </Svg>
      );
    case "journeyBold":
      return (
        <Svg fill="none" width={width} height={height}>
          <Path
            fill={svgColor}
            fillRule="evenodd"
            d="M15.527 3.754a4.281 4.281 0 0 0-6.054 0l-5.72 5.719a4.281 4.281 0 0 0 0 6.054l5.72 5.72a4.281 4.281 0 0 0 6.054 0l5.72-5.72a4.281 4.281 0 0 0 0-6.054l-5.72-5.72ZM13.97 8.616l-.72-.72v5.14a4.733 4.733 0 0 1 3.25-1.286h.604l-.72-.72a.75.75 0 1 1 1.06-1.06l1.293 1.293a1.75 1.75 0 0 1 0 2.474l-1.292 1.293a.75.75 0 1 1-1.061-1.06l.72-.72H16.5a3.25 3.25 0 0 0-3.25 3.25v1a.75.75 0 0 1-1.5 0v-1a3.25 3.25 0 0 0-3.25-3.25h-.604l.72.72a.75.75 0 1 1-1.06 1.06l-1.293-1.293a1.75 1.75 0 0 1 0-2.474L7.555 9.97a.75.75 0 0 1 1.061 1.06l-.72.72H8.5c1.257 0 2.4.488 3.25 1.286v-5.14l-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.292a.75.75 0 0 1-1.06 1.061Z"
            clipRule="evenodd"
          />
        </Svg>
      );
    case "hauler":
      return (
        <Svg fill="none" width={width} height={height}>
          <Circle
            cx={3}
            cy={3}
            r={3}
            stroke={svgColor}
            strokeLinejoin="round"
            strokeWidth={1.5}
            transform="matrix(1 0 0 -1 9.5 12.5)"
          />
          <Path
            stroke={svgColor}
            strokeWidth={1.5}
            d="M19.499 22.374A4.002 4.002 0 0 0 22.5 18.5v-12a4 4 0 0 0-4-4h-12a4 4 0 0 0-4 4v12a4.002 4.002 0 0 0 3.001 3.874m13.998 0c-.32.082-.654.126-.999.126h-12c-.345 0-.68-.044-.999-.126m13.998 0a7 7 0 0 0-13.998 0"
          />
        </Svg>
      );
    case "haulerBold":
      return (
        <Svg fill="none" width={width} height={height}>
          <Path
            fill={svgColor}
            fillRule="evenodd"
            d="M18.5 2.5h-12a4 4 0 0 0-4 4v12a4.002 4.002 0 0 0 4 4h12a4.002 4.002 0 0 0 4-4v-12a4 4 0 0 0-4-4Zm-3 7a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm-7.847 8.015C8.2 15.782 10.163 14.5 12.5 14.5c2.337 0 4.3 1.282 4.847 3.015.167.527-.295.985-.847.985h-8c-.552 0-1.014-.458-.847-.985Z"
            clipRule="evenodd"
          />
        </Svg>
      );
    case "filter":
      return (
        <Svg fill="none" width={width} height={height}>
          <Path
            stroke={svgColor}
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M7 21v-5M7 5V3m0 2a3 3 0 0 1 3 3v2a3 3 0 1 1-6 0V8a3 3 0 0 1 3-3Zm10 3V3m0 18v-2m0 0a3 3 0 0 0 3-3v-2a3 3 0 1 0-6 0v2a3 3 0 0 0 3 3Z"
          />
        </Svg>
      );
    case "location":
      return (
        <Svg fill="none" width={width} height={height}>
          <Path
            stroke={svgColor}
            strokeWidth={1.5}
            d="M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
          />
          <Path
            stroke={svgColor}
            strokeWidth={1.5}
            d="M19 8.857c0 2.285-1.698 5.14-3.558 7.046C14.22 17.157 12.926 18 12 18c-.926 0-2.22-.843-3.442-2.097C6.698 13.997 5 11.142 5 8.857 5 5.07 8.134 2 12 2s7 3.07 7 6.857Z"
          />
          <Path
            stroke={svgColor}
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M15.154 16.19C18.57 16.614 21 17.712 21 19c0 1.657-4.03 3-9 3s-9-1.343-9-3c0-1.287 2.431-2.385 5.846-2.81"
          />
        </Svg>
      );
    case "arrorBack":
      return (
        <Svg fill="none" width={width} height={height}>
          <Path
            stroke={svgColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m10 8-4 4m0 0 4 4m-4-4h12"
          />
        </Svg>
      );
    case "arrorUp":
      return (
        <Svg fill="none" width={width} height={height}>
          <Path
            stroke={svgColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m16 10-4-4m0 0-4 4m4-4v12"
          />
        </Svg>
      );
    case "arrorDown":
      return (
        <Svg fill="none" width={width} height={height}>
          <Path
            stroke={svgColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m8 14 4 4m0 0 4-4m-4 4V6"
          />
        </Svg>
      );
    case "truck":
      return (
        <Svg fill="none" width={width} height={height}>
          <Path
            stroke={svgColor}
            strokeWidth={1.5}
            d="M14.5 19V7m0 12h2m-2 0h-5m5-12a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v8a4.002 4.002 0 0 0 3.004 3.875M14.5 7h3.21a2 2 0 0 1 1.367.54l2.79 2.617a2 2 0 0 1 .633 1.46V17a2 2 0 0 1-2 2m0 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m-7 0a2 2 0 1 1-3.996-.125M9.5 19a2 2 0 0 0-3.996-.125"
          />
          <Path
            stroke={svgColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10.5 8h-2M10.5 12h-4"
          />
        </Svg>
      );
    case "driver":
      return (
        <Svg fill="none" width={width} height={height}>
          <Path
            stroke={svgColor}
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m18.301 18.928.62-.367C20.209 17.799 21 16.39 21 14.868V9.132c0-1.523-.792-2.931-2.078-3.693l-4.844-2.868a4.067 4.067 0 0 0-4.156 0L5.078 5.44C3.792 6.201 3 7.61 3 9.132v5.736c0 1.523.792 2.931 2.078 3.693l.621.367m12.602 0-4.222 2.5a4.067 4.067 0 0 1-4.157 0l-4.223-2.5m12.602 0c-1.258-2.23-3.609-3.73-6.301-3.73s-5.043 1.5-6.301 3.73"
          />
          <Circle
            cx={3}
            cy={3}
            r={3}
            stroke={svgColor}
            strokeLinejoin="round"
            strokeWidth={1.5}
            transform="matrix(1 0 0 -1 9 12)"
          />
        </Svg>
      );
    case "payment":
      return (
        <Svg fill="none" width={width} height={height}>
          <Rect
            width={18}
            height={20}
            x={22}
            y={3}
            stroke={svgColor}
            strokeWidth={1.5}
            rx={4}
            transform="rotate(90 22 3)"
          />
          <Circle cx={6} cy={17} r={1} fill={svgColor} />
          <Path
            stroke={svgColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M2 7h20v4H2V7Z"
          />
        </Svg>
      );
    case "route":
      return (
        <Svg fill="none" width={width} height={height}>
          <Path
            stroke={svgColor}
            strokeWidth={1.5}
            d="M8.973 3.254a4.281 4.281 0 0 1 6.054 0l5.72 5.719a4.281 4.281 0 0 1 0 6.054l-5.72 5.72a4.281 4.281 0 0 1-6.054 0l-5.72-5.72a4.281 4.281 0 0 1 0-6.054l5.72-5.72Z"
          />
          <Path
            stroke={svgColor}
            strokeLinecap="round"
            strokeWidth={1.5}
            d="m11 12.414-1.293 1.293a1 1 0 0 1-1.414 0L7 12.414m2 1V11a3 3 0 1 1 6 0v5"
          />
        </Svg>
      );
    case "destination":
      return (
        <Svg fill="none" width={width} height={height}>
          <Circle
            cx={14.039}
            cy={5.268}
            r={1.142}
            stroke={svgColor}
            strokeWidth={1.5}
          />
          <Path
            stroke={svgColor}
            strokeWidth={1.5}
            d="M6.616 16.886a1.317 1.317 0 1 1-2.633 0 1.317 1.317 0 0 1 2.633 0Z"
          />
          <Path
            stroke={svgColor}
            strokeWidth={1.5}
            d="M9.25 16.886c0 2.181-2.634 5.267-3.95 5.267-1.317 0-3.95-3.085-3.95-5.267a3.95 3.95 0 1 1 7.9 0ZM17.465 5.268c0 1.892-2.284 4.568-3.426 4.568-1.142 0-3.425-2.676-3.425-4.568a3.426 3.426 0 0 1 6.85 0Z"
          />
          <Path
            stroke={svgColor}
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M13.945 12.195v2.765a2.292 2.292 0 0 0 2.293 2.292h2.257a2.327 2.327 0 0 1 0 4.654h-8.53"
          />
        </Svg>
      );
    case "edit":
      return (
        <Svg fill="none" width={width} height={height}>
          <Path
            stroke={svgColor}
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M3 21h18M13.784 5.312s0 1.634 1.635 3.269c1.635 1.635 3.27 1.635 3.27 1.635m-11.37 7.772 3.433-.49c.495-.071.954-.3 1.308-.654l8.263-8.263a2.312 2.312 0 0 0 0-3.27l-1.635-1.634a2.312 2.312 0 0 0-3.269 0L7.156 11.94a2.311 2.311 0 0 0-.654 1.308l-.49 3.432a1.156 1.156 0 0 0 1.308 1.308Z"
          />
        </Svg>
      );
    case "security":
      return (
        <Svg fill="none" width={width} height={height}>
          <Path
            stroke={svgColor}
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10.375 2.722 5.378 4.943c-1.446.643-2.4 2.082-2.308 3.66.36 6.175 2.168 8.893 6.866 12.074a3.686 3.686 0 0 0 4.129 0c4.712-3.197 6.456-5.954 6.847-12.052.102-1.59-.854-3.044-2.31-3.69l-4.977-2.213a4 4 0 0 0-3.25 0Z"
          />
          <Path
            stroke={svgColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m9 12 1.753 1.402a1 1 0 0 0 1.377-.122L15 10"
          />
        </Svg>
      );
    case "notification":
      return (
        <Svg fill="none" width={width} height={height}>
          <Path
            stroke={svgColor}
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5.68 8.794C6.054 5.491 8.77 3 12 3c3.23 0 5.946 2.49 6.32 5.794l.345 3.044c.086.757.393 1.469.88 2.042 1.033 1.216.194 3.12-1.375 3.12H5.83c-1.57 0-2.408-1.904-1.375-3.12a3.816 3.816 0 0 0 .88-2.042l.345-3.044Z"
          />
          <Path
            stroke={svgColor}
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M15 19c-.437 1.165-1.615 2-3 2s-2.563-.835-3-2"
          />
        </Svg>
      );
    case "book":
      return (
        <Svg fill="none" width={width} height={height}>
          <Path
            stroke={svgColor}
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M12 6.053v14.25M5 8.254c1.266.196 2.678.522 4 1.033m-4 2.967c.64.099 1.316.23 2 .403M3.994 3.011c2.219.251 5.2.925 7.323 2.413.408.286.958.286 1.366 0 2.124-1.488 5.104-2.162 7.323-2.413C21.104 2.887 22 3.804 22 4.935V16.2c0 1.131-.896 2.048-1.994 2.172-2.219.251-5.2.925-7.323 2.413a1.195 1.195 0 0 1-1.366 0c-2.124-1.488-5.104-2.162-7.323-2.413C2.896 18.248 2 17.332 2 16.2V4.935c0-1.131.896-2.048 1.994-1.924Z"
          />
        </Svg>
      );
    case "help":
      return (
        <Svg fill="none" width={width} height={height}>
          <Path
            fill={svgColor}
            d="m13.683 10.08.63.407-.63-.406ZM9.25 9a.75.75 0 0 0 1.5 0h-1.5Zm2 4.5a.75.75 0 0 0 1.5 0h-1.5Zm1.5 2.5a.75.75 0 0 0-1.5 0h1.5Zm-1.5 1a.75.75 0 0 0 1.5 0h-1.5Zm10-5A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75h-1.5ZM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75v-1.5ZM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5ZM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75v1.5ZM13.25 9c0 .25-.073.48-.198.675l1.262.812A2.74 2.74 0 0 0 14.75 9h-1.5Zm-2.5 0c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 9h1.5ZM12 7.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 6.25v1.5ZM11.25 13v.5h1.5V13h-1.5Zm1.802-3.325a7.594 7.594 0 0 1-.468.628c-.178.22-.386.473-.573.73-.369.507-.761 1.168-.761 1.967h1.5c0-.305.15-.64.474-1.084.159-.219.334-.43.528-.672.187-.232.389-.489.562-.757l-1.262-.812ZM11.25 16v1h1.5v-1h-1.5Z"
          />
        </Svg>
      );
    case "openLink":
      return (
        <Svg fill="none" width={width} height={height}>
          <Path
            stroke={svgColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 3h6m0 0v6m0-6L10 14M19 12v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h5"
          />
        </Svg>
      );
    case "logout":
      return (
        <Svg fill="none" width={width} height={height}>
          <Path
            stroke={svgColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m18.5 14 1.293-1.293a1 1 0 0 0 0-1.414L18.5 10"
          />
          <Path
            stroke={svgColor}
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M19.5 12h-6m-9 5.266v-10m12 10a2 2 0 0 1-2 2h-4m6-12a2 2 0 0 0-2-2h-4M5.39 19.86l2 1.333c1.33.886 3.11-.066 3.11-1.664V5.003c0-1.597-1.78-2.55-3.11-1.664l-2 1.334a2 2 0 0 0-.89 1.664v11.859a2 2 0 0 0 .89 1.664Z"
          />
        </Svg>
      );
    case "google":
      return (
        <Image
          style={{ width: 24, height: 24, resizeMode: "contain" }}
          source={require("../../assets/images/google.png")}
        />
      );
  }
};

export default IconRenderer;

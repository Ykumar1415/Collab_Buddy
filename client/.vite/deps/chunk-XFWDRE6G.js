import {
  styled_default,
  useThemeProps
} from "./chunk-GMCVZ5Q7.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  clsx_m_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  require_jsx_runtime
} from "./chunk-PYV2IS5X.js";
import {
  require_prop_types
} from "./chunk-ZBRVLQEX.js";
import {
  require_react
} from "./chunk-6DDWND5A.js";
import {
  __toESM
} from "./chunk-4EOJPDL2.js";

// node_modules/@mui/material/CardActions/CardActions.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/material/CardActions/cardActionsClasses.js
function getCardActionsUtilityClass(slot) {
  return generateUtilityClass("MuiCardActions", slot);
}
var cardActionsClasses = generateUtilityClasses("MuiCardActions", ["root", "spacing"]);
var cardActionsClasses_default = cardActionsClasses;

// node_modules/@mui/material/CardActions/CardActions.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["disableSpacing", "className"];
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    disableSpacing
  } = ownerState;
  const slots = {
    root: ["root", !disableSpacing && "spacing"]
  };
  return composeClasses(slots, getCardActionsUtilityClass, classes);
};
var CardActionsRoot = styled_default("div", {
  name: "MuiCardActions",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.disableSpacing && styles.spacing];
  }
})(({
  ownerState
}) => _extends({
  display: "flex",
  alignItems: "center",
  padding: 8
}, !ownerState.disableSpacing && {
  "& > :not(:first-of-type)": {
    marginLeft: 8
  }
}));
var CardActions = React.forwardRef(function CardActions2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiCardActions"
  });
  const {
    disableSpacing = false,
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    disableSpacing
  });
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime.jsx)(CardActionsRoot, _extends({
    className: clsx_m_default(classes.root, className),
    ownerState,
    ref
  }, other));
});
true ? CardActions.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: import_prop_types.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var CardActions_default = CardActions;

export {
  getCardActionsUtilityClass,
  cardActionsClasses_default,
  CardActions_default
};
//# sourceMappingURL=chunk-XFWDRE6G.js.map

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iwQuL9Pc6FfJXBDaZxjmvn
// Component: g-wFSe8vTvkB

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { Dialog } from "@plasmicpkgs/radix-ui";
import Button from "../../Button"; // plasmic-import: pwHTtS2SR00X/component
import { DialogContent } from "@plasmicpkgs/radix-ui";
import { DialogTitle } from "@plasmicpkgs/radix-ui";
import { DialogClose } from "@plasmicpkgs/radix-ui";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: iwQuL9Pc6FfJXBDaZxjmvn/projectcss
import sty from "./PlasmicDialog.module.css"; // plasmic-import: g-wFSe8vTvkB/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: VogkY-gp40tE/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: EwqmOuGsAsBD/icon

createPlasmicElementProxy;

export type PlasmicDialog__VariantMembers = {
  noTrigger: "noTrigger";
};
export type PlasmicDialog__VariantsArgs = {
  noTrigger?: SingleBooleanChoiceArg<"noTrigger">;
};
type VariantPropType = keyof PlasmicDialog__VariantsArgs;
export const PlasmicDialog__VariantProps = new Array<VariantPropType>(
  "noTrigger"
);

export type PlasmicDialog__ArgsType = {
  open?: boolean;
  onOpenChange?: (val: boolean) => void;
  body?: React.ReactNode;
  title?: React.ReactNode;
  trigger?: React.ReactNode;
};
type ArgPropType = keyof PlasmicDialog__ArgsType;
export const PlasmicDialog__ArgProps = new Array<ArgPropType>(
  "open",
  "onOpenChange",
  "body",
  "title",
  "trigger"
);

export type PlasmicDialog__OverridesType = {
  dialog?: Flex__<typeof Dialog>;
  dialogContent?: Flex__<typeof DialogContent>;
  freeBox?: Flex__<"div">;
  dialogTitle?: Flex__<typeof DialogTitle>;
  h5?: Flex__<"h5">;
  dialogClose?: Flex__<typeof DialogClose>;
};

export interface DefaultDialogProps {
  open?: boolean;
  onOpenChange?: (val: boolean) => void;
  body?: React.ReactNode;
  title?: React.ReactNode;
  trigger?: React.ReactNode;
  noTrigger?: SingleBooleanChoiceArg<"noTrigger">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDialog__RenderFunc(props: {
  variants: PlasmicDialog__VariantsArgs;
  args: PlasmicDialog__ArgsType;
  overrides: PlasmicDialog__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "dialog.open",
        type: "writable",
        variableType: "boolean",

        valueProp: "open",
        onChangeProp: "onOpenChange"
      },
      {
        path: "noTrigger",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noTrigger
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <Dialog
      data-plasmic-name={"dialog"}
      data-plasmic-override={overrides.dialog}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.dialog,
        { [sty.dialognoTrigger]: hasVariant($state, "noTrigger", "noTrigger") }
      )}
      defaultOpen={true}
      onOpenChange={generateStateOnChangeProp($state, ["dialog", "open"])}
      open={generateStateValueProp($state, ["dialog", "open"])}
      themeResetClass={classNames(
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens
      )}
      triggerSlot={
        (hasVariant($state, "noTrigger", "noTrigger") ? false : true)
          ? renderPlasmicSlot({
              defaultContents: (
                <Button>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__dYyNj
                    )}
                  >
                    {"Show dialog"}
                  </div>
                </Button>
              ),
              value: args.trigger
            })
          : null
      }
    >
      <DialogContent
        data-plasmic-name={"dialogContent"}
        data-plasmic-override={overrides.dialogContent}
        className={classNames("__wab_instance", sty.dialogContent)}
        themeResetClass={classNames(
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens
        )}
      >
        <Stack__
          as={"div"}
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <DialogTitle
            data-plasmic-name={"dialogTitle"}
            data-plasmic-override={overrides.dialogTitle}
            className={classNames("__wab_instance", sty.dialogTitle)}
          >
            <h5
              data-plasmic-name={"h5"}
              data-plasmic-override={overrides.h5}
              className={classNames(projectcss.all, projectcss.h5, sty.h5)}
            >
              {renderPlasmicSlot({
                defaultContents: "Dialog title",
                value: args.title
              })}
            </h5>
          </DialogTitle>
          {renderPlasmicSlot({
            defaultContents: (
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__uZtdt)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__bo06M
                  )}
                >
                  {"You can insert dialog body content here in this slot."}
                </div>
              </Stack__>
            ),
            value: args.body
          })}
        </Stack__>
        <DialogClose
          data-plasmic-name={"dialogClose"}
          data-plasmic-override={overrides.dialogClose}
          className={classNames("__wab_instance", sty.dialogClose)}
        />
      </DialogContent>
    </Dialog>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  dialog: [
    "dialog",
    "dialogContent",
    "freeBox",
    "dialogTitle",
    "h5",
    "dialogClose"
  ],
  dialogContent: [
    "dialogContent",
    "freeBox",
    "dialogTitle",
    "h5",
    "dialogClose"
  ],
  freeBox: ["freeBox", "dialogTitle", "h5"],
  dialogTitle: ["dialogTitle", "h5"],
  h5: ["h5"],
  dialogClose: ["dialogClose"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  dialog: typeof Dialog;
  dialogContent: typeof DialogContent;
  freeBox: "div";
  dialogTitle: typeof DialogTitle;
  h5: "h5";
  dialogClose: typeof DialogClose;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDialog__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDialog__VariantsArgs;
    args?: PlasmicDialog__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDialog__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDialog__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicDialog__ArgProps,
          internalVariantPropNames: PlasmicDialog__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDialog__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "dialog") {
    func.displayName = "PlasmicDialog";
  } else {
    func.displayName = `PlasmicDialog.${nodeName}`;
  }
  return func;
}

export const PlasmicDialog = Object.assign(
  // Top-level PlasmicDialog renders the root element
  makeNodeComponent("dialog"),
  {
    // Helper components rendering sub-elements
    dialogContent: makeNodeComponent("dialogContent"),
    freeBox: makeNodeComponent("freeBox"),
    dialogTitle: makeNodeComponent("dialogTitle"),
    h5: makeNodeComponent("h5"),
    dialogClose: makeNodeComponent("dialogClose"),

    // Metadata about props expected for PlasmicDialog
    internalVariantProps: PlasmicDialog__VariantProps,
    internalArgProps: PlasmicDialog__ArgProps
  }
);

export default PlasmicDialog;
/* prettier-ignore-end */

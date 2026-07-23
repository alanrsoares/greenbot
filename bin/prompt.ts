import { MultiSelectPrompt, settings, wrapTextWithPrefix } from "@clack/core";
import {
  S_BAR,
  S_BAR_END,
  S_CHECKBOX_ACTIVE,
  S_CHECKBOX_SELECTED,
  S_CHECKBOX_INACTIVE,
  MULTISELECT_INSTRUCTIONS,
  formatInstructionFooter,
  symbol,
  symbolBar,
  limitOptions,
} from "@clack/prompts";
import chalk from "chalk";

interface NestedMultiSelectOption<Value> {
  value: Value;
  label: string;
  hint?: string;
  disabled?: boolean;
}

export interface NestedMultiSelectOptions<Value> {
  message: string;
  options: NestedMultiSelectOption<Value>[];
  allLabel?: string;
  allValue?: Value;
  initialValues?: Value[];
  maxItems?: number;
  required?: boolean;
  cursorAt?: Value;
  showInstructions?: boolean;
  withGuide?: boolean;
  input?: any;
  output?: any;
  signal?: AbortSignal;
}

const ALL_VALUE_SYMBOL = Symbol("ALL_VALUE");

function styleOption(
  option: { label?: string; value: any; hint?: string },
  state:
    | "disabled"
    | "active"
    | "selected"
    | "cancelled"
    | "active-selected"
    | "submitted"
    | "inactive",
  isChild = false,
): string {
  const label = option.label ?? String(option.value);
  const hintStr = option.hint ? ` ${chalk.dim(`(${option.hint})`)}` : "";
  const prefix = isChild ? "  " : "";

  switch (state) {
    case "disabled":
      return `${prefix}${chalk.gray(S_CHECKBOX_INACTIVE)} ${chalk.strikethrough.gray(label)}${option.hint ? ` ${chalk.dim(`(${option.hint})`)}` : ""}`;
    case "active":
      return `${prefix}${chalk.cyan(S_CHECKBOX_ACTIVE)} ${label}${hintStr}`;
    case "selected":
      return `${prefix}${chalk.green(S_CHECKBOX_SELECTED)} ${chalk.dim(label)}${hintStr}`;
    case "active-selected":
      return `${prefix}${chalk.green(S_CHECKBOX_SELECTED)} ${label}${hintStr}`;
    case "submitted":
      return chalk.dim(label);
    case "cancelled":
      return chalk.strikethrough.dim(label);
    default:
      return `${prefix}${chalk.dim(S_CHECKBOX_INACTIVE)} ${chalk.dim(label)}${hintStr}`;
  }
}

/**
 * Prompt for selecting multiple options with a synchronized "Select All" parent toggle checkbox.
 */
export async function nestedMultiselect<Value>(
  opts: NestedMultiSelectOptions<Value>,
): Promise<Value[] | symbol> {
  const allVal = (opts.allValue ?? ALL_VALUE_SYMBOL) as any;
  const allLabel = opts.allLabel ?? "All packages";

  const allOption = {
    value: allVal,
    label: chalk.bold(allLabel),
  };

  const fullOptions = [allOption, ...opts.options];
  const childValues = opts.options
    .filter((o) => !o.disabled)
    .map((o) => o.value);

  const initialValues = [...(opts.initialValues ?? [])];
  if (
    childValues.length > 0 &&
    childValues.every((v) => initialValues.includes(v))
  ) {
    if (!initialValues.includes(allVal)) {
      initialValues.push(allVal);
    }
  }

  const isRequired = opts.required ?? false;
  const showInstructions = opts.showInstructions ?? true;

  class NestedMultiSelectPrompt extends MultiSelectPrompt<any> {
    constructor() {
      const superOpts: any = {
        options: fullOptions,
        initialValues,
        required: isRequired,
        validate(selected?: any[]) {
          const actualSelected = selected
            ? selected.filter((v) => v !== allVal)
            : [];
          if (isRequired && actualSelected.length === 0) {
            return `Please select at least one option.`;
          }
          return undefined;
        },
        render() {
          const withGuide = opts.withGuide ?? settings.withGuide;
          const messageHeader = wrapTextWithPrefix(
            opts.output,
            opts.message,
            withGuide ? `${symbolBar(this.state)}  ` : "",
            `${symbol(this.state)}  `,
          );
          const headerStr = `${withGuide ? `${chalk.gray(S_BAR)}\n` : ""}${messageHeader}\n`;
          const currentValues = this.value ?? [];

          const getStyle = (option: any, active: boolean) => {
            const isChild = option.value !== allVal;
            if (option.disabled)
              return styleOption(option, "disabled", isChild);
            const isSelected = currentValues.includes(option.value);
            if (active && isSelected)
              return styleOption(option, "active-selected", isChild);
            if (isSelected) return styleOption(option, "selected", isChild);
            if (active) return styleOption(option, "active", isChild);
            return styleOption(option, "inactive", isChild);
          };

          switch (this.state) {
            case "submit": {
              const selectedList =
                this.options
                  .filter(({ value }: { value: any }) =>
                    currentValues.includes(value),
                  )
                  .map((o: any) =>
                    styleOption(o, "submitted", o.value !== allVal),
                  )
                  .join(chalk.dim(", ")) || chalk.dim("none");
              const lines = wrapTextWithPrefix(
                opts.output,
                selectedList,
                withGuide ? `${chalk.gray(S_BAR)}  ` : "",
              );
              return `${headerStr}${lines}`;
            }
            case "cancel": {
              const cancelledList = this.options
                .filter(({ value }: { value: any }) =>
                  currentValues.includes(value),
                )
                .map((o: any) =>
                  styleOption(o, "cancelled", o.value !== allVal),
                )
                .join(chalk.dim(", "));
              if (cancelledList.trim() === "")
                return `${headerStr}${chalk.gray(S_BAR)}`;
              const lines = wrapTextWithPrefix(
                opts.output,
                cancelledList,
                withGuide ? `${chalk.gray(S_BAR)}  ` : "",
              );
              return `${headerStr}${lines}${withGuide ? `\n${chalk.gray(S_BAR)}` : ""}`;
            }
            case "error": {
              const bar = withGuide ? `${chalk.yellow(S_BAR)}  ` : "";
              const errLines = this.error
                .split("\n")
                .map((line: string, idx: number) =>
                  idx === 0
                    ? `${withGuide ? `${chalk.yellow(S_BAR_END)}  ` : ""}${chalk.yellow(line)}`
                    : `   ${line}`,
                )
                .join("\n");
              const rowPad =
                headerStr.split("\n").length + errLines.split("\n").length + 1;
              const limitParams: any = {
                output: opts.output,
                options: this.options,
                cursor: this.cursor,
                columnPadding: bar.length,
                rowPadding: rowPad,
                style: getStyle,
              };
              if (opts.maxItems !== undefined)
                limitParams.maxItems = opts.maxItems;
              return `${headerStr}${bar}${limitOptions(limitParams).join(`\n${bar}`)}\n${errLines}\n`;
            }
            default: {
              const bar = withGuide ? `${chalk.cyan(S_BAR)}  ` : "";
              const headerRows = headerStr.split("\n").length;
              const footerLines = showInstructions
                ? formatInstructionFooter(MULTISELECT_INSTRUCTIONS, withGuide)
                : withGuide
                  ? [chalk.cyan(S_BAR_END)]
                  : [];
              const footerStr = footerLines.join("\n");
              const footerRows = footerLines.length + 1;

              const limitParams: any = {
                output: opts.output,
                options: this.options,
                cursor: this.cursor,
                columnPadding: bar.length,
                rowPadding: headerRows + footerRows,
                style: getStyle,
              };
              if (opts.maxItems !== undefined)
                limitParams.maxItems = opts.maxItems;
              return `${headerStr}${bar}${limitOptions(limitParams).join(`\n${bar}`)}\n${footerStr}\n`;
            }
          }
        },
      };

      if (opts.signal !== undefined) superOpts.signal = opts.signal;
      if (opts.input !== undefined) superOpts.input = opts.input;
      if (opts.output !== undefined) superOpts.output = opts.output;
      if (opts.cursorAt !== undefined) superOpts.cursorAt = opts.cursorAt;

      super(superOpts);

      this.on("cursor", (action) => {
        if (action === "space") {
          this.syncAllState();
        }
      });

      this.on("key", (_char, key) => {
        if (key.name === "a" || key.name === "i") {
          this.syncAllState();
        }
      });
    }

    private syncAllState(): void {
      if (!this.value) this.value = [];
      const currentSelected = this.value;
      const focusedValue = this.options[this.cursor]?.value;

      if (focusedValue === allVal) {
        const isAllSelected = currentSelected.includes(allVal);
        if (isAllSelected) {
          this.value = [allVal, ...childValues];
        } else {
          this.value = [];
        }
      } else {
        const areAllChildrenSelected =
          childValues.length > 0 &&
          childValues.every((val) => currentSelected.includes(val));

        if (areAllChildrenSelected) {
          if (!currentSelected.includes(allVal)) {
            this.value = [...currentSelected, allVal];
          }
        } else {
          if (currentSelected.includes(allVal)) {
            this.value = currentSelected.filter((val) => val !== allVal);
          }
        }
      }
    }
  }

  const result = await new NestedMultiSelectPrompt().prompt();
  if (typeof result === "symbol") return result;

  const selectedArray = (result ?? []) as Value[];
  return selectedArray.filter((v) => v !== allVal);
}

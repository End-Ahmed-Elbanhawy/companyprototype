import { baseFieldsConfiguration, fieldConfig } from "./base-fields-config";

export const selectFieldsConfiguration = {
    name: "systemRequirements",
    type: "select",
    options:
        [
            "heavy-duty-sliding",
            "high-speed-roll-up",
            "thermal-clean-room",
            "crash-proof-warehouse"
        ]
} as const;

export const quickFieldsConfiguration = [
    ...baseFieldsConfiguration,
    selectFieldsConfiguration
] satisfies readonly fieldConfig[];
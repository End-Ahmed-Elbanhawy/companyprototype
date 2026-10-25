import { baseFieldsConfiguration, fieldConfig } from "./base-fields-config";

const companyNameConfig: fieldConfig = {
    name: "companyName",
    type: "text",
}

export const cartFieldConfiguration = [
    companyNameConfig,
    ...baseFieldsConfiguration
] satisfies readonly fieldConfig[];
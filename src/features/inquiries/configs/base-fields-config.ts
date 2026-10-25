export type fieldConfig = {
    name: string;
    type: "text" | "tel" | "email" | "select";
    dir?: "ltr" | "rtl";
    options?: readonly string[];
};

export const baseFieldsConfiguration = [
    {
        name: "fullName",
        type: "text",
    },
    {
        name: "phoneNumber",
        type: "tel",
        dir: "ltr"
    },
    {
        name: "emailAddress",
        type: "email",
        dir: "ltr"
    }
] satisfies readonly fieldConfig[];
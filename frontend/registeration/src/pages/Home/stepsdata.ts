import { HTMLInputTypeAttribute } from "react";

interface step {
  placeholder: string;
  isRequired: boolean;
  type?: HTMLInputTypeAttribute | "select";
  key: string;
  options?: string[];
}

interface stepRow {
  columns?: number;
  steps: step[];
}

interface stepsParent {
  title: string;
  components: stepRow[];
}

const stepone: stepsParent[] = [
  {
    title: "ข้อมูลส่วนตัว",
    components: [
      {
        steps: [
          {
            key: "prefix",
            isRequired: true,
            placeholder: "คำนำหน้า",
            type: "select",
            options: ["นาย", "นาง", "นางสาว"],
          },
        ],
      },
      {
        columns: 2,
        steps: [
          {
            key: "firstname",
            isRequired: true,
            placeholder: "ชื่อจริง",
            type: "text",
          },
          {
            key: "lastname",
            isRequired: true,
            placeholder: "นามสกุล",
            type: "text",
          },
        ],
      },
      {
        steps: [{ key: "id", isRequired: true, placeholder: "เลขบัตรประชาชน" }],
      },
      {
        steps: [
          {
            key: "phonenumber",
            isRequired: true,
            placeholder: "เบอร์โทรศัพท์",
          },
        ],
      },
      {
        columns: 2,
        steps: [
          { key: "facebook", isRequired: false, placeholder: "Facebook" },
          { key: "lineId", isRequired: false, placeholder: "Line ID" },
        ],
      },
    ],
  },
];

export { stepone };

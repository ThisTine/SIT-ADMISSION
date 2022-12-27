import { HTMLInputTypeAttribute } from "react";

export interface optionsTypes {
  value: string;
  label: string;
}

export interface step {
  placeholder: string;
  isRequired: boolean;
  type?: HTMLInputTypeAttribute | "select" | "special-select";
  key: string;
  options?: optionsTypes[];
}

interface stepRow {
  columns?: number;
  steps: step[];
}

export interface stepsParent {
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
            options: [
              { label: "นาย", value: "นาย" },
              { label: "นาง", value: "นาง" },
              { label: "นางสาว", value: "นางสาว" },
            ],
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
      {
        columns: 4,
        steps: [
          {
            key: "postnumber",
            isRequired: true,
            placeholder: "รหัสไปรษณีย์",
            type: "number",
          },
          {
            key: "sub-district",
            isRequired: true,
            placeholder: "ตำบล",
            type: "select",
          },
          {
            key: "district",
            isRequired: true,
            placeholder: "อำเภอ",
            type: "select",
          },
          {
            key: "province",
            isRequired: true,
            placeholder: "จังหวัด",
            type: "select",
          },
        ],
      },
      {
        columns: 1,
        steps: [
          {
            key: "address",
            placeholder: "ที่อยู่",
            type: "text",
            isRequired: true,
          },
        ],
      },
    ],
  },
];

const steptwo: stepsParent[] = [
  {
    title: "สาขาที่สมัคร",
    components: [
      {
        columns: 1,
        steps: [
          {
            isRequired: true,
            type: "special-select",
            key: "major",
            placeholder: "สาขาที่สมัคร",
            options: [
              { label: "CS", value: "CS" },
              { label: "IT", value: "IT" },
              { label: "DSI", value: "DSI" },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "คะแนนเฉลี่ย",
    components: [
      {
        columns: 2,
        steps: [
          {
            key: "gpax",
            isRequired: true,
            placeholder: "GPAX รวม",
            type: "number",
          },
          {
            key: "math-gpa",
            isRequired: true,
            placeholder: "GPA กลุ่มสาระคณิตศาสตร์",
            type: "number",
          },
        ],
      },
      {
        columns: 2,
        steps: [
          {
            key: "sic-gpa",
            isRequired: true,
            placeholder: "GPA กลุ่มสาระวิทยาศาสตร์",
            type: "number",
          },
          {
            key: "eng-gpa",
            isRequired: true,
            placeholder: "GPA กลุ่มสาระภาษาต่างประเทศ",
            type: "number",
          },
        ],
      },
    ],
  },
];

const stepthree: stepsParent[] = [
  {
    title: "Portfolio",
    components: [
      {
        steps: [
          {
            key: "portfoliourl",
            isRequired: true,
            placeholder: "Link Portfolio",
          },
        ],
      },
      {
        steps: [
          {
            key: "transcripturl",
            isRequired: true,
            placeholder: "Link Transcript",
          },
        ],
      },
      {
        steps: [
          { key: "other", isRequired: false, placeholder: "Link เอกสารอื่น ๆ" },
        ],
      },
      {
        steps: [
          {
            key: "language",
            isRequired: false,
            placeholder: "ผลการทดสอบทางภาษา",
          },
        ],
      },
    ],
  },
];

export { stepone, steptwo, stepthree };

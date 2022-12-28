import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useLayoutEffect,
  useState,
} from "react";
import axios from "../config/axios/AxiosInstance";

interface tumbon {
  id: number;
  name_th: string;
  name_en: string;
}

interface amphure {
  amphure_id: number;
  amphure_name_th: string;
  amphure_name_en: string;
  tambons: tumbon[];
}

interface AddressOptions {
  province_id: number;
  province_name_th: string;
  province_name_en: string;
  amphures: amphure[];
}
export interface zipresponse {
  success: boolean;
  data: AddressOptions;
}
interface registerDataContext {
  addressContext: {
    zipcode: string;
    district: string;
    address?: AddressOptions;
    setZipCode?: Dispatch<SetStateAction<string>>;
    setDistrict?: Dispatch<SetStateAction<string>>;
  };
}

export const registerDataContext = createContext<registerDataContext>({
  addressContext: { zipcode: "", district: "" },
});

const RegisterContextProvider: FC<{ children: ReactNode }> = (props) => {
  const [zipcode, setZipCode] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [address, setAddress] = useState<AddressOptions | null>(null);
  useLayoutEffect(() => {
    if (zipcode && zipcode.length === 5)
      axios
        .get<zipresponse>("/public/province?zipcode=" + zipcode)
        .then((d) => {
          const data = d.data.data;
          setAddress({ ...data });
        })
        .catch((err) => console.log(err));
  }, [zipcode]);
  return (
    <registerDataContext.Provider
      value={{
        addressContext: {
          zipcode,
          setZipCode,
          district,
          setDistrict,
          ...(address && { address }),
        },
      }}
      {...props}
    />
  );
};

export default RegisterContextProvider;

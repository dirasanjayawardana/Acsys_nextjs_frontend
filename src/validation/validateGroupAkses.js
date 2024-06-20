import { useStateContext } from "@/contexts/ContexProvider";

export const IsOperator = () => {
    const { userAplikasi } = useStateContext();
    if (userAplikasi.groupakses && userAplikasi.groupakses === process.env.NEXT_PUBLIC_USER_OPERATOR) {
        return true;
    }
    return false;
};

export const IsSupervisor = () => {
    const { userAplikasi } = useStateContext();
    if (userAplikasi.groupakses && userAplikasi.groupakses === process.env.NEXT_PUBLIC_USER_SUPERVISOR) {
        return true;
    }
    return false;
};

export const IsSaOperator = () => {
    const { userAplikasi } = useStateContext();
    if (userAplikasi.groupakses && userAplikasi.groupakses === process.env.NEXT_PUBLIC_USER_SA_OPERATOR) {
        return true;
    }
    return false;
};

export const IsSaSupervisor = () => {
    const { userAplikasi } = useStateContext();
    if (userAplikasi.groupakses && userAplikasi.groupakses === process.env.NEXT_PUBLIC_USER_SA_SUPERVISOR) {
        return true;
    }
    return false;
};

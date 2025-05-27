import { FilterStatus } from "../../../types/FilterStatus";
import {CircleDashed, CircleCheck} from "lucide-react-native"


export function StatusIcon({ status }: { status: FilterStatus }) {
    return status === FilterStatus.DONE ? (
        <CircleCheck size={24} color="#2c46b1" />
    ) : (
        <CircleDashed size={24} color="#000" />
    );  
} 


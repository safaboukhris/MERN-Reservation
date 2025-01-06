import { Room } from "./room";
import { Chaise } from "./chaise"
import { ISignup } from "@/validations/auth";

export interface reservation {
    _id: string;
    bookedBy: ISignup;
    bookedRoom: Room;
    bookedChaise: Chaise;
    bookedDate: string;
    message: string;
    checkInDate: string;
    checkOutDate: string;
    status: "pending" | "cancel" | "confirm";
}
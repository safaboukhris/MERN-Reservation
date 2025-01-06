import { Room } from "@/types/room";

export interface Chaise {
    _id: string;
    roomChaise: Room;
    status: ['available', 'pending', 'reserved'];
}
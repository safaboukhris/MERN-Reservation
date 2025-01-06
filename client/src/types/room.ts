export interface Room {
    _id: string;
    roomName: string;
    roomType: string;
    roomCapacity: number;
    roomAvailability: boolean;
    roomPrice: number;
    roomDescription: string;
    roomImage?: string; 
    addedBy?: string; 
    createdAt: string; 
    updatedAt: string; 
}

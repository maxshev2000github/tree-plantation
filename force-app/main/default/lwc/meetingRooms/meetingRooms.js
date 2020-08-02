import { LightningElement } from 'lwc';

export default class MeetingRooms extends LightningElement {
    meetingRoomInfo = [
        { roomName: 'A-001', roomCapacity: '12' },
        { roomName: 'A-002', roomCapacity: '23' },
        { roomName: 'A-003', roomCapacity: '18' },
        { roomName: 'B-001', roomCapacity: '14' },
        { roomName: 'B-002', roomCapacity: '32' },
        { roomName: 'C-001', roomCapacity: '42' },
        { roomName: 'C-002', roomCapacity: '10' }
    ];
}
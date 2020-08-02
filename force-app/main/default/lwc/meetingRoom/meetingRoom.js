import { LightningElement, api} from 'lwc';

export default class MeetingRoom extends LightningElement {
    @api meetingRoomInfo; // {roomName:'A-001', roomCapacity:'12'}
}
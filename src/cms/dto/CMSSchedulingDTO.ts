import { IsNotEmpty } from "class-validator";

export class CMSSchedulingDTO {
  @IsNotEmpty()
  eventID: number; // New field
  eventTypeId: number; // New field
  CampaignID: number; // New field
  commandId: number; // New field
  recurrence_type: string; // New field
  recurrence_detail: string; // New field
  userID: number; // New field
  is_priority: number; // New field
  FromDT: string; // New field
  ToDT: string; // New field
  FromTm:string;
  ToTm:string;
  // layout:string;
  recurrence_range: string; // New field
  DisplayOrder: number; // New field
  dayPartId: number; // New field
  recurrenceRepeatsOn: string; // New field
  lastRecurrenceWatermark: string; // New field
  syncTimezone: string; // New field
  syncEvent: boolean; // New field
  displayid: any;
  static FromTm: string;
  static ToTm: string;
  organization:string
}

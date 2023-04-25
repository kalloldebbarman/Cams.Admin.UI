export class TriggerModel {
  Trigger: TriggerPropertiesModel;
}

export class TriggerPropertiesModel {
  DateFormat: string;
  TimeFormat: string;
  Simple: SimpleTriggerModel;
  Daily: DailyTriggerModel;
  Cron: CronTriggerModel;
  Calendar: CalendarTriggerModel;
  IsNew: boolean;
  IsCopy: boolean;
  Type: TriggerType;
  Job: string;
  TriggerName: string;
  TriggerGroup: string;
  OldTriggerName: string;
  OldTriggerFroup: string;
  Description: string;
  StartTimeUtc: string;
  EndTimeUtc: string;
  CalendarName: string;
  Priority: number;
  MisfireInstruction: string;
}

export enum TriggerType {
  Unknown = 0,
  Cron,
  Simple,
  Daily,
  Calender,
}

export class SimpleTriggerModel {
  RepeatInterval: number;
  RepeatUnit: string;
  RepeatCount: number;
  RepeatForever: boolean;
}

export class CalendarTriggerModel {
  RepeatInterval: number;
  RepeatUnit: string;
  Timezone: string;
  PreserveHourAcrossDst: boolean;
  SkipDayIfHourDoesNotExist: boolean;
}

export class CronTriggerModel {
  Expression: string;
  TimeZone: string;
}

export class DailyTriggerModel {
  RepeatInterval: number;
  RepeatUnit: string;
  RepeatCount: number;
  RepeatForever: boolean;
  StartTime: string;
  EndTime: string;
  TimeZone: string;
  Monday: boolean;
  Tuesday: boolean;
  Wednesday: boolean;
  Thursday: boolean;
  Friday: boolean;
  Saturday: boolean;
  Sunday: boolean;
}

//Master Data

export class MasterData {
  jobs: Jobs[];
  triggerGroups: TriggerGroups[];
  calendars: Calendars[];
  misfireInstructions: MisfireInstructions[];
  timeUnit: TimeUnit[];
  timeZones: TimeZone[];
  types: Type[];
}

export class Jobs {
  JobName: string;
}
export class TriggerGroups {
  TriggerGroupName: string;
}
export class Calendars {
  CalendarName: string;
}
export class MisfireInstructions {
  MisfireInstructions: string;
}
export class TimeUnit {
  Unit: string;
}
export class TimeZone {
  TimeZone: string;
}
export class Type {
  TypeId: number;
  TypeName: string;
}

import { Injectable } from "react.di";
import { NotificationService } from "../NotificationService";
import { range } from "../../../utils/Range";
import { KnownNotification, Notification, NotificationType } from "../../models/notification/Notification";

@Injectable
export class NotificationServiceMock extends NotificationService {

  async getAllNotifications(): Promise<KnownNotification[]> {
    return range(0, 10).map((x) => ({
      id: x,
      type: (x === 1
        ? NotificationType.PREFERENCE_EVALUATION
        : NotificationType.OTHERS),
      dateTime: "2018/9/24",
      content: `Notification ${x} ${Math.random()}`,
    })) as any;
  }

  async removeNotification(id: string): Promise<void> {

  }
}

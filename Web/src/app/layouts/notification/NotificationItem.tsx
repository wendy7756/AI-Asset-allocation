import React from "react";
import { KnownNotification, NotificationType } from "../../models/notification/Notification";
import { LocaleMessage } from "../../internationalization/components";
import lang from "../../internationalization/LocaleStore/lang";
import { Link } from "react-router-dom";
import BaseNotificaton from "./BaseNotificationItem";

interface Props {
  item: KnownNotification;
  onRemove(id: string): void;
}

const root = lang().notification;

export default function NotificationItem(props: Props) {
  const {item, onRemove} = props;
  switch (item.type) {
    case NotificationType.PREFERENCE_EVALUATION:
      return <BaseNotificaton titleId={root.preferenceEvaluation.title}
                              dateTime={item.dateTime}
                              onRemove={() => onRemove(item.id)}
                              link={<Link to={"/user/investmentPreference"}>
                                <LocaleMessage id={root.preferenceEvaluation.readMore}/>
                              </Link>}
      >
        <p><LocaleMessage id={root.preferenceEvaluation.content}/></p>
      </BaseNotificaton>;
    case NotificationType.OTHERS:
      return <BaseNotificaton
        titleId={root.others.title}
        dateTime={item.dateTime}
        onRemove={() => onRemove(item.id)}
      >
        <p>{item.content}</p>
      </BaseNotificaton>;
  }
}

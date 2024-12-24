// import { AccountNotificationEvent, EVENT_TOPIC, TOPIC_LISTENER, useSubscribeToNotificationTopic } from "@health/common";
// import {
//   MeNotificationsQuery,
//   useMarkNotificationsAsSeenMutation,
//   useMeNotificationsQuery,
// } from "@health/queries";
import { useState } from "react";

export const useNotificationsHooks = () => {
  // const { data, loading, fetchMore, refetch } = useMeNotificationsQuery({
  //   variables: {
  //     first: 10,
  //   },
  // });
  // const [markNotificationsAsSeen] = useMarkNotificationsAsSeenMutation();

  // const notifications = data?.me?.notifications?.edges?.map(
  //   (notification) => notification?.node
  // );
  // const totalCount = data?.me?.notifications?.totalCount;
  // const unReadNotificationsCount = data?.me?.unReadNotificationsCount;

  // const pageInfo = data?.me?.notifications?.pageInfo;

  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    // unReadNotificationsCount && !open && markNotificationsAsSeen();
    setOpen(!open);
  };

  // const onNotificationCreated: TOPIC_LISTENER<AccountNotificationEvent>[EVENT_TOPIC.ACCOUNT_NOTIFICATION] = useCallback(() => {
  //   refetch();
  // }, []);
  // useSubscribeToNotificationTopic(EVENT_TOPIC.ACCOUNT_NOTIFICATION, onNotificationCreated);

  // useEffect(() => {
  //   open && unReadNotificationsCount && refetch();
  // }, [open]);

  const fetchMoreData = () => {
    // if (pageInfo?.hasNextPage) {
    //   fetchMore({
    //     variables: {
    //       first: 5,
    //       after: pageInfo?.endCursor,
    //     },
    //     updateQuery: (prev: MeNotificationsQuery, { fetchMoreResult }: any) => {
    //       if (!fetchMoreResult) return prev;
    //       return {
    //         ...fetchMoreResult,
    //         me: {
    //           ...fetchMoreResult?.me,
    //           notifications: {
    //             ...fetchMoreResult?.me?.notifications,
    //             edges: [
    //               ...(prev?.me?.notifications?.edges || []),
    //               ...(fetchMoreResult?.me?.notifications?.edges || []),
    //             ],
    //           },
    //         },
    //       };
    //     },
    //   });
    // }
  };
  const loading = true;
  const pageInfo = { hasNextPage: false };
  const totalCount = 5;
  const notifications = [
    {
      id: "39293",
      title: "Don't know",
      body: "Notification test",
      type: "something",
    },
  ];
  const unReadNotificationsCount = 3;
  return {
    open,
    loading,
    pageInfo,
    totalCount,
    notifications,
    unReadNotificationsCount,
    handleToggle,
    fetchMoreData,
  };
};
